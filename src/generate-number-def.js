import columnPipe from './column-pipe'
import setField from './set-field'
import setWidth from './set-width'
import setType from './set-type'

export default (field, width = 150) => {
  return columnPipe(
    setField(field),
    setWidth(width),
    setType(Number)
  )
}