FROM node:latest

WORKDIR /orby-api

COPY . .

RUN rm -rf node_modules
RUN npm i

CMD ["npm", "start"]

EXPOSE 5002