FROM mhart/alpine-node:6

RUN mkdir -p /usr/src/events-worker

WORKDIR /usr/src/events-worker

COPY package.json /usr/src/events-worker/
RUN npm install

COPY . /usr/src/events-worker/

EXPOSE 4000

CMD ["npm", "start"]
