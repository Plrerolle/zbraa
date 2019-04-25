FROM node:11.12

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci --only=production

EXPOSE 3000

CMD [ "npm", "start" ]