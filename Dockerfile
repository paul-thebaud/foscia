FROM node:18-alpine as build

RUN apk update && apk add --no-cache zip git curl

RUN corepack enable
RUN corepack prepare pnpm@latest --activate

COPY entrypoint.sh /usr/local/bin/docker-entrypoint.sh
RUN chmod +x /usr/local/bin/docker-entrypoint.sh

ENTRYPOINT ["/usr/local/bin/docker-entrypoint.sh"]

CMD ["pnpm", "build"]

FROM build as test

CMD ["pnpm", "test:watch"]

FROM build as playground

CMD ["pnpm", "dev"]

HEALTHCHECK --retries=15 --interval=15s --timeout=15s CMD ["curl", "-f", "http://localhost:5173"]

FROM build as docs

CMD ["sh", "-c", "pnpm build && pnpm start"]

HEALTHCHECK --retries=15 --interval=15s --timeout=15s CMD ["curl", "-f", "http://localhost:3000"]
