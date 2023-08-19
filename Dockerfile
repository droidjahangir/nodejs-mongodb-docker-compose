# Use the official Node.js image
FROM node:alpine

# ENV MONGO_DB_USERNAME=admin \
#     MONGO_DB_PWD=password


# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY ./app/package*.json ./

# Install Node.js dependencies
RUN npm install

# Copy the application code
COPY . .

# Expose port 3000 (the same port used in the Node.js application)
EXPOSE 3000

# Start the Node.js application
CMD ["npm", "start"]
