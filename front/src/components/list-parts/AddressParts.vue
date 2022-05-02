<template>
  <li>
    <h2>配送先{{ index + 1 }}</h2>
    <BtnSmallDelete btn-name="削除" @click="deleteConfirm" class="ship-list_btnDel" />
    <table class="ship-list_detail">
      <tr>
        <th>お名前 <span>:</span></th>
        <td>{{ addInfo.addressee }}</td>
      </tr>
      <tr>
        <th>ご住所 <span>:</span></th>
        <td>
          <div>&#12306;{{ addInfo.postal_code }}</div>
          <div>{{ $store.state.prefOptions[addInfo.prefecture].label }}{{ addInfo.municipality }}{{ addInfo.address }}</div>
        </td>
      </tr>
      <tr>
        <th>お電話番号<span>:</span></th>
        <td>{{ addInfo.tel }}</td>
      </tr>
    </table>
    <BtnMediumWhite btn-name="編集" @click="editAdd(addInfo.address_id, $event)" />
  </li>

  <!-- Popup 要素 -->
  <teleport to="#app">
    <div v-if="modalOpen" class="confirm-modal_wrap">
      <div class="cmn-modal">
        <button type="button" @click="modalOpen = false" class="cmn-modal_close">
          <img src="@/assets/cmn_img01.png" srcset="@/assets/cmn_img01@2x.png 2x" alt="Close">
        </button>
        <h2>配送先削除</h2>
        <div>{{ addInfo.addressee }}を削除します。<br>よろしいですか？</div>
        <BtnBigYellow btn-name="削除する" @click="deleteAdd()" class="ship-list_modalDelBtn"/>
        <BtnBigWhite btn-name="キャンセル" @click="modalOpen = false" />
      </div>
    </div>
  </teleport>
</template>

<script>
import BtnSmallDelete from "@/components/buttons/BtnSmallDelete";
import BtnMediumWhite from "@/components/buttons/BtnMediumWhite";
import BtnBigYellow from "@/components/buttons/BtnBigYellow";
import BtnBigWhite from "@/components/buttons/BtnBigWhite";

import { ref } from "vue";

export default {
  name: 'AddressParts',
  components: {
    BtnSmallDelete,
    BtnMediumWhite,
    BtnBigYellow,
    BtnBigWhite
  },
  props: {
    index: Number,
    addInfo: Object
  },
  setup(props) {
    const modalOpen = ref(false);
    const axios = require('axios');

    const deleteConfirm = (ev) => {
      modalOpen.value = true;
      ev.preventDefault();
    };

    /***
     * 配送先削除
     * @param id: address_id
     * @param ev
     */
    const deleteAdd = (ev) => {
      // modal非表示
      modalOpen.value = false;
      // TODO: API-URL変更、動作確認
      axios
        .delete('http://localhost:3001/address/' + props.addInfo.id)
        .then((response) => {
          if(response.status === 200) {
            window.location.href = '/shipping-list';
          }
        })
        .catch((error) => {
          console.log('error: ', error)
        })
      ev.preventDefault();
    };

    /***
     * 配送先編集
     * @param id: address_id
     * @param ev
     */
    const editAdd = (id, ev) => {
      window.location.href = '/shipping-register?address_id=' + id;
      ev.preventDefault();
    };

    return {
      deleteConfirm,
      modalOpen,
      deleteAdd,
      editAdd,
    }
  }
}
</script>

<style scoped lang="scss">
li {
  position: relative;
  margin-bottom: remSize(16);
  padding: remSize(14) remSize(17) remSize(20);
  border: 1px solid #e2e2e2;
  border-radius: remSize(20);

  h2 {
    position: absolute;
    display: inline-block;
    top: 0;
    left: 0;
    width: 100%;
    margin: 0;
    padding: remSize(18) remSize(16);
    text-align: left;
    background-color: rgba(211,235,205,0.4);
    border-radius: remSize(20) remSize(20) 0 0;
    font-size: remSize(18);
    font-weight: bold;
    color: $strongFontColor;
  }

  table {
    margin: remSize(63) 0 remSize(16);
    font-size: remSize(15);
    font-weight: 500;
    text-align: left;

    th {
      position: relative;
      width: 30%;
      font-weight: 500;
      vertical-align: top;

      span {
        position: absolute;
        right: remSize(8);
      }
    }
  }
}

.ship-list_btnDel {
  position: absolute;
  top: remSize(16);
  right: remSize(16);
}

.confirm-modal_wrap {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(211,235,205,0.7);
}

.ship-list_modalDelBtn {
  margin: remSize(55) 0 remSize(24);
}
</style>
