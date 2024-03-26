FROM node:18.16.0-alpine as base

RUN apk add --no-cache dumb-init

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV NODE_ENV production

EXPOSE 8649

CMD [ "dumb-init", "--", "node", "index.js" ]
