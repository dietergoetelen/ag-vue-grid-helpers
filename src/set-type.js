const supportedTypes = {
  [Number]: (column) => {
    return {
      ...column,
      cellClass: column.cellClass ? `${column.cellClass} text-right` : 'text-right'
    }
  },
  [Boolean]: (column) => {
    return {
      ...column,
      cellRenderer: 'icon',
      cellRendererParams: {
        center: true,
        faClass: ({ data }) => {
          if (data[column.field]) {
            return 'text-green-500'
          }

          return 'text-red-500'
        },
        iconName: ({ data }) => {
          if(data[column.field]) {
            return 'check'
          }

          return 'times'
        }
      }
    }
  }
}

export default type => (column) => {
  if (supportedTypes[type]) {
    return supportedTypes[type](column)
  }

  return column
}