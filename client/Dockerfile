FROM node:20

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install --production

COPY . .

RUN npm run build

RUN npm install -g serve

CMD ["serve", "-s", "build", "-p", "${CLIENT_PORT}"]

EXPOSE ${CLIENT_PORT}
