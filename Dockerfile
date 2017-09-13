FROM node:8

MAINTAINER therewillbecode

# Create app directory
WORKDIR /usr/src/app

RUN npm install react-scripts eslint eslint-plugin-react eslint-plugin-prettier -g

# Install app dependencies
COPY package.json .

RUN npm install

# Bundle app source
COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]
