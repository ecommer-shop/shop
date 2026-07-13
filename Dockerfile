FROM node:20

WORKDIR /usr/src/app

RUN npm install -g bun

COPY package.json bun.lock ./
RUN bun install --frozen-lockfile
COPY . .
RUN bun run build
RUN cp -R ./static ./dist/static
