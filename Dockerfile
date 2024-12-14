# use node 20, not 16
FROM node:20

WORKDIR /app

COPY package*.json ./

# Remove framer-motion from package.json temporarily
RUN cp package.json package.json.bak && \
    sed '/"framer-motion":/d' package.json.bak > package.json

# Install remaining dependencies using npm install
RUN npm install

# Revert package.json to include framer-motion
RUN mv package.json.bak package.json

# Install framer-motion with the --legacy-peer-deps flag
RUN npm install framer-motion --legacy-peer-deps

# Copy all source files to the working directory
COPY . .

RUN npm run build

# Expose the port your app runs on the holy hole
EXPOSE 3000

# Define the command to run your app
CMD ["npm", "start"]