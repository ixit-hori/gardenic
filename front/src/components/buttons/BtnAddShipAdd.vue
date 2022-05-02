<template>
  <div>
    <button type="button" class="cmn-Button_addShipAdd" @click="jumpTo">新規追加</button>
  </div>
</template>

<script>
export default {
  name: 'BtnAddShipAdd',
  setup() {
    const jumpTo =  () => {
      window.location.href = '/shipping-register';
    }

    return {
      jumpTo
    }
  }
}
</script>

<style scoped lang="scss">
</style>
