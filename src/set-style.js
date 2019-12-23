const typeMap = {
  success: 'text-white bg-green-500',
  error: 'text-white bg-red-500',
  danger: 'text-white bg-orange-500'
}

export default type => column => {
  if (!typeMap[type]) {
    throw new Error('type not found')
  }

  return {
    ...column,
    cellClass: column.cellClass ? `${column.cellClass} ${typeMap[type]}` : typeMap[type]
  }
}
