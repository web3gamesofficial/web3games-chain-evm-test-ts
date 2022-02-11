FROM node:fermium-alpine

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Installing dependencies
RUN apk update && \
    apk add git
COPY package.json /usr/src/app/
RUN yarn

# Bundle app source
COPY . /usr/src/app

CMD [ "npm", "start" ]
