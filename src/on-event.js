const events = [
  'onCellClicked',
  'onCellMouseDown',
  'onCellDoubleClicked',
  'onCellMouseOver',
  'onCellMouseOut',
  'onCellContextMenu',
  'onCellEditingStarted',
  'onCellEditingStopped',
  'onCellKeyDown',
  'onCellKeyPress',
  'onCellValueChanged'
]

export default (eventName, cb) => column => {
  if (! events.includes(eventName)) {
    throw new Error('event does not exists')
  }

  if (typeof cb !== 'function') {
    throw new Error('callback is not a function')
  }

  return {
    ...column,
    [eventName]: cb
  }
}
