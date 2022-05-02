<template>
  <li class="cmn-confirm">
    <label>{{ labelName }}<span v-if="isRequired">※必須</span></label>
    <div :class="{ 'txtLeft':isRequired }">{{ inputData }}</div>
  </li>
</template>

<script>
export default {
  name: 'Confirm',
  props: {
    labelName: String,
    inputData: String,
    isRequired: Boolean
  }
}
</script>

<style scoped lang="scss">
.txtLeft {
  text-align: left;
}
</style>
