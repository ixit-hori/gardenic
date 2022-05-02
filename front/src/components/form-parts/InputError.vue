<template>
  <li class="cmn-inputRequired">
    <label for="name-error">郵便番号<span>※必須</span></label>
    <input type="text" id="name-error" class="is-error">
    <p class="cmn-Notice">※ハイフン無しでご入力ください</p>
    <p class="cmn-Error">※郵便番号は必須です。</p>
  </li>
</template>

<script>
export default {
  name: 'InputError',
}
</script>

<style scoped lang="scss">
</style>
