import setDefaults, { width, style } from './defaults'

export default {
  setWidth(value) {
    setDefaults.set(width(value))
  },
  setSuccessStyle(value) {
    setDefaults.set(style({
      success: value
    }))
  },
  setDangerStyle(value) {
    setDefaults.set(style({
      danger: value
    }))
  },
  setErrorStyle(value) {
    setDefaults.set(style({
      error: value
    }))
  }
}