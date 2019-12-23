import defaults from './config/defaults'

import columnPipe from './column-pipe'
import setField from './set-field'
import setWidth from './set-width'
import setType from './set-type'
import setHeader from './set-header'

export default (header, field, width = defaults.get('width')) => {
  return columnPipe(
    setHeader(header),
    setField(field),
    setWidth(width),
    setType(Number)
  )
}
