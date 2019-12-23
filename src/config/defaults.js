let defaultState = {
  width: 150,
  style: {
    success: 'text-white bg-green-500',
    error: 'text-white bg-red-500',
    danger: 'text-white bg-orange-500'
  }
}

export const width = width => state => ({
  ...state,
  width
})

export const style = style => state => ({
  ...state,
  style: {
    ...state.style,
    style
  }
})

export default {
  set (fn) {
    if (typeof fn !== 'function') {
      throw new Error('typeof fn is not a function')
    }

    defaultState = fn(defaultState)
  },
  get (property) {
    return defaultState[property]
  }
}
