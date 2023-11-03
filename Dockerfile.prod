# Use the official Node.js 18 image as the base image
FROM node:18

# Set the working directory in the container
WORKDIR /usr/src/app

# Install yarn globally
# RUN npm install -g yarn

# Copy the package.json and yarn.lock files to the working directory
COPY package.json yarn.lock ./

# Install dependencies using yarn
RUN yarn

# Copy the rest of the application code to the working directory
COPY . .

RUN yarn lerna bootstrap
RUN yarn build

# Set the default value for NITRO_PORT
ENV NITRO_PORT=3000
ENV SYLIUS_API_URL=""
ENV MIDDLEWARE_ENV="dev"
ENV MIDDLEWARE_ALLOWED_ORIGINS="http://localhost:3000"
ENV SDK_MIDDLEWARE="http://localhost:4000/sylius"

# Expose the port your application will run on (if applicable)
EXPOSE ${NITRO_PORT}

# Start your application with the 'yarn dev' command
CMD ["yarn", "start:all"]
