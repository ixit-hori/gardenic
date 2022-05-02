<template>
  <main>
    <div class="nurturing-head">
      <h1>{{ flowerInfo.nickname }}</h1>
      <u>Lv.{{ flowerInfo.flower_level }}</u>
      <p>Day<span>{{ flowerInfo.breeding_date }}</span></p>
    </div>
    <div class="nurturing-img" :class="effectType">
      <img :src="flowerImg" alt="育成したお花イメージ">
      <img src="@/assets/nurturing-bg_img01.png" alt="キラキラ" class="nurturing-img_stars" v-if="isFeed">
    </div>
    <div class="nurturing-data_wrap">
      <div class="nurturing-data">
        <div class="nurturing-data_water">
          <span><img src="@/assets/nurturing-nav_icon01.png" alt="Watering can">Water</span>
          <span :class="waterLack">{{ waterPercent }}%</span>
          <ProgressBar :value="Number(waterPercent)" class="water-progress"/>
        </div>
        <div class="nurturing-data_soil">
          <span><img src="@/assets/nurturing-nav_icon02.png" alt="scoop">Soils</span>
          <span :class="soilLack">{{ soilPercent }}%</span>
          <ProgressBar :value="Number(soilPercent)" class="soil-progress"/>
        </div>
      </div>
      <div class="nurturing-care_btn">
        <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg" :class="waterFull" @click="feedWater()">
          <circle cx="25.6515" cy="25.6515" r="25.6515" fill="#7DC1E8"/>
          <path d="M35.9897 19.525H35.9886H20.9411L21.6236 25.3291L11.5993 19.54L11.0567 16.4275L7 21.7381L10.121 21.4882L22.3531 31.5306L22.7109 34.5726H34.8073L35.0519 31.475C35.3563 31.5221 35.6703 31.5477 35.9897 31.5477C39.304 31.5477 42 28.8517 42 25.5363C42 22.2231 39.3041 19.525 35.9897 19.525ZM35.9897 29.5567C35.7216 29.5567 35.461 29.529 35.2089 29.4787L35.8327 21.5245C35.885 21.5224 35.9352 21.5171 35.9897 21.5171C38.2061 21.5171 40.009 23.3189 40.009 25.5364C40.009 27.7527 38.2061 29.5567 35.9897 29.5567Z" fill="black"/>
        </svg>
        <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg" :class="soilFull" @click="feedSoil">
          <circle cx="25.6515" cy="25.6515" r="25.6515" fill="#D09468"/>
          <path d="M35.7539 26.9786C34.8127 25.802 33.8075 24.7889 33.8075 24.7889C33.5313 24.4791 33.1397 24.296 32.7251 24.2841C32.3096 24.2718 31.9077 24.4309 31.6142 24.7244L29.9518 26.3876C29.6769 26.6617 29.2314 26.6617 28.9572 26.3876L27.9749 25.4056C27.8574 25.2877 27.6667 25.2877 27.5484 25.4056L25.4054 27.549C25.2879 27.6666 25.2875 27.8577 25.4054 27.9755L26.3873 28.9574C26.6614 29.232 26.6614 29.677 26.3873 29.952L24.7241 31.6148C24.431 31.9083 24.2708 32.3098 24.283 32.7252C24.2952 33.1402 24.4784 33.5318 24.789 33.8076C24.789 33.8076 25.8018 34.8124 26.9783 35.754C29.4853 37.7598 33.3722 39.1388 36.6941 36.694C39.1387 33.3721 37.7592 29.486 35.7539 26.9786Z" fill="black"/>
          <path d="M26.5259 24.6452L21.7026 19.8219L22.101 17.6793C22.251 16.8746 21.9946 16.0485 21.4158 15.4694L20.3283 14.3818C20.2029 14.2561 20.0541 14.1591 19.8971 14.0954C19.6605 13.9997 19.4053 13.9763 19.1597 14.0238C18.9148 14.0705 18.675 14.1928 18.4871 14.3815L14.3811 18.4871C14.2556 18.6121 14.1587 18.7609 14.0954 18.9184C13.9997 19.1549 13.9763 19.4097 14.0238 19.6554C14.0705 19.9007 14.1928 20.14 14.3815 20.3283L15.469 21.4163C16.0482 21.9946 16.8746 22.2509 17.6797 22.1014L19.8219 21.7026L24.6452 26.5259L26.5259 24.6452ZM20.1839 17.3224L19.7349 19.7349L17.3225 20.1843C17.1496 20.2167 16.9723 20.1613 16.8481 20.0371L16.2187 19.4073L19.4073 16.2187L20.0371 16.8485C20.1609 16.9727 20.2163 17.15 20.1839 17.3224Z" fill="black"/>
        </svg>
      </div>
    </div>
  </main>
  <nav>
    <ul>
      <li>
        <a href="/my-garden">
          <svg width="31" height="26" viewBox="0 0 31 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.4 26V16.8235H18.6V26H26.35V13.7647H31L15.5 0L0 13.7647H4.65V26H12.4Z" fill="#326E39"/>
          </svg>
        </a>
      </li>
      <li :class="flowerExchange" @click="showExchangeModal">
        <svg width="26" height="31" viewBox="0 0 26 31" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 31C20.1789 31 26 25.051 26 17.7143C18.8211 17.7143 13 23.6633 13 31ZM3.75556 13.6548C3.75556 15.6919 5.37333 17.3452 7.36667 17.3452C8.13222 17.3452 8.82556 17.109 9.41778 16.6957L9.38889 16.9762C9.38889 19.0133 11.0067 20.6667 13 20.6667C14.9933 20.6667 16.6111 19.0133 16.6111 16.9762L16.5822 16.6957C17.16 17.109 17.8678 17.3452 18.6333 17.3452C20.6267 17.3452 22.2444 15.6919 22.2444 13.6548C22.2444 12.1786 21.3922 10.9238 20.1789 10.3333C21.3922 9.74286 22.2444 8.4881 22.2444 7.0119C22.2444 4.97476 20.6267 3.32143 18.6333 3.32143C17.8678 3.32143 17.1744 3.55762 16.5822 3.97095L16.6111 3.69048C16.6111 1.65333 14.9933 0 13 0C11.0067 0 9.38889 1.65333 9.38889 3.69048L9.41778 3.97095C8.84 3.55762 8.13222 3.32143 7.36667 3.32143C5.37333 3.32143 3.75556 4.97476 3.75556 7.0119C3.75556 8.4881 4.60778 9.74286 5.82111 10.3333C4.60778 10.9238 3.75556 12.1786 3.75556 13.6548ZM13 6.64286C14.9933 6.64286 16.6111 8.29619 16.6111 10.3333C16.6111 12.3705 14.9933 14.0238 13 14.0238C11.0067 14.0238 9.38889 12.3705 9.38889 10.3333C9.38889 8.29619 11.0067 6.64286 13 6.64286ZM0 17.7143C0 25.051 5.82111 31 13 31C13 23.6633 7.17889 17.7143 0 17.7143Z" fill="#c4c4c4"/>
        </svg>
      </li>
      <li @click="showHistoryModal">
        <svg width="33" height="27" viewBox="0 0 33 27" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18.8571 0C11.0471 0 4.71429 6.045 4.71429 13.5H0L6.11286 19.335L6.22286 19.545L12.5714 13.5H7.85714C7.85714 7.695 12.7757 3 18.8571 3C24.9386 3 29.8571 7.695 29.8571 13.5C29.8571 19.305 24.9386 24 18.8571 24C15.8243 24 13.0743 22.815 11.0943 20.91L8.86286 23.04C11.4243 25.485 14.9443 27 18.8571 27C26.6671 27 33 20.955 33 13.5C33 6.045 26.6671 0 18.8571 0ZM17.2857 7.5V15L24.0114 18.81L25.1429 16.995L19.6429 13.875V7.5H17.2857Z" fill="#326E39"/>
        </svg>
      </li>
      <li @click="showAdviceModal">
        <svg width="30" height="29" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.5 23.2H16.5V20.3H13.5V23.2ZM15 0C6.72 0 0 6.496 0 14.5C0 22.504 6.72 29 15 29C23.28 29 30 22.504 30 14.5C30 6.496 23.28 0 15 0ZM15 26.1C8.385 26.1 3 20.8945 3 14.5C3 8.1055 8.385 2.9 15 2.9C21.615 2.9 27 8.1055 27 14.5C27 20.8945 21.615 26.1 15 26.1ZM15 5.8C11.685 5.8 9 8.3955 9 11.6H12C12 10.005 13.35 8.7 15 8.7C16.65 8.7 18 10.005 18 11.6C18 14.5 13.5 14.1375 13.5 18.85H16.5C16.5 15.5875 21 15.225 21 11.6C21 8.3955 18.315 5.8 15 5.8Z" fill="#326E39"/>
        </svg>
      </li>
    </ul>
  </nav>

  <!-- Popup 要素 成長アドバイス -->
  <teleport to="#app">
    <div v-if="adviceModalOpen" class="cmn-modal_wrap">
      <div class="cmn-modal">
        <button type="button" @click="adviceModalOpen = false" class="cmn-modal_close">
          <img src="@/assets/cmn_img01.png" srcset="@/assets/cmn_img01@2x.png 2x" alt="Close">
        </button>
        <p>育成アドバス</p>
        <div class="grow-advice_message">
          <div v-if="!feedFull">
            「{{ flowerInfo.nickname }}」は<br>そろそろ土の交換をしてほしいみたい<br>
            <img :src="require('@/assets/' + adviceImg)" alt="">
            <br>を押してみよう！<br>
          </div>
          <div v-if="feedFull">
            「{{ flowerInfo.nickname }}」は成長中！<br>次のLevelに達成するまで待ってね<br>
          </div>
          <img :src="require('@/assets/' + flowerInfo.flower_real_img_path)" alt="お届けするお花" class="grow-advice_real-flower">
          <p>Lv.100になると・・・<br>&#12302;{{ flowerInfo.item_name }}&#12303;の花が咲きます</p>
        </div>
      </div>
    </div>
  </teleport>

  <!-- Popup 要素 成長履歴 -->
  <teleport to="#app">
    <div v-if="historyModalOpen" class="cmn-modal_wrap">
      <div class="cmn-modal">
        <button type="button" @click="historyModalOpen = false" class="cmn-modal_close">
          <img src="@/assets/cmn_img01.png" srcset="@/assets/cmn_img01@2x.png 2x" alt="Close">
        </button>
        <p>成長履歴</p>
        <div class="growth-history_overview">
          <table>
            <tr>
              <th>育成中のお花</th>
              <td><span>:</span>{{ historyInfo.flower_name }}</td>
            </tr>
            <tr>
              <th>利用中の土</th>
              <td><span>:</span>{{ historyInfo.soil_name }}</td>
            </tr>
          </table>
        </div>
        <div class="growth-history_detail">
          <ul>
            <li v-for="(history) in historyInfo.breeding_histories" :key="history.object_date" >
              <time>{{ history.object_date }}</time>
              <p>{{ history.log_text }}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </teleport>

  <!-- Popup 要素 花交換 -->
  <teleport to="#app">
    <div v-if="exchangeModalOpen" class="cmn-modal_wrap">
      <div class="cmn-modal">
        <button type="button" @click="exchangeModalOpen = false" class="cmn-modal_close">
          <img src="@/assets/cmn_img01.png" srcset="@/assets/cmn_img01@2x.png 2x" alt="Close">
        </button>
        <p>育てたお花を<br>交換いただけます</p>
        <div class="ex-apply-modal_images">
          <figure>
            <div>
              <img :src="require('@/assets/' + flowerInfo.flower_current_img_path)" alt="育成したお花イメージ">
            </div>
          </figure>
          <div><img src="@/assets/nurturing-img_arrow.png" alt="arrow"></div>
          <figure>
            <div>
              <img :src="require('@/assets/' + flowerInfo.flower_real_img_path)" alt="お届けするお花">
            </div>
            </figure>
        </div>
        <BtnBigYellow btn-name="交換する" @click="goShippingSelect(flowerInfo.flower_id, $event)" />
      </div>
    </div>
  </teleport>
