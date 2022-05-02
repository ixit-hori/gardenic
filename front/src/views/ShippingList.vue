<template>
  <HamHeader msg="配送先 一覧" />
  <main class="cmn-haveHamHeader">
    <BtnAddShipAdd />
    <ul>
      <AddressParts
        v-for="(address, index) in addList"
        :index="index"
        :add-info = "address"
        :key="address.address_id" />
    </ul>
  </main>
  <Footer />
</template>

<script>
import HamHeader from "@/components/headers/HamburgerHeader";
import BtnAddShipAdd from "@/components/buttons/BtnAddShipAdd";
import AddressParts from "@/components/list-parts/AddressParts";
import Footer from "@/components/Footer";

import { ref, onBeforeMount } from "vue";

export default {
  name: 'ShippingList',
  components: {
    Footer,
    HamHeader,
    AddressParts,
    BtnAddShipAdd,
  },
  setup() {
    const axios = require('axios');
    const addList = ref([]);

    onBeforeMount(() => {
    // 配送先情報の取得とセット
    axios
      .get('http://localhost:3001/address', {
      })
      .then((response) => {
        addList.value = response.data;
      })
      .catch((error) => (
        console.log('error: ', error)
      ));
    });

    return {
      addList,
    };
  }
}
</script>

<style scoped lang="scss">
ul {
  padding: 0 remSize(16);
}
</style>
