<template>
  <HamHeader msg="ユーザー情報" />
  <main class="cmn-haveHamHeader">
    <div class="ui-info_view" v-if="viewInfo">
      <ul>
        <li>
          <p>プロフィール</p>
          <table>
            <tr>
              <th>ユーザネーム</th>
              <td>
                <span>:</span>
                {{ userInfo.nickname }}
              </td>
            </tr>
            <tr>
              <th>生年月日</th>
              <td>
                <span>:</span>
                {{ userInfo.birth }}
              </td>
            </tr>
          </table>
          <BtnMediumWhite btn-name="編集" @click="showEdit(null, $event)" />
        </li>
        <li>
          <p>連携中のGoogleアカウント</p>
          <figure>
            <img src="@/assets/dummy.png" alt="google account image">
            <figcaption>{{ userInfo.nickname }}</figcaption>
          </figure>
          <BtnMediumWhite btn-name="Googleアカウントを管理" @click="manageGAccount" />
        </li>
        <li @click="goUnsubscribe">gardenicを退会する</li>
      </ul>
    </div>
    <div v-if="formMode">
      <div class="cmn-profile-form_wrap">
        <ProfileInput :user-info="userInfo" @goConfirm="showConfirm" />
      </div>
    </div>
    <div v-if="confirmMode">
      <div class="cmn-profile-form_wrap">
        <ProfileConfirm :user-info="userInfo" @goEdit="showEdit" @goNextAction="goUserInfo" />
      </div>
    </div>
  </main>
</template>

<script>
import HamHeader from "@/components/headers/HamburgerHeader";
import BtnMediumWhite from "@/components/buttons/BtnMediumWhite";
import ProfileInput from "@/components/form-parts/ProfileInput";
import ProfileConfirm from "@/components/form-parts/ProfileConfirm";

import { ref } from "vue";

export default {
  name: 'UserInfo',
  components: {
    HamHeader,
    BtnMediumWhite,
    ProfileInput,
    ProfileConfirm,
  },
  setup() {
    const axios = require('axios');
    const viewInfo = ref(true);
    const userInfo = ref({});
    const formMode = ref(false);
    const confirmMode = ref(false);

    /**
     * ユーザ情報の取得
     */
    axios
      .get('http://localhost:3001/users')
      .then((response) => {
        userInfo.value = response.data;
        userInfo.value.birth = userInfo.value.birth.replace(/-/g, '/');
        // TODO: Googleアカウント情報からユーザThumbnailを置き換え
      })
      .catch((error) => (
        console.log('error: ', error)
      ));

    /**
     * ユーザ情報編集画面を表示
     */
    const showEdit = (userData, ev) => {
      if(userData !== null) {
        userInfo.value = userData;
      }
      viewInfo.value = false;
      formMode.value = true;
      confirmMode.value = false;
      ev.preventDefault();
    };

    const  showConfirm = (userData, ev) => {
      userInfo.value = userData;
      formMode.value = false;
      confirmMode.value = true;
      ev.preventDefault();
    };

    const goUserInfo = () => {
      viewInfo.value = true;
      confirmMode.value = false;
    };

    /**
     * Googleアカウントページへ遷移
     */
    const manageGAccount = () => {
    };

    /**
     * 退会規約へ遷移
     */
    const goUnsubscribe = () => {
      window.location.href = '/unsubscribe';
    }

    return {
      viewInfo,
      userInfo,
      formMode,
      confirmMode,
      showEdit,
      showConfirm,
      goUserInfo,
      manageGAccount,
      goUnsubscribe
    }
  }
}
</script>

<style scoped lang="scss">
main {
  padding: remSize(16);
}

.cmn-profile-form_wrap {
  margin: 0;
  padding-top: 0;
}

.ui-info_view {
  padding: remSize(19) remSize(20) 0;
  border: 1px solid #e2e2e2;
  border-radius: remSize(20);
  text-align: left;

  li {
    padding-bottom: remSize(20);
    border-bottom: 1px solid #e2e2e2;

    p {
      font-size: remSize(18);
      color: $strongFontColor;
    }

    table {
      margin-bottom: remSize(24);
      font-size: remSize(15);

      th {
        width: remSize(100);
        font-weight: 500;
      }

      td {
        font-weight: 500;
        span {
          margin-right: remSize(8);
        }
      }
    }

    div {
      text-align: center;
    }

    figure {
      display: flex;
      align-items: center;
    }

    figcaption {
      padding-left: remSize(10);
      font-size: remSize(15);
      font-weight: 500;
    }

    &:nth-child(2) {
      :deep div {
        button {
          width: remSize(220);
        }
      }
    }

    &:nth-child(3) {
      padding-top: remSize(10);
      border-bottom: none;
      font-size: remSize(15);
      font-weight: 500;
      text-align: right;
      text-decoration: underline;
      color: $strongFontColor;
    }
  }
}
</style>
