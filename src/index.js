import rabbitmq from 'wascally'
import { log } from '@rafaeljesus/events-util'

import { startSubscription } from './worker'
import config from '../config'

export default async () => {
  try {
    const rconfig = config[process.env.NODE_ENV]
    await rabbitmq.configure(rconfig)
    startSubscription(rabbitmq)
    log.info('\u001b[96mReady!\u001b[39m] rabbitmq server started')
  } catch (err) {
    log.info('\u001b[96mFailed!\u001b[39m] rabbitmq server failed to start', err)
  }
}
