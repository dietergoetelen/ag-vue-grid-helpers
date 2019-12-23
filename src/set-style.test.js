import setStyle from './set-style'

describe('setStyle tests', () => {
  test('should throw if type does not exist', () => {
    expect(() => setStyle('not-exists')({})).toThrow()
  })

  test('should keep default cellClass', () => {
    const result = setStyle('danger')({ cellClass: 'boeh' })
    expect(result.cellClass).toBe('boeh text-white bg-orange-500')
  })

  test('should have orange bg on danger', () => {
    const result = setStyle('danger')({})
    expect(result.cellClass).toBe('text-white bg-orange-500')
  })

  test('should have red bg on error', () => {
    const result = setStyle('error')({})
    expect(result.cellClass).toBe('text-white bg-red-500')
  })

  test('should have green bg on success', () => {
    const result = setStyle('success')({})
    expect(result.cellClass).toBe('text-white bg-green-500')
  })
})