<template>
  <HamHeader msg="交換履歴一覧" />
  <main class="cmn-haveHamHeader">
    <ul>
      <ExchangeParts
        v-for="(exchange) in exchangeData"
        :exchange-data="exchange"
        :key="exchange.exchange_date"
      />
    </ul>
  </main>
  <Footer />
</template>

<script>
import HamHeader from "@/components/headers/HamburgerHeader";
import ExchangeParts from "@/components/list-parts/ExchangeParts";
import Footer from "@/components/Footer";

import { ref, onBeforeMount } from "vue";

export default {
  name: 'ExchangeHistory',
  components: {
    HamHeader,
    ExchangeParts,
    Footer
  },
  setup() {
    const axios = require('axios');
    const exchangeData = ref([]);

    onBeforeMount(() =>{
      axios
        .get('http://localhost:3001/exchanges')
        .then((response) => {
          exchangeData.value = response.data;
        })
        .catch((error) => {
          console.log('error: ', error)
        });
    });

    return {
      exchangeData
    }
  }
}
</script>

<style scoped lang="scss">
ul {
  margin: 0 remSize(16) remSize(20);
}
</style>
