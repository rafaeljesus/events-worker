import test from 'ava'
import chai from 'chai'
import spies from 'chai-spies'
import rabbitmq from 'wascally'
import Event from '@rafaeljesus/events-model'

import {startSubscription, handleMessage} from '../src/worker'
import config from '../config'

chai.use(spies)

const expect = chai.expect

test.beforeEach(async function () {
  await rabbitmq.configure(config[process.env.NODE_ENV])
})

test.afterEach(async function () {
  await Event.remove()
})

test('should startSubscription', async function () {
  let handleSpy = chai.spy(rabbitmq, 'handle')
  let startSubscriptionSpy = chai.spy(rabbitmq, 'startSubscription')
  await startSubscription(rabbitmq)
  expect(handleSpy).to.have.been.called
  expect(startSubscriptionSpy).to.have.been.called
})

test('should handleMessage', async function () {
  await handleMessage({payload: {name: 'order_created'}})
  let res = await Event.findOne()
  expect(res._id).to.exist
})
