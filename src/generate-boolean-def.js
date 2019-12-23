import defaults from './config/defaults'

import columnPipe from './column-pipe'
import setField from './set-field'
import setWidth from './set-width'
import setType from './set-type'

export default (field, width = defaults.get('width')) => {
  return columnPipe(
    setField(field),
    setWidth(width),
    setType(Boolean)
  )
}
