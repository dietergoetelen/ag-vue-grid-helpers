import setType from './set-type'

describe('setType tests', () => {
  test('should have correct cellClass for number', () => {
    const column = setType(Number)({})

    expect(column.cellClass).toBe('text-right')
  })

  test('should not overwrite cellClass if cellClass exists', () => {
    const column = setType(Number)({ cellClass: 'foo' })

    expect(column.cellClass).toBe('foo text-right')
  })

  test('should have icon cell renderer for boolean', () => {
    const column = setType(Boolean)({})

    expect(column.cellRenderer).toBe('icon')
  })

  test('should have cellRendererParams for boolean', () => {
    const column = setType(Boolean)({})

    expect(column.cellRendererParams).toBeDefined()
  })

  test('should have cellRendererParams with property center', () => {
    const column = setType(Boolean)({})

    expect(column.cellRendererParams.center).toBe(true)
  })

  test('should have cellRendererParams with function to get faClass', () => {
    const column = setType(Boolean)({})

    expect(typeof column.cellRendererParams.faClass).toBe('function')
  })

  test('should have cellRendererParams with function to get iconName', () => {
    const column = setType(Boolean)({})

    expect(typeof column.cellRendererParams.iconName).toBe('function')
  })

  test('faClass should be text-red-500 if falsey', () => {
    const column = setType(Boolean)({ field: 'foo' })

    expect(column.cellRendererParams.faClass({
       data: {
        foo: false
       }
    })).toBe('text-red-500')
  })

  test('faClass should be text-green-500 if truthy', () => {
    const column = setType(Boolean)({ field: 'foo' })

    expect(column.cellRendererParams.faClass({
       data: {
        foo: true
       }
    })).toBe('text-green-500')
  })

  test('icon name should be times if data for column is falsey', () => {
    const column = setType(Boolean)({ field: 'foo' })

    expect(column.cellRendererParams.iconName({
       data: {
        foo: false
       }
    })).toBe('times')
  })

  test('icon name should be check if data for column is truthy', () => {
    const column = setType(Boolean)({ field: 'foo' })

    expect(column.cellRendererParams.iconName({
       data: {
        foo: true
       }
    })).toBe('check')
  })

  test('should return column if unsupportedType', () => {
    const column = setType(String)({ foo: 'bar' })

    expect({ foo:'bar' }).toStrictEqual(column)
  })
})