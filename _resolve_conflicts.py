#!/usr/bin/env python3
"""Resolve merge conflicts by unioning GraphQL Mutation/Query fields."""
import re
from pathlib import Path

GRAPHQL = Path(r"c:\Users\Usuario\Documents\GitHub\shop\src\gql\graphql-env.d.ts")
PACKAGE = Path(r"c:\Users\Usuario\Documents\GitHub\shop\package.json")


def extract_named_fields(type_line: str) -> dict[str, str]:
    """Parse fields from a Mutation/Query type definition line into name -> field snippet."""
    # Match: 'fieldName': { name: 'fieldName', type: ... };
    pattern = re.compile(
        r"'([A-Za-z_][A-Za-z0-9_]*)': \{ name: '\1', type: .*?\}; "
    )
    fields = {}
    for m in pattern.finditer(type_line):
        fields[m.group(1)] = m.group(0)
    return fields


def merge_type_defs(head: str, theirs: str) -> str:
    """Merge two type definition lines by union of fields, sorted alphabetically."""
    # Determine type name and wrapping from head
    type_match = re.match(
        r"(    '[A-Za-z]+': \{ kind: 'OBJECT'; name: '[A-Za-z]+'; fields: \{ )(.*)( \}; \};)",
        head,
        re.DOTALL,
    )
    if not type_match:
        # Fallback: prefer head
        print("WARNING: could not parse type wrapper, using HEAD")
        return head

    prefix, _, suffix = type_match.groups()
    # Re-extract fields from both full lines
    head_fields = extract_named_fields(head)
    theirs_fields = extract_named_fields(theirs)

    only_head = sorted(set(head_fields) - set(theirs_fields))
    only_theirs = sorted(set(theirs_fields) - set(head_fields))
    print(f"  Only HEAD: {only_head}")
    print(f"  Only origin/dev: {only_theirs}")

    merged = {**theirs_fields, **head_fields}  # head wins on overlap
    # Sort alphabetically for stable output
    ordered = "".join(merged[k] for k in sorted(merged.keys(), key=str.lower))
    return prefix + ordered + suffix


def resolve_graphql():
    content = GRAPHQL.read_text(encoding="utf-8")
    pattern = re.compile(
        r"<<<<<<< HEAD\n(.*?)\n=======\n(.*?)\n>>>>>>> origin/dev",
        re.DOTALL,
    )
    conflicts = list(pattern.finditer(content))
    print(f"Resolving {len(conflicts)} GraphQL conflicts")

    def replacer(m: re.Match) -> str:
        head, theirs = m.group(1), m.group(2)
        type_name = re.search(r"'(\w+)':", head)
        print(f"\nMerging {type_name.group(1) if type_name else '?'}:")
        # Second conflict in Query also includes RecordClickwrapAcceptanceInput on HEAD
        if "'RecordClickwrapAcceptanceInput'" in head and "'RecordClickwrapAcceptanceInput'" not in theirs:
            # Split: Query line + RecordClickwrap line
            parts = head.split("\n")
            query_head = parts[0]
            extra_lines = parts[1:]
            query_theirs = theirs.strip()
            merged_query = merge_type_defs(query_head, query_theirs)
            extras = "\n".join(extra_lines)
            return merged_query + ("\n" + extras if extras else "")
        return merge_type_defs(head, theirs)

    new_content = pattern.sub(replacer, content)
    if "<<<<<<<" in new_content:
        raise SystemExit("Still have conflict markers in graphql-env.d.ts")
    GRAPHQL.write_text(new_content, encoding="utf-8")
    print("\nWrote graphql-env.d.ts")


def resolve_package():
    content = PACKAGE.read_text(encoding="utf-8")
    # Keep HEAD's dashboard watch + concurrently npm:dev:* (more complete for this branch)
    resolved = re.sub(
        r"<<<<<<< HEAD\n"
        r'        "dev:dashboard": "vite build --watch",\n'
        r'        "dev": "concurrently npm:dev:\*",\n'
        r"=======\n"
        r'        "dev": "concurrently \\"bun run dev:server\\" \\"bun run dev:worker\\"",\n'
        r">>>>>>> origin/dev\n",
        '        "dev:dashboard": "vite build --watch",\n'
        '        "dev": "concurrently npm:dev:*",\n',
        content,
    )
    if "<<<<<<<" in resolved:
        # Try simpler replace
        resolved = content.replace(
            """<<<<<<< HEAD
        "dev:dashboard": "vite build --watch",
        "dev": "concurrently npm:dev:*",
=======
        "dev": "concurrently \\"bun run dev:server\\" \\"bun run dev:worker\\"",
>>>>>>> origin/dev
""",
            """        "dev:dashboard": "vite build --watch",
        "dev": "concurrently npm:dev:*",
""",
        )
    if "<<<<<<<" in resolved:
        # Manual line-based
        lines = content.splitlines(keepends=True)
        out = []
        i = 0
        while i < len(lines):
            if lines[i].startswith("<<<<<<<"):
                i += 1
                while i < len(lines) and not lines[i].startswith("======="):
                    out.append(lines[i])  # keep HEAD
                    i += 1
                while i < len(lines) and not lines[i].startswith(">>>>>>>"):
                    i += 1  # skip theirs
                i += 1  # skip >>>>>>>
            else:
                out.append(lines[i])
                i += 1
        resolved = "".join(out)
    if "<<<<<<<" in resolved:
        raise SystemExit("Still have conflict markers in package.json")
    PACKAGE.write_text(resolved, encoding="utf-8")
    print("Wrote package.json (kept HEAD:dev:dashboard + concurrently npm:dev:*)")


if __name__ == "__main__":
    resolve_package()
    resolve_graphql()
    print("Done")
