FROM node:10

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

RUN npm install pm2 -g

ADD . /usr/src/app

RUN npm run build

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.2.1/wait /wait

RUN chmod +x /wait

# Start
# CMD [ "npm", "start" ]

CMD /wait && pm2-runtime ./dist/index.js
# CMD cat ./dist/setup.js