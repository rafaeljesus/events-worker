import rabbitmq from 'wascally'

import {startSubscription} from './worker'
import config from '../config'

export default async function () {
  try {
    const rconfig = config[process.env.NODE_ENV]
    await rabbitmq.configure(rconfig)
    startSubscription(rabbitmq)
    console.log('rabbitmq server started')
  } catch (err) {
    console.error('failed to start subscription', err)
  }
}
