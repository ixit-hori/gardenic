<template>
  <div>
    <h1>プロフィール登録</h1>
    <ul>
      <Confirm label-name="ユーザー名" :input-data="userInfo.nickname" />
      <Confirm label-name="生年月日" :input-data="userInfo.birth" />
    </ul>
    <button type="button" class="cmn-Button_bigYellow cmn-profile-form_btn1" @click="goRegist">登録する</button>
    <button type="button" class="cmn-Button_bigWhite cmn-profile-form_btn2" @click="goForm">修正する</button>
  </div>
</template>

<script>
import Confirm from "@/components/form-parts/Confirm";

import { reactive } from "vue";

export default {
  name: 'ProfileConfirm',
  components: {
    Confirm,
  },
  props: {
    userInfo: Object
  },
  emits: ['goEdit', 'goNextAction'],
  setup(props, context) {
    const axios = require('axios');
    const userData = reactive({
      nickname: props.userInfo === undefined ? '' : props.userInfo.nickname,
      birth: props.userInfo === undefined ? '' : props.userInfo.birth
    });

    const goForm = (ev) => {
      context.emit('goEdit', userData, ev)
    }

    /***
     * ユーザ登録
     * @param ev
     */
    const goRegist = (ev) => {
      const postData = {
        nickname: userData.nickname,
        birth: userData.birth.replace(/\//g,'-')
      }
      // TODO: 動作確認
      axios
        .post('http://localhost:3001/users', postData)
        .then((response) => {
          if(response.status === 201) {
            context.emit('goNextAction');
            ev.preventDefault();
          }
        })
        .catch((error) => (
          console.log('error: ', error)
        ));
    };

    return {
      userData,
      goForm,
      goRegist,
    }
  }
}
</script>

<style scoped lang="scss">
</style>
