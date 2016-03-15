import rabbitmq from 'wascally'

import config from '../config'
import consumer from './consumer'

const log = console.log

export default async function () {
  try {
    const rconfig = config[process.env.NODE_ENV]
    await rabbitmq.configure(rconfig)
    consumer.startSubscription(rabbitmq)
    log.info('rabbitmq server started')
  } catch (err) {
    throw err
  }
}
