import setWidth from './set-width'

describe('setWidth tests', () => {
  test('should set the field property of an object', () => {
    expect(setWidth(200)({}).width).toBe(200)
  })
})