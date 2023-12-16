FROM node:19-alpine

WORKDIR /app


COPY package.json package-lock.json ./
RUN npm install --production

COPY .. .

CMD ["node", "index.js"]

EXPOSE ${PORT_SERVER}
