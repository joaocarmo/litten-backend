const app = require('../../lib/app')

describe('\'users\' service', () => {
  it('registered the service', () => {
    const service = app.service('users')
    expect(service).toBeTruthy()
  })
})
