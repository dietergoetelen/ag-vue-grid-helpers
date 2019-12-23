# ag-vue-grid-helpers
Library to help generate `columnDefs` for [ag-grid](https://www.ag-grid.com/). The idea of this library is to prevent typos when creating column definitions. 

At the moment this library has a hard dependency on `Vue` and `TailwindCSS`.

## Install
**npm**
```
npm install ag-vue-grid-helpers
```

**yarn**
```
yarn add ag-vue-grid-helpers
```

## Basic usage
By default there are three helper functions to generate columns. Each function accepts the name of the field and a width.
```js
import {
  generateDef,
  generateNumberDef,
  generateBooleanDef,
} from 'ag-vue-grid-helpers'

data () {
  return {
    columnDefs: [
      generateDef('myStringField'),
      generateNumberDef('myNumberField', 100), //override width, default = 150
      generateBooleanDef('myBooleanDef')
    ]
  }
}
```
## Advanced usage
It is possible to compose your own column definition by using the `columnPipe`. The columnPipe accepts a function in the following format: 

```js
const customType = params => column => ({
  ...column,
  params
})
```

For example the `generateBooleanDef` is composed as follows: 
```js
import columnPipe from './column-pipe'
import setField from './set-field'
import setWidth from './set-width'
import setType from './set-type'

export default (field, width = 150) => {
  return columnPipe(
    setField(field),
    setWidth(width),
    setType(Boolean)
  )
}
```

## Chain definitions

Each definition returns an object you can chain with `pipe`. For instance to set the style of a field one can use:
```js
columnDefs: [
  generateDef('myField')
    .pipe(setStyle('primary'))
]
```

## Road map
* [ ]  Events
* [ ]  Configure type
* [ ]  Configure styles
* [ ]  Configure boolean type