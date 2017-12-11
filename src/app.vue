<template>
  <div id="app">
    <form @submit.prevent="onSubmit" v-cloak>
      <div class="form-item">
        <vue-input label="Input" name="input" v-model="form.input"></vue-input>
        - {{ form.input }}
      </div>
      <div class="form-item">
        <vue-radio name="radio1" :value="1" v-model="form.radio1">1</vue-radio>
        <vue-radio name="radio1" :value="2" v-model="form.radio1">2</vue-radio>
        - {{ form.radio1 }}
      </div>
      <div class="form-item">
        <vue-group label="Radio" v-model="form.radio2">
          <vue-radio name="radio2" :value="1">1</vue-radio>
          <vue-radio name="radio2" :value="2">2</vue-radio>
        </vue-group>
        - {{ form.radio2 }}
      </div>
      <div class="form-item">
        <vue-check label="Check" name="check" :value="1" v-model="form.check">1</vue-check>
        - {{ form.check }}
      </div>
      <div class="form-item">
        <vue-select label="Select" name="select" v-model="form.select" :options="options">
          <template slot-scope="props">
            <option v-for="(option, key) in props.options"
                    :key="key"
                    :value="option.id"
                    :selected="form.select === option.id"
            >{{ option.value }}</option>
          </template>
        </vue-select>
        - {{ form.select }}
      </div>
      <div class="form-item">
        <button type="submit">送信</button>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'app',

    data: () => ({
      form: {
        input: 'test',
        radio1: 1,
        radio2: 1,
        check: 1,
        select: 3
      },
      options: [
        { id: 1, value: 'option1' },
        { id: 2, value: 'option2' },
        { id: 3, value: 'option3' },
        { id: 4, value: 'option4' }
      ]
    }),

    methods: {
      onSubmit () {
        console.log('送信')
      }
    }
  }
</script>
