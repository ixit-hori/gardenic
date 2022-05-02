<template>
  <div class="fl-nickName_wrap">
    <div class="fl-nickName_img">
      <img :src="require('@/assets/' + flower_img)" alt="flower image">
    </div>
    <p>ニックネームを入力してください</p>
    <input v-model="nickname" type="text">
    <div v-if="showErr" class="fl-nickName_error">ニックネームは必須です</div>
    <div class="fl-nickName_notice">◯文字以内でご登録ください。/・はご利用できません。</div>
    <BtnBigYellow btn-name="登録する" @click="clickSelect(nickname, $event)" />
  </div>
</template>

<script>
import BtnBigYellow from "@/components/buttons/BtnBigYellow";
import { ref, onBeforeMount } from "vue";

export default {
  name: 'NicknameInputParts',
  components: {
    BtnBigYellow,
  },
  props: {
    flower_img: String,
    preNickname: String
  },
  emits: ['goConfirm'],
  setup(props, content) {
    const showErr = ref(false);
    const nickname = ref('');

    onBeforeMount(() => {
      // 入力値があれば戻す
      if(props.preNickname !== '') nickname.value = props.preNickname;
    });

    /***
     * 選択ボタン押下時
    ***/
    const clickSelect = (nickname,ev) => {
      if(nickname == '') {
        // Error Message表示
        showErr.value = true;
        return false;
      }
      // 親（FlowerSelect)のgoConfirmイベント発行
      content.emit('goConfirm', nickname, ev)
      ev.preventDefault();
    };

    return {
      showErr,
      nickname,
      clickSelect,
    };
  }
}
</script>

<style scoped lang="scss">
.fl-nickName_wrap {
  margin: remSize(16) remSize(24);

  p {
    margin: remSize(24) 0 0;
    font-size: remSize(16);
    color: $strongFontColor;
  }
}

.fl-nickName_img {
  padding: remSize(16) 0;
  background-color: rgba(211,235,205,0.4);
  border-radius: remSize(20);
}

.fl-nickName_error {
  margin: remSize(8) 0 remSize(8);
  font-size: remSize(10);
  color: $warningFontColor;
}

.fl-nickName_notice {
  margin: remSize(8) 0 remSize(40);
  font-size: remSize(10);
  color: #565a57;
}
</style>
