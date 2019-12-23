const styleMap = {
  success: 'text-white bg-green-500',
  error: 'text-white bg-red-500',
  danger: 'text-white bg-orange-500'
}

export default style => column => {
  if (!styleMap[style]) {
    throw new Error('type not found')
  }

  return {
    ...column,
    cellClass: column.cellClass ? `${column.cellClass} ${styleMap[style]}` : styleMape[style]
  }
}
