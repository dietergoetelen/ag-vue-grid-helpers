const isFunction = arg => typeof arg === 'function'
const allFunction = fns => fns.every(isFunction)

const pipe = value => (...fns) => {
  if (fns.length === 0) {
    throw new Error('No functions provided')
  }

  if (!allFunction(fns)) {
    throw new Error('Not all provided arguments are of type function')
  }

  const reduced = fns.reduce((prev, next) => {
    const result = next(prev)

    if (result === undefined) {
      return prev
    }

    return result
  }, value)

  return {
    ...reduced,
    pipe: pipe(reduced)
  }
}


export default pipe({})