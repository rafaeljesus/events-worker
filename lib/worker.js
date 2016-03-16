import Event from '@rafaeljesus/events-model'

export function startSubscription (rabbitmq) {
  const handler = rabbitmq.handle('events', handleMessage)

  handler.catch((err, message) => {
    console.error('events message rejected', err)
    message.reject()
  })

  rabbitmq.startSubscription('events.q')
}

export async function handleMessage (message) {
  try {
    await Event.create(message.payload)
  } catch (err) {
    console.error('failed to create event', err)
  }
}
