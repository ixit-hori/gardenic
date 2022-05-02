<template>
  <LogoHeader2 v-if="!isLogin" />
  <HamburgerHeader v-if="isLogin" :msg="headTitle" />
  <main :class="isLogin ? 'cmn-haveHamHeader' : 'addMore'">
    <nav v-if="!checkContents" class="fl-seedSelect_step-wrap">
      <figure class="is-active">
        <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="14.3945" cy="14" r="14" fill="#326E39"/>
          <path d="M15.5557 19.6248H13.9209V8.78784L10.6426 9.99194V8.51538L15.3008 6.76636H15.5557V19.6248Z" fill="white"/>
        </svg>
        <figcaption>お花選択</figcaption>
      </figure>
      <figure :class="[selectSolid || inputNickname ? 'is-active' : '']">
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="14" cy="14" r="14" fill="#326E39"/>
          <path d="M18.4482 21H10.0635V19.8311L14.4932 14.9092C15.1494 14.165 15.6006 13.5615 15.8467 13.0986C16.0986 12.6299 16.2246 12.1465 16.2246 11.6484C16.2246 10.9805 16.0225 10.4326 15.6182 10.0049C15.2139 9.57715 14.6748 9.36328 14.001 9.36328C13.1924 9.36328 12.5625 9.59473 12.1113 10.0576C11.666 10.5146 11.4434 11.1533 11.4434 11.9736H9.81738C9.81738 10.7959 10.1953 9.84375 10.9512 9.11719C11.7129 8.39062 12.7295 8.02734 14.001 8.02734C15.1904 8.02734 16.1309 8.34082 16.8223 8.96777C17.5137 9.58887 17.8594 10.418 17.8594 11.4551C17.8594 12.7148 17.0566 14.2148 15.4512 15.9551L12.0234 19.6729H18.4482V21Z" fill="white"/>
        </svg>
        <figcaption>土選択</figcaption>
      </figure>
      <figure :class="[inputNickname ? 'is-active' : '']">
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="14" cy="14" r="14" fill="#326E39"/>
          <path d="M12.4278 13.8105H13.6495C14.4171 13.7988 15.0206 13.5967 15.46 13.2041C15.8995 12.8115 16.1192 12.2812 16.1192 11.6133C16.1192 10.1133 15.3721 9.36328 13.878 9.36328C13.1749 9.36328 12.6124 9.56543 12.1905 9.96973C11.7745 10.3682 11.5665 10.8984 11.5665 11.5605H9.94049C9.94049 10.5469 10.3096 9.70605 11.0479 9.03809C11.7921 8.36426 12.7354 8.02734 13.878 8.02734C15.085 8.02734 16.0313 8.34668 16.7169 8.98535C17.4024 9.62402 17.7452 10.5117 17.7452 11.6484C17.7452 12.2051 17.5635 12.7441 17.2003 13.2656C16.8428 13.7871 16.3536 14.1768 15.7325 14.4346C16.4356 14.6572 16.9776 15.0264 17.3585 15.542C17.7452 16.0576 17.9385 16.6875 17.9385 17.4316C17.9385 18.5801 17.5635 19.4912 16.8135 20.165C16.0635 20.8389 15.088 21.1758 13.8868 21.1758C12.6856 21.1758 11.7071 20.8506 10.9512 20.2002C10.2012 19.5498 9.82623 18.6914 9.82623 17.625H11.461C11.461 18.2988 11.6807 18.8379 12.1202 19.2422C12.5596 19.6465 13.1485 19.8486 13.8868 19.8486C14.6719 19.8486 15.2725 19.6436 15.6885 19.2334C16.1046 18.8232 16.3126 18.2344 16.3126 17.4668C16.3126 16.7227 16.084 16.1514 15.627 15.7529C15.17 15.3545 14.5108 15.1494 13.6495 15.1377H12.4278V13.8105Z" fill="white"/>
        </svg>
        <figcaption>名前登録</figcaption>
      </figure>
    </nav>
    <ul v-if="selectFlower">
      <SeedSelectParts
        v-for="flower in flowerData"
        :flower-info = "flower"
        :key="flower.seed_id"
        @goSoil="showSelectSoil"
      ></SeedSelectParts>
    </ul>
    <div v-if="selectSolid" class="fl-seedSelect_soil">
<!--      <p>-->
<!--        <img src="@/assets/fl-soilSelect_img01.png" srcset="@/assets/fl-soilSelect_img01@2x.png 2x" alt="Star">-->
<!--        は選択したお花と相性の良い土です-->
<!--      </p>-->
      <ul>
        <SoilSelectParts @goNickname="showInputNickname" />
      </ul>
    </div>
    <NicknameInputParts v-if="inputNickname" :flower_img="selectData.flower_img" :pre-nickname="selectData.nickname" @goConfirm="showConfirm" />
    <div v-if="checkContents" class="checkConfirm">
      <h2 v-if="!isLogin">アイテム確認</h2>
      <ConfirmWithBtn label-name="ニックネーム" :input-data="selectData.nickname" @changeNickname="showInputNickname" view-type="nickname" />
      <ConfirmWithBtn label-name="選択したお花" :input-data="selectData.flower_name" @changeFlower="showSelectFlower" view-type="flower" />
      <ConfirmWithBtn label-name="選択した土" :input-data="selectData.item_name" @changeSoil="showSelectSoil" view-type="soil" />
      <BtnBigYellow btn-name="決定して育成スタート" @click="sendSelectData" class="fl-confirm_jumpBtn" />
    </div>
  </main>
