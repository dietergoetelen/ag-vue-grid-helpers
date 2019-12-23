<template>
  <div :class="{'flex items-center h-full justify-center': params.center === true }">
    {{ params.value != undefined && typeof(params.value) !== 'boolean' ? params.value : '' }}
    <fa :class="getClass()" :icon="getIcon()" />
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  methods: {
    getClass () {
      if (typeof this.params.faClass === 'undefined') {
        return 'text-blue-500'
      }

      if (typeof this.params.faClass === 'string') {
        return this.params.faClass
      }

      if (typeof this.params.faClass === 'function') {
        return this.params.faClass(this.params)
      }
    },
    getIcon () {
      if (typeof this.params.iconName === 'string') {
        return this.params.iconName
      }

      if (typeof this.params.iconName === 'function') {
        return this.params.iconName(this.params)
      }
    }
  }
})
</script>
