import Event from '@rafaeljesus/events-model'

const log = console.log

export function startSubscription (rabbitmq) {
  const handler = rabbitmq.handle('events', handleMessage)

  handler.catch((err, message) => {
    log.error('events message rejected', err)
    message.reject()
  })

  rabbitmq.startSubscription('events.q')
}

export async function handleMessage (message) {
  try {
    await Event.create(message.payload)
  } catch (err) {
    log.error('failed to create event', err)
  }
}
