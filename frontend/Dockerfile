FROM node:17.2.0-bullseye as base
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY --chown=node:node . .

USER node
EXPOSE 3000
CMD [npm, start]
