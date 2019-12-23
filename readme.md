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
      generateDef('headerString', 'myStringField').get(),
      generateNumberDef('headerNumber', 'myNumberField', 100).get(), //override width, default = 150
      generateBooleanDef('headerBoolean', 'myBooleanDef').get()
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
import setHeader from './set-header'

export default (header, field, width = 150) => {
  return columnPipe(
    setHeader(header),
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
    .pipe(setStyle('success')).get()
]
```

Or with events
```js
columnDefs: [
  generateDef('myField')
    .pipe(
      onEvent('onCellClicked', (data) => {
        // do something with data
      })
    ).get()
]
```

## Override default config
```js
import {
  setConfig
} from 'ag-vue-grid-helpers'

// set all default column widths to 200
setConfig.setWidth(200)

// Configure setStyle classes
setConfig.setSuccessStyle('text-green-500 bg-white')
setConfig.setDangerStyle('text-orange-500 bg-white')
setConfig.setErrorStyle('text-red-500 bg-white')
```

## Road map
* [x]  Events
* [ ]  Configure type
* [x]  Configure styles
* [ ]  Configure boolean type