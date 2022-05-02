<template>
  <div>
    <button type="button" class="cmn-Button_bigGreen">{{ btnName }}</button>
  </div>
</template>

<script>
export default {
  name: 'BtnBigGreen',
  props: {
    btnName: String,
  }
}
</script>

<style scoped lang="scss">
</style>
