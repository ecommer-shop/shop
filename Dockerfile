FROM oven/bun:1

WORKDIR /usr/src/app

COPY package.json bun.lock ./
RUN bun install --frozen-lockfile
COPY . .
RUN bun run build
RUN bun run build
RUN cp -R ./static ./dist/static
