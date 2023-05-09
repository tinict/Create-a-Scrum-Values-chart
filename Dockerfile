FROM nginx:latest
FROM node:19.5.0-alpine

#App directory
WORKDIR /app

COPY package*.json ./
COPY public /usr/share/nginx/html

RUN npm install

COPY . .

CMD ["node", "index.js"]
EXPOSE 3000 
