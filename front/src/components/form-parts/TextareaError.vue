<template>
  <li class="cmn-textareaRequired">
    <label for="add-other">その他住所<span>※必須</span></label>
    <textarea name="add-other" id="add-other" cols="30" rows="10" class="is-error"></textarea>
    <p class="cmn-Error">※その他住所は必須です。</p>

  </li>
</template>

<script>
export default {
  name: 'TextareaError',
}
</script>

<style scoped lang="scss">

</style>
