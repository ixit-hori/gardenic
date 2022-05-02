<template>
  <HamHeader :msg="typeof($route.query.address_id) == 'undefined' ? '配送先 入力' : '配送先 編集'" />
  <main class="cmn-haveHamHeader">
    <div v-if="isInput" class="ship-register_input">
      <ul>
        <li class="cmn-inputRequired">
          <label for="addressee">姓名<span>※必須</span></label>
          <input type="text" id="addressee" v-model="inputData.addressee" :class="{'is-error':validateErr.addressee}">
          <p v-if="validateErr.addressee" class="cmn-Error">※姓名は必須です。</p>
        </li>
        <li class="cmn-inputRequired">
          <label for="addressee_kana">姓名カナ<span>※必須</span></label>
          <input type="text" id="addressee_kana" v-model="inputData.addressee_kana" :class="{'is-error':validateErr.addressee_kana}">
          <p v-if="validateErr.addressee_kana" class="cmn-Error">※姓名カナは必須です。</p>
        </li>
        <li class="cmn-inputRequired">
          <label for="postal_code">郵便番号<span>※必須</span></label>
          <input type="text" id="postal_code" v-model="inputData.postal_code" :class="{'is-error':validateErr.postal_code}">
          <p class="cmn-Notice">※ハイフン無しでご入力ください</p>
          <p v-if="validateErr.postal_code" class="cmn-Error">※郵便番号は必須です。</p>
        </li>
        <li class="cmn-selectRequired">
          <label for="prefecture">都道府県<span>※必須</span></label>
          <select name="prefecture" id="prefecture" v-model="inputData.prefecture" :class="{'is-error':validateErr.prefecture}">
            <option
              v-for="(pref, index) in $store.state.prefOptions"
              :value="pref.code"
              :key="index">
              {{ pref.label }}
            </option>
          </select>
          <p v-if="validateErr.prefecture" class="cmn-Error">※都道府県は必須です。</p>
        </li>
        <li class="cmn-inputRequired">
          <label for="municipality">市区町村<span>※必須</span></label>
          <input type="text" id="municipality" v-model="inputData.municipality" :class="{'is-error':validateErr.municipality}">
          <p v-if="validateErr.municipality" class="cmn-Error">※市区町村は必須です。</p>
        </li>
        <li class="cmn-textareaRequired">
          <label for="address">その他住所<span>※必須</span></label>
          <textarea name="address" id="address" cols="30" rows="10" v-model="inputData.address" :class="{'is-error':validateErr.address}"></textarea>
          <p v-if="validateErr.address" class="cmn-Error">※その他住所は必須です。</p>
        </li>
        <li class="cmn-textareaRequired">
          <label for="tel">電話番号<span>※必須</span></label>
          <input type="text" id="tel" v-model="inputData.tel" :class="{'is-error':validateErr.tel}">
          <p class="cmn-Notice">※ハイフン無しでご入力ください</p>
          <p v-if="validateErr.tel" class="cmn-Error">※電話番号は必須です。</p>
        </li>
      </ul>
      <BtnBigYellow btn-name="確認する" @click="goConfirm" />
    </div>

    <div v-if="isConfirm" class="ship-register_confirm">
      <ul>
        <Confirm label-name="姓名" :input-data="inputData.addressee" is-required />
        <Confirm label-name="姓名カナ" :input-data="inputData.addressee_kana" is-required />
        <Confirm label-name="郵便番号" :input-data="inputData.postal_code" is-required />
        <Confirm label-name="都道府県" :input-data="$store.state.prefOptions[inputData.prefecture].label" is-required />
        <Confirm label-name="市区町村" :input-data="inputData.municipality" is-required />
        <Confirm label-name="その他住所" :input-data="inputData.address" is-required />
        <Confirm label-name="電話番号" :input-data="inputData.tel" is-required />
      </ul>
      <BtnBigYellow btn-name="登録する" @click="goComplete" />
      <BtnBigWhite btn-name="修正する" @click="backInput" />
    </div>

    <div v-if="isComplete" class="ship-register_complete">
      <p>登録済み配送先情報の登録を<br>完了いたしました。</p>
      <BtnBigGreen btn-name="配送先一覧へ" @click="goShippingList" />
      <BtnBigGreen btn-name="MY GARDENへ" @click="goMyGarden" />
    </div>
  </main>
  <Footer />
</template>

<script>
import HamHeader from "@/components/headers/HamburgerHeader";
import BtnBigYellow from "@/components/buttons/BtnBigYellow";
import BtnBigWhite from "@/components/buttons/BtnBigWhite";
import Confirm from "@/components/form-parts/Confirm";
import BtnBigGreen from "@/components/buttons/BtnBigGreen";
import Footer from "@/components/Footer";

import { reactive, ref } from "vue";
import { useRoute } from  "vue-router";

