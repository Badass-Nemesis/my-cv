# use node 20, not 16
FROM node:20

WORKDIR /app

COPY package*.json ./

RUN npm install

# Copy all source files to the working directory
COPY . .

RUN npm run build

# Expose the port your app runs on/the holy hole
EXPOSE 3000

# Define the command to run your app
CMD ["npm", "start"]
