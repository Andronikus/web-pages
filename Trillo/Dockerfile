FROM node:alpine

WORKDIR /app

RUN npm install netlify-cli -g

COPY package.json .

RUN npm install

RUN mv ./node_modules /

COPY . .

EXPOSE 8080

CMD ["npm", "start"]