</template>

<script>
import LogoHeader2 from "@/components/headers/LogoHeader2";
import HamburgerHeader from "@/components/headers/HamburgerHeader";
import SeedSelectParts from "@/components/list-parts/SeedSelectParts";
import SoilSelectParts from "@/components/list-parts/SoilSelectParts";
import NicknameInputParts from "@/components/list-parts/NicknameInputParts";
import ConfirmWithBtn from "@/components/form-parts/ConfirmWithBtn";
import BtnBigYellow from "@/components/buttons/BtnBigYellow";

import { ref, reactive, onBeforeMount } from "vue";

export default {
  name: 'FlowerSelect',
  components: {
    BtnBigYellow,
    NicknameInputParts,
    LogoHeader2,
    HamburgerHeader,
    SeedSelectParts,
    SoilSelectParts,
    ConfirmWithBtn
  },
  setup() {
    const isLogin = ref(true);
    const selectFlower = ref(true);
    const selectSolid = ref(false);
    const inputNickname = ref(false);
    const checkContents = ref(false);
    const headTitle = ref('お花選択');
    const selectData = reactive({
      seed_id: '',
      flower_img: '',
      flower_name: '',
      item_name: '',
      nickname: ''
    });
    const axios = require('axios');
    const flowerData = ref([]);

    onBeforeMount(() => {
      // TODO check Login Session

      // 花情報の取得とセット
      axios
        .get('http://localhost:3001/seeds')
        .then((response) => {
          // 花の情報をセット
          flowerData.value = response.data;
        })
        .catch((error) => (
          console.log('error: ', error)
        ));
    });

    /***
     * 花選択を表示にする
     ***/
    const showSelectFlower = (ev) => {
      selectFlower.value = true;
      selectSolid.value = false;
      inputNickname.value = false;
      checkContents.value = false;
      headTitle.value = 'お花選択';
      ev.preventDefault();
    };

    /***
     * 土選択を表示し、花選択を非表示にする
    ***/
    const showSelectSoil = (seed_id, img, flower_name, ev) => {
      selectFlower.value = false;
      selectSolid.value = true;
      checkContents.value = false;
      headTitle.value = '土選択';
      if(seed_id !== '') selectData.seed_id = seed_id;
      if(img !== '') selectData.flower_img = img;
      if(flower_name !== '') selectData.flower_name = flower_name;
      ev.preventDefault();
    };

    /***
     * ニックネーム入力を表示し、土選択を非表示にする
    ***/
    const showInputNickname = (item_name, ev) => {
      selectSolid.value = false;
      inputNickname.value = true;
      checkContents.value = false;
      headTitle.value = 'ニックネーム入力';
      if(item_name !== '') selectData.item_name = item_name;
      ev.preventDefault();
    };

    /***
     * 確認画面を表示し、ニックネーム入力を非表示にする
    ***/
    const showConfirm = (nickname, ev) => {
      selectData.nickname = nickname;
      inputNickname.value = false;
      checkContents.value = true;
      headTitle.value = 'アイテム確認';
      ev.preventDefault();
    };

     /***
      * 選択データの送信
     ***/
    const sendSelectData = () => {
      // TODO call API then send Data

      // 育成画面へ
       window.location.href = '/nurturing';
    };

    return {
      isLogin,
      selectFlower,
      selectSolid,
      inputNickname,
      checkContents,
      headTitle,
      selectData,
      flowerData,
      showSelectFlower,
      showSelectSoil,
      showInputNickname,
      showConfirm,
      sendSelectData
    };
  }
}
</script>

<style scoped lang="scss">
.addMore {
  margin-top: remSize(16);
}

.fl-seedSelect_step-wrap {
  display: flex;
  justify-content: space-between;
}

figure {
  position: relative;
  margin: 0 remSize(30) remSize(16);

  svg {
    circle {
      fill: #c4c4c4;
    }
  }

  figcaption {
    margin-top: remSize(8);
    font-size: remSize(14);
    color: #c4c4c4;
  }

  &.is-active {
    svg {
      circle {
        fill: $strongFontColor;
      }
    }

    figcaption {
      color: $strongFontColor;
    }
  }

  &:nth-child(-n+2) {
    &:after {
      position: absolute;
      display: inline-block;
      content: "...................";
      top: remSize(-1);
      left: 100%;
      width: remSize(85);
      font-size: remSize(16);
      color: #c4c4c4;
    }
  }
}

ul {
  margin: 0 remSize(16) remSize(70);
  padding-top: remSize(16);
}

.fl-seedSelect_soil {
  p {
    img {
      vertical-align: top;
    }
  }
}

.checkConfirm {
  margin: 0 remSize(32) remSize(40);

  h2 {
    display: inline-block;
    margin: remSize(5) 0 remSize(24);
    font-size: remSize(24);
    color: $strongFontColor;
  }

  .fl-confirm_jumpBtn {
    margin-top: remSize(40);
  }
}
</style>
