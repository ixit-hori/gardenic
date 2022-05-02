<template>
  <div class="btn-selectShipAdd">
    <button type="button" class="cmn-Button_selectShipAdd" @click="selectedAdd">配送先に指定する</button>
  </div>
</template>

<script>
export default {
  name: 'BtnSelectShipAdd',
  props: {
    btnName: String,
  },
  setup() {
    const selectedAdd = () => {
      // TODO Call API
      // 最後に↓
      window.location.href = '/ship-apply-complete';
    }

    return {
      selectedAdd
    }
  }
}
</script>

<style scoped lang="scss">
</style>
