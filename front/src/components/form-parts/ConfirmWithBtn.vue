<template>
  <li class="cmn-confirm">
    <label>{{ labelName }}</label>
    <div>{{ inputData }}</div>
    <BtnSmallWhite btn-name="変更" @click="clickChange(viewType, $event)" class="fl-confirm_btn" />
  </li>
</template>

<script>
import BtnSmallWhite from "@/components/buttons/BtnSmallWhite";

export default {
  name: 'ConfirmWithBtn',
  components: {BtnSmallWhite},
  props: {
    labelName: String,
    inputData: String,
    viewType: String
  },
  emits: ['changeNickname', 'changeFlower', 'changeSoil'],
  setup(_, context) {
    /***
     * 選択ボタン押下時
     ***/
    const clickChange = (type, ev) => {
      // 親(FlowerSelect)の各イベント発行
      switch (type) {
        case 'nickname':
          context.emit('changeNickname', '', ev);
          break;
        case 'flower':
          context.emit('changeFlower', ev);
          break;
        case 'soil':
          context.emit('changeSoil', '', '', '', ev);
          break;
        default:
          context.emit('changeNickname', '', ev);
      }
      ev.preventDefault();
    };

    return {
      clickChange,
    }
  }
}
</script>

<style scoped lang="scss">
li {
  position: relative;
  margin-bottom: remSize(24);

  label {
    font-size: remSize(16);
  }

  div {
    font-size: remSize(20);
    font-weight: 500;
    text-align: left;
  }
}

.fl-confirm_btn {
  position: absolute;
  top: remSize(28);
  right: 0;
  border-bottom: none;
}
</style>
