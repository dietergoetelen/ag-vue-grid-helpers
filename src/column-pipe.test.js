import columnPipe from './column-pipe'

describe('columnPipe tests', () => {
  test('should throw if no arguments provided', () => {
    expect(() => columnPipe()).toThrow()
  })

  test('should throw if invalid type arguments provided', () => {
    expect(() => columnPipe(() => {}, 'test')).toThrow()
  })

  test('should have a pipe property with link to itself', () => {
    const result = columnPipe((value) => ({
      ...value
    }))
    expect(typeof result.pipe).toBe('function')
  })

  test('should skip if next returns undefined', () => {
    const result = columnPipe(() => {}, (values) => ({ ...values, count: 0 }))

    expect(result.count).toBe(0)
  })

  test('should be possible to chain with pipe', () => {
    const expectedResult = { count: 5, pipe: columnPipe }

    const initial = (value) => ({ 
      ...value, 
      count: 1 
    })

    const increment = (value) => ({ 
      ...value,
      count: value.count + 1
    })

    const result = columnPipe(initial)
      .pipe(increment)
      .pipe(increment)
      .pipe(increment)
      .pipe(increment)
    
    expect(result.count).toEqual(expectedResult.count)
  })

  test('should map results from previous function to next', () => {
    const initial = (value) => ({ 
      ...value, 
      count: 1 
    })

    const increment = (value) => ({ 
      ...value,
      count: value.count + 1
    })
    
    expect(columnPipe(
      initial,
      increment,
      increment,
      increment,
      increment
    ).count).toBe(5)
  })
})
