import Event from '@rafaeljesus/events-core'
import { log } from '@rafaeljesus/events-util'

export function startSubscription (rabbitmq) {
  const handler = rabbitmq.handle('events', handleMessage)

  handler.catch((err, message) => {
    log.error('xxx message rejected', err)
    message.reject()
  })

  rabbitmq.startSubscription('events.q')
}

export async function handleMessage ({ payload }) {
  try {
    log.info('<-- event received', payload)
    const res = await Event.create(payload)
    log.info('--> event handled ', res)
  } catch (err) {
    log.error('xxx failed to handle event', err)
  }
}
