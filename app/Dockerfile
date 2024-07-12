FROM node:18-alpine

WORKDIR /app

RUN apk update && apk upgrade
RUN apk add git

COPY ./package*.json /app/
COPY ./yarn.lock /app/

RUN yarn install && yarn cache clean

COPY . .

ENV PATH ./node_modules/.bin/:$PATH