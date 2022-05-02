<template>
  <div>
    <h1>プロフィール登録</h1>
    <ul>
      <li>
        <label for="user-name">ユーザー名</label>
        <input type="text" id="user-name" v-model="userData.nickname">
        <p class="cmn-Notice">10文字以内でご登録ください。/・はご利用できません。</p>
        <p class="cmn-Error" v-show="validation.userName">※ユーザー名が未入力または10文字以上か、利用できない文字が含まれています。</p>
      </li>
      <li>
        <label for="navigators">生年月日</label>
        <Calendar id="navigators" v-model="userData.birth" dateFormat="yy/m/d" :monthNavigator="true" :yearNavigator="true" yearRange="1900:2021" />
      </li>
    </ul>
    <button type="button" class="cmn-Button_bigYellow cmn-profile-form_btn1" @click="checkData">確認する</button>
  </div>
</template>

<script>
import Calendar from 'primevue/calendar';

import { reactive, onMounted } from "vue";
import {usePrimeVue} from "primevue/config";

export default {
  name: 'ProfileInput',
  components: {
    Calendar
  },
  props: {
    userInfo: Object
  },
  emits: ['goConfirm'],
  setup(props, context) {
    const userData = reactive({
      nickname: props.userInfo === undefined ? '' : props.userInfo.nickname,
      birth: props.userInfo === undefined ? '' : props.userInfo.birth
    });

    const validation = reactive({
      userName: false
    } );

    const changeToLanguage = () => {
      const primevue = usePrimeVue();
      primevue.config.locale.dayNames = ["日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "日曜日"];
      primevue.config.locale.dayNamesMin = ["日","月","火","水","木","金","土"];
      primevue.config.locale.monthNames = ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"];
    };

    onMounted(() => {
      changeToLanguage();
    });

    /***
     * 入力内容チェック
     * @param ev
     * @returns {boolean}
     */
    const checkData = (ev) => {
      validation.userName = false;
      if(userData.nickname === '' || userData.nickname.match(/[/・]/) != null || userData.nickname.length > 10) {
        validation.userName = true;
        return false;
      } else {
        if(String(userData.birth).search('/') === -1) {
          // yyyy/mm/ddのformatになっていなければ整形
          userData.birth = userData.birth.toLocaleDateString().replace(/-/g, '/');
        }
        context.emit('goConfirm', userData, ev);
      }
      ev.preventDefault();
    };

    return {
      userData,
      validation,
      checkData,
    }
  }
}
</script>

<style scoped lang="scss">
@import "~primevue/resources/themes/saga-blue/theme.css";
@import "~primevue/resources/primevue.min.css";
@import "~primeicons/primeicons.css";

.p-calendar {
  width: 100%;
  height: remSize(48);
  margin-top: remSize(10);
}

:deep(.p-inputtext) {
  border-radius: remSize(10);
  background-image: image-set(url("~@/assets/cmn-select_icon01.png") 1x, url(~@/assets/cmn-select_icon01@2x.png) 2x);
  background-repeat: no-repeat;
  background-position: right remSize(16) center;
}
</style>