</template>

<script>
import ProgressBar from "primevue/progressbar";
import BtnBigYellow from "@/components/buttons/BtnBigYellow";

import { ref } from "vue";
import { useRoute } from "vue-router";

export default {
  name: 'Nurturing',
  components: {
    ProgressBar,
    BtnBigYellow
  },
  setup() {
    const axios = require('axios');
    const route = useRoute();
    const flowerInfo = ref({});
    const flowerImg = ref('');
    const effectType = ref('');
    const waterPercent = ref(0);
    const soilPercent = ref(0);
    const isFeed = ref(false);
    const waterLack = ref('');
    const soilLack = ref('');
    const waterFull = ref('');
    const soilFull = ref('');
    const feedFull = ref(false);
    const flowerExchange = ref('');
    const adviceModalOpen = ref(false);
    const adviceImg = ref('');
    const historyModalOpen = ref(false);
    const historyInfo = ref([]);
    const exchangeModalOpen = ref(false);

    // 花の育成情報取得
    // TODO: APIのパス変更,動作確認
    axios
      .get('http://localhost:3001/flowers', {
        params: {
          flower_id: route.query.flower_id
        }
      })
      .then((response) => {
        // 育成中の情報をセット
        flowerInfo.value = response.data[0];
        if(Number(flowerInfo.value.flower_level) < 50) {
          flowerImg.value = require("@/assets/nurturing_img01.png");
        } else {
          flowerImg.value = require("@/assets/ft-start_img01.png");
        }
        waterPercent.value = flowerInfo.value.water_value;
        soilPercent.value = flowerInfo.value.soil_value;
        // 30%以下の場合、class追加
        if(waterPercent.value < 30) {
          waterLack.value = 'lack';
        }
        if(soilPercent.value < 30) {
          soilLack.value = 'lack';
        }
        // Level100の場合
        if(flowerInfo.value.flower_level === "100") {
          // 花交換ボタンをアクティブに
          flowerExchange.value = 'is-exchange';
          waterFull.value = 'is-full';
          soilFull.value = 'is-full';
          // 水やりボタンをグレーに
          waterFull.value = 'is-full';
        }
      })
      .catch((error) => (
        console.log('error: ', error)
      ));

    /***
     * 水やり
     */
    const feedWater = () => {
      if(Number(waterPercent.value) < 100 && flowerInfo.value.flower_level !== "100") {
        // %をプラス
        waterPercent.value = 100;
        // 水やりボタンをグレーに
        waterFull.value = 'is-full';
        // 文字classを外す
        waterLack.value = '';
        // 水やりAnimationに置換
        flowerImg.value = require("@/assets/nurturing_img02.png");
        isFeed.value = true;
        effectType.value = "feed-water";
        // 画像を戻す
        setTimeout(() => {
          if(Number(flowerInfo.value.flower_level) < 50) {
            flowerImg.value = require("@/assets/nurturing_img01.png");
          } else {
            flowerImg.value = require("@/assets/ft-start_img01.png");
          }
          isFeed.value = false;
          effectType.value = "";
        }, 1000);
        // 情報を更新
        updateFlowerInfo();
      }
    };

    /***
     * 土追加
     */
    const feedSoil = () => {
      if(Number(soilPercent.value) < 100 && flowerInfo.value.flower_level !== "100") {
        // %をプラス
        soilPercent.value = 100;
        // 土追加ボタンをグレーに
        soilFull.value = 'is-full';
        // 文字classを外す
        soilLack.value = '';
        // 土追加画像に置換
        flowerImg.value = require("@/assets/nurturing_img03.png");
        isFeed.value = true;
        effectType.value = "feed-soil";
        // 画像を戻す
        setTimeout(() => {
          if(Number(flowerInfo.value.flower_level) < 50) {
            flowerImg.value = require("@/assets/nurturing_img01.png");
          } else {
            flowerImg.value = require("@/assets/ft-start_img01.png");
          }
          isFeed.value = false;
          effectType.value = "";
        }, 1000)
        // 情報を更新
        updateFlowerInfo();
      }
    };

    /***
     * 花情報の更新
     */
    const updateFlowerInfo = () => {
      // TODO: PUT構築後、ロジック再度確認
      axios
        .put('http://localhost:3001/flowers/' + flowerInfo.value.item_id)
        .then((response) => {
          flowerInfo.value.flower_level = response.data[0].flower_level;
          if(Number(flowerInfo.value.flower_level) < 50) {
            flowerImg.value = require("@/assets/nurturing_img01.png");
          } else {
            flowerImg.value = require("@/assets/ft-start_img01.png");
          }
          waterPercent.value = response.data[0].water_value;
          soilPercent.value = response.data[0].soil_value;
        })
        .catch((error) => (
          console.log('error: ', error)
        ));
    };

    /***
     * 育成アドバスモーダル
     */
    const showAdviceModal = () => {
      // 水やりを優先
      if(Number(waterPercent.value) < 100 && Number(waterPercent.value) < Number(soilPercent.value) || Number(waterPercent.value) === Number(soilPercent.value)) {
        adviceImg.value = "nurturing_btn01.svg";
      } else if(Number(soilPercent.value) < 100) {
        adviceImg.value = "nurturing_btn02.svg";
      }
      if(Number(waterPercent.value) === 100 && Number(soilPercent.value) === 100) {
        feedFull.value = true;
      }
      adviceModalOpen.value = true;
    };

    /***
     * 成長履歴モーダル
     */
    const showHistoryModal = () => {
      axios
        .get('http://localhost:3001/breeding_histories', {
          params: {
            flower_id: flowerInfo.value.flower_id
          }
        })
        .then((response) => {
          historyInfo.value = response.data[0];
          // Modal Open
          historyModalOpen.value = true;
        })
        .catch((error) => (
          console.log('error: ', error)
        ));
    };

    /***
     * 花交換モーダル
     */
    const showExchangeModal = () => {
      if(flowerInfo.value.flower_level === "100") {
        exchangeModalOpen.value = true;
      }
    };

    /***
     * 配送先選択に遷移
     */
    const goShippingSelect = (id, ev) => {
      window.location.href = '/shipping-select?flower_id=' + id;
      ev.preventDefault();
    };

    return {
      waterPercent,
      soilPercent,
      flowerInfo,
      flowerImg,
      isFeed,
      effectType,
      waterLack,
      soilLack,
      waterFull,
      soilFull,
      feedFull,
      flowerExchange,
      adviceModalOpen,
      adviceImg,
      historyModalOpen,
      historyInfo,
      exchangeModalOpen,
      feedWater,
      feedSoil,
      updateFlowerInfo,
      showExchangeModal,
      goShippingSelect,
      showHistoryModal,
      showAdviceModal,
    }
  }
}
</script>

