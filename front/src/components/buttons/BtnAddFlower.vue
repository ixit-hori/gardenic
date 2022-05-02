<template>
  <div ref="addBtn">
    <button type="button" class="cmn-Button_addFlower" :class="{ 'invalidBtn': invalidClass.isActive }" @click="jumpTo">新しいお花を追加 <span>（残り{{ remaining }}個）</span></button>
  </div>
</template>

<script>
import { reactive, onUpdated } from 'vue';

export default {
  name: 'BtnAddFlower',
  props: {
    remaining: Number,
  },
  setup(props) {
    let invalidClass = reactive({
      isActive: false
    });

    onUpdated(() => {
      // 残り0個の場合、花追加ボタンを無効にする
      if(props.remaining <= 0) {
          invalidClass.isActive = true
      }
    });

    return {
      invalidClass,
    }
  },
  methods: {
    jumpTo: function () {
      // 残数が0個でなければ花選択画面へ遷移
      if(!this.invalidClass.isActive) {
        window.location.href = '/flower-select';
      }
    }
  }
}
</script>

<style scoped lang="scss">
</style>
