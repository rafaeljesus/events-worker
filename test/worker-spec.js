import test from 'ava'
import rabbitmq from 'wascally'
import Event from '@rafaeljesus/events-core'

import { startSubscription, handleMessage } from '../src/worker'
import config from '../config'

test.beforeEach(async () =>
  await rabbitmq.configure(config[process.env.NODE_ENV])
)

test.afterEach(async () =>
  await Event.remove()
)

test('should handleMessage', async (t) => {
  const payload = { body: { name: 'order_created' } }
  await handleMessage(payload)
  const doc = await Event.findOne()
  t.truthy(doc.name === payload.body.name)
})
