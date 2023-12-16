FROM node:19-alpine

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install --production

COPY . .

RUN npm run build

RUN npm install -g serve

CMD ["serve", "-s", "build", "-p", "${PORT_CLIENT}"]

EXPOSE ${PORT_CLIENT}