<style scoped lang="scss">
@import "~primevue/resources/primevue.min.css";
@import "~primevue/resources/themes/saga-blue/theme.css";

main {
  position: relative;
  height: 90vh ;
  padding: remSize(25) remSize(25) remSize(18);
  background-color: $mainColor;
  border-radius: 0 0 remSize(30) remSize(30);
  color: $strongFontColor;
}

.nurturing-head {
  text-align: left;

  h1 {
    margin: 0;
    width: 80%;
    font-size: remSize(24);
  }

  u {
    font-size: remSize(20);
    font-weight: 500;
    text-decoration: none;
  }

  p {
    position: absolute;
    top: 0;
    right: remSize(24);
    width: remSize(55);
    margin: 0;
    padding: remSize(5) remSize(3);
    box-sizing: border-box;
    font-size: remSize(22);
    font-weight: 500;
    background-color: $strongFontColor;
    text-align: center;
    color: $baseColor;

    span {
      font-size: remSize(28);
    }
  }
}

.nurturing-img {
  position: relative;
  margin-top: remSize(30);
}

.nurturing-img_stars {
  position: absolute;
  top: 0;
  left: -25px;
  z-index: 100;
}

.nurturing-data_wrap {
  display: flex;
  margin-top: remSize(60);
}

.nurturing-data {
  width: 90%;
  padding: remSize(20) remSize(10);
  background-color: #fff;
  border-radius: remSize(10);
  font-size: remSize(16);
  font-weight: 500;
  text-align: left;
  color: #2e2414;
}

