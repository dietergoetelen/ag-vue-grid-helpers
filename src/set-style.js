import defaults from './config/defaults'

const styleMap = (style) => {
  return defaults.get('style')[style]
}

export default style => column => {
  if (!styleMap(style)) {
    throw new Error('style not found')
  }

  return {
    ...column,
    cellClass: column.cellClass ? `${column.cellClass} ${styleMap(style)}` : styleMap(style)
  }
}
