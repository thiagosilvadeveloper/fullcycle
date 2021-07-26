FROM node:15

WORKDIR /usr/src/app

COPY . .

RUN apt-get update && apt-get install -y wget

ENTRYPOINT [ "npm","install" ]

EXPOSE 3000