.nurturing-data_water,
.nurturing-data_soil {
  position: relative;

  img {
    margin-right: remSize(5);
    vertical-align: text-bottom;
  }

  span {
    &:nth-child(2) {
      position: absolute;
      right:  0;
      font-size: remSize(18);
    }
  }
}

.nurturing-status_soil {
  margin-top: remSize(10);
}

.feed-water,
.feed-soil {
  position: relative;

  &:before {
    content: '';
    position: absolute;
    display: inline-block;
  }
}

.feed-water {
  &:before {
    top: 0;
    right: remSize(20);
    width: remSize(170);
    height: remSize(133);
    background-image: url("~@/assets/nurturing-img_water.png");
  }
}

.feed-soil {
  &:before {
    top: remSize(40);
    left: 0;
    width: remSize(121);
    height: remSize(117);
    background-image: url("~@/assets/nurturing-img_scoop.png");
  }
}

.water-progress,
.soil-progress {
  height: remSize(8);
  border-radius: remSize(20);

  :deep(.p-progressbar-value) {
    background: #7dc1e8;
  }

  :deep(.p-progressbar-label) {
    visibility: hidden;
  }
}

.soil-progress {
  :deep(.p-progressbar-value) {
    background: #d09468;
  }
}

.lack {
  color: $warningFontColor
}

