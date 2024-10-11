# Use official Node.js image as the base image
FROM node:20-alpine

# Set working directory in the container
WORKDIR /opt/
COPY package.json yarn.lock ./
RUN yarn global add node-gyp
RUN yarn config set network-timeout 600000 -g && yarn install
ENV PATH=/opt/node_modules/.bin:$PATH
WORKDIR /opt/app

# Copy the rest of the application code into the container
COPY . .

RUN chown -R node:node /opt/app

# Build the Next.js application
USER node
RUN ["yarn", "build"]
EXPOSE 9000
CMD ["yarn", "start"]