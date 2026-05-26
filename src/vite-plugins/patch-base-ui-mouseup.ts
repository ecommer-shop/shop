import type { Plugin } from 'vite';

/**
 * Patch para @base-ui/react - useMenuItemCommonProps
 *
 * Problema: el handler onMouseUp llama itemRef.current.click() cuando el mouse
 * se suelta sobre un DropdownMenuItem. Esto dispara un segundo click que cierra
 * cualquier modal/dialog que se haya abierto con ese click, ignorando closeOnClick={false}.
 *
 * Bug reportado en @vendure/dashboard 3.6.2. Remover este patch cuando se actualice
 * a una versión que lo corrija.
 */
export function patchBaseUiMouseUp(): Plugin {
    return {
        name: 'patch-base-ui-mouseup',
        enforce: 'pre' as const,
        transform(code: string, id: string) {
            const normalizedId = id.replace(/\\/g, '/');
            if (!normalizedId.includes('@base-ui/react/esm/menu/item/useMenuItemCommonProps')) {
                return null;
            }

            const patched = code.replace(
                `      if (itemRef.current && store.context.allowMouseUpTriggerRef.current && (!isContextMenu || event.button === 2)) {
        // This fires whenever the user clicks on the trigger, moves the cursor, and releases it over the item.
        // We trigger the click and override the \`closeOnClick\` preference to always close the menu.
        if (!itemMetadata || itemMetadata.type === 'regular-item') {
          itemRef.current.click();
        }
      }`,
                `      // [patch-base-ui-mouseup] segundo click removido para no cerrar modals`
            );

            return patched === code ? null : patched;
        },
    };
}