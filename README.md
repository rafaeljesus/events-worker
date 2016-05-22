## Events Worker

[![CircleCI](https://circleci.com/gh/rafaeljesus/events-worker/tree/master.svg?style=svg)](https://circleci.com/gh/rafaeljesus/events-worker/tree/master)
[![Docker Image Pulls](https://img.shields.io/docker/pulls/rafaeljesus/events-worker.svg)](https://hub.docker.com/r/rafaeljesus/events-worker/)
[![bitHound Overall Score](https://www.bithound.io/github/rafaeljesus/events-worker/badges/score.svg)](https://www.bithound.io/github/rafaeljesus/events-worker)
[![bitHound Dependencies](https://www.bithound.io/github/rafaeljesus/events-worker/badges/dependencies.svg)](https://www.bithound.io/github/rafaeljesus/events-worker/master/dependencies/npm)
[![bitHound Dev Dependencies](https://www.bithound.io/github/rafaeljesus/events-worker/badges/devDependencies.svg)](https://www.bithound.io/github/rafaeljesus/events-worker/master/dependencies/npm)
[![bitHound Code](https://www.bithound.io/github/rafaeljesus/events-worker/badges/code.svg)](https://www.bithound.io/github/rafaeljesus/events-worker)

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/rafaeljesus/events-worker)

* Worker runs your Events logs.

## Running server
To start the serve execute:
```bash
npm start
```

## Docker
This repository has automated image builds on hub.docker.com.

run:
```
$ docker-machine start default
$ eval $(docker-machine env default)
$ docker-compose up
$ curl `docker-machine ip default`:3000
```

## Contributing
- Fork it
- Create your feature branch (`git checkout -b my-new-feature`)
- Commit your changes (`git commit -am 'Add some feature'`)
- Push to the branch (`git push origin my-new-feature`)
- Create new Pull Request

### Maintaners

* [Rafael Jesus](https://github.com/rafaeljesus)
