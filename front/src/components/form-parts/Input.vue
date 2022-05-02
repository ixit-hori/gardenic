<template>
  <label>{{ label }}</label>
  <input
    :type="type"
    :name="name"
    :value="value"
    :placeholder="placeholder"
    @input="test"
  />
  <p class="ft-profileRegistration_notice">10文字以内でご登録ください。/・はご利用できません。</p>
</template>

<script>
export default {
  name: 'MyInput',
  props: {
    label: String,
    value: { type:String, required: true },
    type: { type:String, required: true },
    name: { type:String, required: true },
    placeholder: { type:String, required: false },
  },
  methods: {
    test (ev) {
      this.$emit ('parentMethod', ev.target.value)
    }
  }
}
</script>

<style scoped lang="scss">

</style>
