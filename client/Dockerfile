#use an official Node.js runtime as the base image
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container's working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application code to the container's working directory
COPY . .

# Expose the port that the app will run on
EXPOSE 3000

# Define the command to start your app (make sure this matches your npm start command)
CMD ["npm", "start", "--host", "0.0.0.0", "--port", "3000"]

