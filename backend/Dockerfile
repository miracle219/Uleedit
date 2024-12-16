FROM node:21.1.0

ENV NODE_ENV=production
ENV PORT=8080

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . .

RUN npx tsc

EXPOSE 8080

CMD ["node", "server.js"]
