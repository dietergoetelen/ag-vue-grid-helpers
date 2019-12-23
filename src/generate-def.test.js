import generateDef from './generate-def'
import columnPipe from './column-pipe'
import setField from './set-field'
import setWidth from './set-width'

jest.mock('./column-pipe')
jest.mock('./set-field')
jest.mock('./set-width')

describe('generate def tests', () => {
  beforeEach(() => {
    setField.mockReset()
    setWidth.mockReset()
    columnPipe.mockReset()
  })

  test('should call columnPipe with correct parameters', () => {
    generateDef('foo', 200)
    
    expect(setField).toHaveBeenCalled()
    expect(setWidth).toHaveBeenCalled()
    expect(columnPipe).toHaveBeenCalled()
  })
})
