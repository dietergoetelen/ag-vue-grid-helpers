import setField from './set-field'

describe('set field tests', () => {
  test('should set the field property of an object', () => {
    expect(setField('foo')({})).toStrictEqual({ field: 'foo' })
  })
})
