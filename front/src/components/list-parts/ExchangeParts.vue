<template>
  <li>
    <h2>
      交換申込日：{{ exchangeData.exchange_date }}
      <u>{{ exchangeData.status }}</u>
    </h2>
    <div>
      <img src="@/assets/ft-start_img01@2x.png" alt="flower image">
      <div class="ex-history_detail">
        <p>
          <span>配送先</span>
          <span>: {{ exchangeData.addressee }}</span>
        </p>
        <p>
          <span>花の種類</span>
          <span>: {{ exchangeData.flower_name }}</span>
        </p>
        <BtnMediumWhite btn-name="詳細" @click="modalOpen = true" />
      </div>
    </div>
  </li>

  <!-- Popup 要素 -->
  <teleport to="#app">
    <div v-if="modalOpen" class="cmn-modal_wrap">
      <div class="cmn-modal">
        <button type="button" @click="modalOpen = false" class="cmn-modal_close">
          <img src="@/assets/cmn_img01.png" srcset="@/assets/cmn_img01@2x.png 2x" alt="Close">
        </button>
        <u>{{ exchangeData.status }}</u>
        <p>交換申込日 <span>{{ exchangeData.exchange_date }}</span></p>
        <div class="ex-history-modal_flower">
          <p>交換するお花</p>
          <table class="ex-history-modal_flower-detail">
            <tr>
              <th>ニックネーム <span>:</span></th>
              <td>{{ exchangeData.nickname }}</td>
            </tr>
            <tr>
              <th>花の種類 <span>:</span></th>
              <td>{{ exchangeData.flower_name }}</td>
            </tr>
          </table>
          <div class="ex-history-modal_images">
            <figure>
              <div>
                <img :src="require('@/assets/' + exchangeData.flower_character_img_path)" alt="育成したお花イメージ">
              </div>
              <figcaption>育成したお花</figcaption>
            </figure>
            <figure>
              <div>
                <img :src="require('@/assets/' + exchangeData.flower_real_img_path)" alt="お届けするお花">
              </div>
              <figcaption>お届けするお花</figcaption>
            </figure>
          </div>
          <small>※参考画像となり、お花の色は届くまでのお楽しみです</small>
        </div>
        <div class="ex-history-modal_ship">
          <p>配送先</p>
          <table class="ex-history-modal_ship-detail">
            <tr>
              <th>お名前 <span>:</span></th>
              <td>{{ exchangeData.addressee }}</td>
            </tr>
            <tr>
              <th>フリガナ <span>:</span></th>
              <td>{{ exchangeData.addressee_kana }}</td>
            </tr>
            <tr>
              <th>ご住所 <span>:</span></th>
              <td>
                <div>&#12306;{{ exchangeData.postal_code }}</div>
                <div>{{ $store.state.prefOptions[exchangeData.prefecture].label }}{{ exchangeData.municipality }}{{ exchangeData.address }}F</div>
              </td>
            </tr>
            <tr>
              <th>お電話番号<span>:</span></th>
              <td>{{ exchangeData.tel }}</td>
            </tr>
            <tr>
              <th>申込日時<span>:</span></th>
              <td>{{ exchangeData.exchange_date }}</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script>
import BtnMediumWhite from "@/components/buttons/BtnMediumWhite";

import { ref } from "vue";

export default {
  name: 'ExchangeParts',
  components: {
    BtnMediumWhite
  },
  props: {
    exchangeData: Object
  },
  setup() {
    const modalOpen = ref(false);

    return {
      modalOpen,
    }
  }
}
</script>

<style scoped lang="scss">
li {
  margin-top: remSize(16);
  border: 1px solid #e2e2e2;
  border-radius: remSize(20);

  h2 {
    display: inline-block;
    font-size: remSize(18);
    color: $strongFontColor;

    u {
      margin-left: remSize(12);
      padding: remSize(4) remSize(18);
      background-color: $strongFontColor;
      border-radius: remSize(4);
      font-size: remSize(14);
      text-decoration: none;
      color: $baseColor;
    }
  }

  > div {
    display: flex;
    padding: remSize(16);
    border-top: 1px solid #e2e2e2;

    img {
      width: 26%;
      height: auto;
      padding: remSize(11) remSize(19);
      border-radius: remSize(11);
      background-color: rgba(211,235,205,0.4);
    }
  }
}

.ex-history_detail {
  width: 100%;
  margin-left: remSize(12);
  font-size: remSize(14);
  font-weight: 500;

  p {
    margin: remSize(5) 0 remSize(5);
    text-align: left;

    &:nth-child(2) {
      margin: remSize(16) 0 remSize(32);
    }

    span {
      &:nth-child(odd) {
        display: inline-block;
        width: remSize(75);
      }
    }
  }
}

.cmn-modal {
  padding-bottom: remSize(20);

  u {
    position: absolute;
    top: remSize(25);
    right: remSize(32);
    padding: remSize(4) remSize(18);
    background-color: $strongFontColor;
    border-radius: remSize(4);
    font-size: remSize(14);
    font-weight: bold;
    text-decoration: none;
    color: $baseColor;
  }

  > p {
    margin-top: remSize(50);
    padding-bottom: remSize(10);
    border-bottom: 1px solid #c4c4c4;
    font-size: remSize(18);
    font-weight: bold;
    text-align: center;
    color: $strongFontColor;

    span {
      font-size: remSize(24);
    }
  }

  table {
    font-size: remSize(15);
    font-weight: 500;
    text-align: left;

    th {
      position: relative;
      width: 33%;
      font-weight: 500;
      vertical-align: top;

      span {
        position: absolute;
        right: remSize(8);
      }
    }
  }

  .ex-history-modal_flower-detail {
    tr {
      th {
        width: remSize(107);
      }
    }
  }
}

.ex-history-modal_images {
  display: flex;
  justify-content: space-between;
  margin: remSize(16) 0;

  figure {
    margin: 0;

    div {
      width: remSize(132);
      height: remSize(106);
      border-radius: remSize(11);

      img {
        width: 100%;
        height: 100%;
      }
    }

    &:nth-child(1) div {
      padding: remSize(10) remSize(47);
      background-color: rgba(211,235,205,0.4);

      img {
        object-fit: contain;
      }
    }

    &:nth-child(2) div {
      border: 1px solid #c4c4c4;

      img {
        object-fit: cover;
        border-radius: remSize(11);
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
}

.ex-history-modal_flower,
.ex-history-modal_ship {
  padding-bottom: remSize(15);

  p {
    font-size: remSize(16);
    font-weight: bold;
    text-align: left;
    color: $strongFontColor;
  }
}

.ex-history-modal_flower {
  border-bottom: 1px solid #c4c4c4;
}
</style>