export default {
  name: 'ShippingRegister',
  components: {
    HamHeader,
    BtnBigYellow,
    BtnBigWhite,
    Confirm,
    BtnBigGreen,
    Footer,
  },
  setup() {
    const isInput = ref(true);
    const isConfirm = ref(false);
    const isComplete = ref(false);
    const route = useRoute();
    const axios = require('axios');
    const inputData = reactive({
      addressee: '',
      addressee_kana: '',
      postal_code: '',
      prefecture: '00',
      municipality: '',
      address: '',
      tel: ''
    });
    const validateErr = reactive({
      addressee: false,
      addressee_kana: false,
      postal_code: false,
      prefecture: false,
      municipality: false,
      address: false
    });

    // 配送先編集の場合
    if(typeof(route.query.address_id) != 'undefined') {
      // 配送先情報の取得とセット
      // TODO response内容を再確認、API URL修正
      axios
        .get('http://localhost:3001/address', {
          params: {
            address_id: route.query.address_id
          }
        })
        .then((response) => {
          if(response.data[0].address_id === route.query.address_id) {
            inputData.addressee = response.data[0].addressee;
            inputData.addressee_kana = response.data[0].addressee_kana;
            inputData.postal_code = response.data[0].postal_code;
            inputData.prefecture = response.data[0].prefecture;
            inputData.municipality = response.data[0].municipality;
            inputData.address = response.data[0].address;
            inputData.tel = response.data[0].tel;
          }
        })
        .catch((error) => (
          console.log('error: ', error)
        ));
    }

    const goConfirm = () => {
      let errFlg = 0;
      const spaceRegex = new RegExp('^(\\s|　)+$');
      const kanaRegex = new RegExp('^[ァ-ンヴー]*$');
      const numRegex = new RegExp('^[0-9]+$');

      // 姓名
      if(inputData.addressee === '' || inputData.addressee.match(spaceRegex) != null) {
        validateErr.addressee = true;
        errFlg++;
      } else if(validateErr.addressee) {
        validateErr.addressee = false;
        errFlg--;
      }
      // 姓名カナ
      if(inputData.addressee_kana === '' || inputData.addressee_kana.match(spaceRegex) != null || !inputData.addressee_kana.match(kanaRegex)) {
        validateErr.addressee_kana = true;
        errFlg++;
      } else if(validateErr.addressee_kana) {
        validateErr.addressee_kana = false;
        errFlg--;
      }
      // 郵便番号
      if(inputData.postal_code === '' || inputData.postal_code.match(spaceRegex) != null || !inputData.postal_code.match(numRegex)) {
        validateErr.postal_code = true;
        errFlg++;
      } else if(validateErr.postal_code) {
        validateErr.postal_code = false;
        errFlg--;
      }
      // 都道府県
      if(inputData.prefecture === '00') {
        validateErr.prefecture = true;
        errFlg++;
      } else {
        if(validateErr.prefecture) {
          validateErr.prefecture = false;
          errFlg--;
        }
      }
      // 市区町村
      if(inputData.municipality === '' || inputData.municipality.match(spaceRegex) != null) {
        validateErr.municipality = true;
        errFlg++;
      } else if(validateErr.municipality) {
        validateErr.municipality = false;
        errFlg--;
      }
      // その他住所
      if(inputData.address === '' || inputData.address.match(spaceRegex) != null) {
        validateErr.address = true;
        errFlg++;
      } else if(validateErr.address){
        validateErr.address = false;
        errFlg--;
      }
      // 電話番号
      if(inputData.tel === '' || inputData.tel.match(spaceRegex) != null || !inputData.tel.match(numRegex)) {
        validateErr.tel = true;
        errFlg++;
      } else if(validateErr.tel) {
        validateErr.postal_code = false;
        errFlg--;
      }

      if(errFlg > 0) {
        return false;
      } else {
        isInput.value = false;
        isConfirm.value = true;
      }
    };

    const backInput = () => {
      isInput.value = true;
      isConfirm.value = false;
    };

    const goComplete = () => {
      // 新規登録の場合
      if(typeof(route.query.address_id) == 'undefined') {
        const postData = {
          id: '003',
          addressee: inputData.addressee,
          addressee_kana: inputData.addressee_kana,
          postal_code: inputData.postal_code,
          prefecture: inputData.prefecture,
          municipality: inputData.municipality,
          address: inputData.address,
          tel: inputData.tel
        };
        // TODO postDataのidを削除、API-URL、動作確認
        axios
          .post('http://localhost:3001/address', postData)
          .then((response) => {
            if(response.status === 201) {
              isConfirm.value = false;
              isComplete.value = true;
            }
          })
          .catch((error) => {
            console.log('error: ', error);
          });
      } else {
        // 更新の場合
        const putData = {
          id: route.query.address_id,
          lastname: inputData.addressee,
          lastname_kana: inputData.addressee_kana,
          firstname: inputData.addressee,
          firstname_kana: inputData.addressee_kana,
          postal_code: inputData.postal_code,
          prefecture: inputData.prefecture,
          municipality: inputData.municipality,
          address: inputData.address,
          tel: inputData.tel
        };
        // TODO API-URL、動作確認
        axios
          .post('http://localhost:3001/address/' + route.query.address_id, putData)
          .then((response) => {
            if(response.status === 201) {
              isConfirm.value = false;
              isComplete.value = true;
            }
          })
          .catch((error) => {
            console.log('error: ', error);
          });
      }
    };

    const goShippingList = () => {
      window.location.href = '/shipping-list';
    };

    const goMyGarden = () => {
      window.location.href = '/my-garden';
    };

    return {
      isInput,
      isConfirm,
      backInput,
      isComplete,
      inputData,
      validateErr,
      goConfirm,
      goComplete,
      goShippingList,
      goMyGarden,
    }
  }
}
</script>

<style scoped lang="scss">
li {
  margin-top: remSize(24);

  &:first-child {
    margin-top: 0;
  }
}

.ship-register_input,
.ship-register_confirm,
.ship-register_complete {
  padding: remSize(8) remSize(20) remSize(24);

  :deep(button) {
    margin-top: remSize(40);
  }
}

.ship-register_confirm {
  font-weight: 500;
}

.ship-register_complete {
  p {
    margin-top: remSize(54);
    font-weight: 500;
  }
}
</style>
