FROM node:15

WORKDIR /usr/src/app

RUN apt-get update && apt-get install -y wget

RUN npm install

COPY . .

EXPOSE 3000