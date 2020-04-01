# Use the official Node.js LTS image as a parent image
FROM node:lts-alpine

# Set the working directory
WORKDIR /usr/src/app

# Copy the package file(s) to list the dependencies
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the app's source code from your host to your image filesystem
COPY . .

# Inform Docker that the container is listening on the specified port at runtime
EXPOSE 8080

# Run the specified command within the container
CMD [ "npm", "start" ]
