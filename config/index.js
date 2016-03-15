import url from 'url'

const ampqUrl = process.env.CLOUDAMQP_URL || 'amqp://guest:guest@localhost'
const rabbitmqUrl = url.parse(ampqUrl)

const exchanges = [{
  name: 'events.ex',
  type: 'direct',
  persistent: true,
  durable: true
}]

const queues = [{
  name: 'events.q',
  durable: true
}]

const bindings = [{
  exchange: 'events.ex',
  target: 'events.q',
  keys: ['events']
}]

export default {
  production: {
    connection: {
      user: rabbitmqUrl.auth.split(':')[0],
      pass: rabbitmqUrl.auth.split(':')[1],
      server: rabbitmqUrl.hostname,
      vhost: (rabbitmqUrl.path || '').substr(1)
    },
    exchanges: exchanges,
    queues: queues,
    bindings: bindings
  },
  development: {
    connection: {
      user: 'guest',
      pass: 'guest',
      server: 'localhost',
      port: 5672,
      vhost: '/'
    },
    exchanges: exchanges,
    queues: queues,
    bindings: bindings
  },
  test: {
    connection: {
      user: 'guest',
      pass: 'guest',
      server: 'localhost',
      vhost: '/'
    },
    exchanges: exchanges,
    queues: queues,
    bindings: bindings
  }
}
