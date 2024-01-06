FROM node:20

WORKDIR /app


COPY package.json package-lock.json ./
RUN npm install --production

COPY .. .

CMD ["node", "index.js"]

EXPOSE ${SERVER_PORT}
