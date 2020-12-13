FROM node:alpine

WORKDIR /app

COPY package.json .

RUN npm install

RUN mv ./node_modules /

COPY . .

EXPOSE 8080

CMD ["npm", "start"]