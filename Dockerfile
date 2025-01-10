# use node 20, not 16
FROM node:20

WORKDIR /app

COPY package*.json ./

RUN npm install --force

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]