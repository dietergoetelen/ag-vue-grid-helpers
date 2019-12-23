let defaultState = {
  width: 150
}

export const width = width => state => ({
  ...state,
  width
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