.is-full {
  circle {
    fill: #c4c4c4;
  }
}

.is-exchange {
  position: relative;
  svg {
    path {
      fill: $strongFontColor;
    }
  }

  &:after {
    content: '';
    position: absolute;
    display: block;
    top: 0;
    right: remSize(-8);
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: $warningFontColor;
  }
}

.nurturing-care_btn {
  width: remSize(52);
  margin-left: remSize(14);

  svg {
    &:nth-child(2) {
      margin-top: remSize(10);
    }
  }
}

nav {
  margin: remSize(20) remSize(40) 0;
  ul {
    display: flex;
    justify-content: space-between;
  }
}

.cmn-modal {
  > p {
    margin-top: remSize(50);
    padding-bottom: remSize(10);
    font-size: remSize(24);
    font-weight: bold;
    text-align: center;
    color: $strongFontColor;
  }

  p {
    text-align: center;
  }
}

.grow-advice_message {
  img {
    margin: remSize(8) 0;
  }

  p {
    font-size: remSize(15);
    font-weight: bold;
    color: $strongFontColor;
  }
}

.grow-advice_real-flower {
  width: remSize(141);
  height: remSize(110);
  border: 1px solid #c4c4c4;
  border-radius: remSize(10);

}

.growth-history_overview {
  padding: remSize(25) remSize(17);
  border-radius: remSize(10);
  background-color: rgba(211,235,205,0.4);
  font-size: remSize(16);
  font-weight: bold;
  text-align: left;

  th {
    width: remSize(105);
  }

  td {
    span {
      padding-right: remSize(10);
    }
  }
}

.growth-history_detail {
  text-align: left;
  font-size: remSize(16);

  li {
    margin-top: remSize(16);
    border-bottom: 1px solid #c4c4c4;

    time {
      color: $strongFontColor;
    }

    p {
      margin: remSize(8) 0 remSize(16);
    }
  }
}

.ex-apply-modal_images {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: remSize(16) 0 remSize(40);

  figure {
    margin: 0;

    div {
      width: remSize(90);
      height: remSize(133);

      img {
        width: 100%;
        height: 100%;
      }
    }

    &:nth-child(1) div {
      padding: remSize(10) remSize(20);

      img {
        object-fit: contain;
      }
    }

    &:nth-child(3) div {
      border: 1px solid #c4c4c4;
      border-radius: remSize(10);

      img {
        object-fit: cover;
        border-radius: remSize(10);
      }
    }
  }

  figcaption {
    margin-top: remSize(8);
    font-size: remSize(11);
    font-weight: bold;
    text-align: center;
    color: $strongFontColor;
  }

  > div {
    margin: 0 remSize(10);
  }
}
</style>
