<template>
  <div id="app" class="h-screen">
    <ag-grid-vue 
      class="h-full ag-theme-balham" 
      :row-data="rowData"
      :framework-components="frameworkComponents" 
      :column-defs="columnDefs" />
  </div>
</template>

<script>
import { AgGridVue } from 'ag-grid-vue'
import Vue from 'vue'

// should be replaced by font-awesome
Vue.component('fa', {
  render: (ce) => {
    return ce('div', 'x')
  }
})

import {
  generateDef,
  generateBooleanDef,
  generateNumberDef,
  frameworkComponents,
  setStyle,
  onEvent,
  setWidth
} from '../../index'

export default {
  name: 'app',
  components: {
    AgGridVue
  },
  data () {
    return {
      rowData: [
        { 
          default: 'abc',
          boolean: true,
          number: 123,
          number2: 123,
          number3: 123
        },
        { 
          default: 'abc',
          boolean: false,
          number: 123,
          number2: 123,
          number3: 123
        }
      ],
      frameworkComponents,
      columnDefs: []
    }
  },
  beforeMount () {
    this.columnDefs = [
      generateDef('default').pipe(
        setWidth(200)
      ).get(),
      generateBooleanDef('boolean', 50).get(),
      generateNumberDef('number')
        .pipe(
          setStyle('success'),
          onEvent('onCellDoubleClicked', () => {
            // eslint-disable-next-line
            console.log('over', this.rowData)
          })
        )
        .get(),
      generateNumberDef('number2')
        .pipe(setStyle('danger'))
        .get(),
      generateNumberDef('number3')
        .pipe(setStyle('error'))
        .get()
    ]
  }
}
</script>

<style>
@import "../node_modules/ag-grid-community/dist/styles/ag-grid.css";
@import "../node_modules/ag-grid-community/dist/styles/ag-theme-balham.css";
</style>