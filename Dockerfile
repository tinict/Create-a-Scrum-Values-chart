FROM node:latest

#App directory
WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

CMD ["node", "index.js"]
EXPOSE 3000