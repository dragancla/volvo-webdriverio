# https://github.com/cypress-io/cypress-docker-images/tree/master/browsers
FROM cypress/browsers:node16.17.0-chrome106

WORKDIR /testing

COPY package*.json ./

RUN npm ci

COPY . .

CMD ["npm", "run", "test:ci"]