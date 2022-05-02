<template>
  <li class="cmn-inputRequired">
    <label for="name-required">郵便番号<span>※必須</span></label>
    <input type="text" id="name-required" :placeholder="placeholder">
    <p class="cmn-Notice">※ハイフン無しでご入力ください</p>
  </li>
</template>

<script>
export default {
  name: 'InputRequired',
  props: {
    placeholder: String
  }
}
</script>

<style scoped lang="scss">
</style>
