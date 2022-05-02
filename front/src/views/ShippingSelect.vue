<template>
  <HamHeader msg="配送先 選択" />
  <main class="cmn-haveHamHeader">
    <div v-if="!isDecided">
    <p>
      育成した花を実物と交換し郵送いたします。<br>
      配送先を選択または新規登録してください。
    </p>
    <BtnAddShipAdd />
    <ul>
      <AddressPartsSelect
        v-for="(address, index) in addList"
        :index="index"
        :add-info = "address"
        :key="address.address_id"
        @selectedShipAdd="updateAddId" />
    </ul>
    <button type="button" class="cmn-Button_selectedShipAdd" :class="{ 'invalidBtn': invalidClass }" @click="decidedShipAdd">配送先に指定する</button>
    </div>
    <div v-if="isDecided" class="ship-select_complete">
      <p>
        {{ selectedAdd.addressee }}様宛<br>
        配送申込みを完了いたしました。
      </p>
      <BtnBigGreen btn-name="MY GARDENへ" @click="jumpTo" />
    </div>
  </main>
</template>

<script>
import HamHeader from "@/components/headers/HamburgerHeader";
import BtnAddShipAdd from "@/components/buttons/BtnAddShipAdd";
import AddressPartsSelect from "@/components/list-parts/AddressPartsSelect";
import BtnBigGreen from "@/components/buttons/BtnBigGreen";

import { ref, onBeforeMount } from "vue";
import { useRoute } from "vue-router";

export default {
  name: 'ShippingSelect',
  components: {
    HamHeader,
    AddressPartsSelect,
    BtnAddShipAdd,
    BtnBigGreen
  },
  setup() {
    const isDecided = ref(false);
    const invalidClass = ref(true);
    const axios = require('axios');
    const route = useRoute();
    const addList = ref([]);
    const selectedAdd = ref({});

    onBeforeMount(() => {
      // 配送先情報の取得とセット
      axios
        .get('http://localhost:3001/address')
        .then((response) => {
          addList.value = response.data;
        })
        .catch((error) => (
          console.log('error: ', error)
        ));
    });

    /***
     * 選択された住所IDをセット
     * @param id: address_id
     * @param name: 配送先名前
     */
    const updateAddId = (objData) => {
      invalidClass.value = false;
      selectedAdd.value = objData;
    };

    /***
     * 配送先決定
     */
    const decidedShipAdd = () => {
      if(!invalidClass.value) {
        // TODO 決定時のAPI名を確認
        const data = {
          flower_id: route.query.flower_id,
          address_id: selectedAdd.value.address_id,
          addressee: selectedAdd.value.addressee,
          addressee_kana: selectedAdd.value.addressee_kana,
          post_code: selectedAdd.value.postal_code,
          prefecture: selectedAdd.value.prefecture,
          municipality: selectedAdd.value.municipality,
          address: selectedAdd.value.address,
          tel: selectedAdd.value.tel,
        }
        // TODO: 動作確認
        axios
          .post('http://localhost:3001/exchanges', data)
          .then((response) => {
            if(response.status === 201) {
              // addList.value = response.data;
              isDecided.value = true;
            }
          })
          .catch((error) => (
            console.log('error: ', error)
          ));
      }
    }

    /***
     * MY GARDENへ遷移
     */
    const jumpTo = (ev) => {
      window.location.href = '/my-garden';
      ev.preventDefault();
    }

    return {
      isDecided,
      invalidClass,
      addList,
      selectedAdd,
      updateAddId,
      decidedShipAdd,
      jumpTo
    };

  }
}
</script>

<style scoped lang="scss">
p {
  font-size: remSize(15);
  font-weight: 500;
}

ul {
  padding: 0 remSize(16) remSize(80);
}

.ship-select_complete {
  p {
    padding: remSize(72) 0 remSize(78);
  }
}
</style>
