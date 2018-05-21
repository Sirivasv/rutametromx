# Select Image
FROM node:carbon

# Create app directory
WORKDIR /usr/src/app

# Install Dependencies
COPY package*.json ./
RUN npm install --only=production

# Bundle app source
COPY . .

# Expose App Port
EXPOSE 3000

# Run App
CMD [ "npm", "start" ]