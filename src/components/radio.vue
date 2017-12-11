<template>
  <label>
    <span v-if="$slots.label"><slot name="label"></slot></span>
    <span v-else-if="label">{{ label }}</span>

    <input type="radio"
           :name="name"
           :value="value"
           :checked="input === value"
           @change="updateValue"
           @focus="$emit('focus')"
           @blur="$emit('blur')"
    >
    <slot></slot>
  </label>
</template>
<script>
  export default {
    model: {
      prop: 'checked',
      event: 'input'
    },

    props: {
      value: {},
      checked: {},
      label: { type: String },
      name: { type: String, require: true }
    },

    computed: {
      group () {
        return ('$parent' in this && this.$parent.$options.name === 'vue-group') ? this.$parent : null
      },
      input () {
        return this.group ? this.group.value : this.checked
      }
    },

    methods: {
      updateValue (e) {
        if (this.group) {
          this.group.$emit('input', this.value)
          this.group.$emit('checked', this.value)
        } else {
          this.$emit('input', this.value)
          this.$emit('checked', this.value)
        }
      }
    }
  }
</script>
