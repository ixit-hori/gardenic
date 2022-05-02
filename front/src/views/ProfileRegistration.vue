<template>
  <logoHeader />
  <main>
    <div class="cmn-profile-form_wrap">
      <div v-if="formMode">
        <ProfileInput :user-info="userInfo" @goConfirm="showConfirm" />
      </div>
      <div v-if="confirmMode">
        <ProfileConfirm :user-info="userInfo" @goEdit="showEdit" @goNextAction="showComplete"/>
      </div>

      <div v-if="completeMode">
        <h1>ようこそ、<br>{{ userInfo.nickname }}さん</h1>
        <p>今日からあなたは<br>この花壇のオーナーです。</p>
        <p>所有しているお花を<br>ここで管理できます。</p>
        <p>種をまいて、お水をあげて、<br>お世話をしましょう。</p>
        <button type="button" class="cmn-Button_bigYellow cmn-profile-form_btn1" @click="goGarden">はじめる</button>
      </div>
    </div>
  </main>
</template>

<script>
import LogoHeader from "@/components/headers/LogoHeader";
import ProfileInput from "@/components/form-parts/ProfileInput";
import ProfileConfirm from "@/components/form-parts/ProfileConfirm";

import { ref, reactive } from "vue";

export default {
  name: 'ProfileRegistration',
  components: {
    LogoHeader,
    ProfileInput,
    ProfileConfirm
  },
  setup() {
    const formMode = ref(true);
    const confirmMode = ref(false);
    const completeMode = ref(false);
    const userInfo = reactive({
      nickname: '',
      birth: ''
    });

    /***
     * 入力内容チェック
     * @param userData (Object):nickname, birth
     * @param ev
     */
    const showConfirm = (userData, ev) => {
      if(!confirmMode.value) {
        userInfo.nickname = userData.nickname;
        userInfo.birth = userData.birth;
        formMode.value = false;
        confirmMode.value= true;
        ev.preventDefault();
      }
    };

    /***
     * 入力内容修正
     * @param userData (Object):nickname, birth
     * @param ev
     */
    const showEdit = (userData, ev) => {
      if(confirmMode.value) {
        formMode.value = true;
        confirmMode.value = false;
        ev.preventDefault();
      }
    };

    /***
     * 完了画面表示
     * @param ev
     */
    const showComplete = () => {
      if(!completeMode.value) {
        formMode.value = false;
        confirmMode.value = false;
        completeMode.value = true;
      }
    };

    const goGarden = () => {
      window.location.href = '/my-garden';
    };

    return {
      formMode,
      confirmMode,
      completeMode,
      userInfo,
      showConfirm,
      showEdit,
      showComplete,
      goGarden,
    }
  }
}
</script>

<style scoped lang="scss">
main {
    margin: 0;
    height: 90vh;
    background-color: $mainColor;
}
</style>
