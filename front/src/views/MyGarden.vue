<template>
  <HamHeader msg="MY GARDEN" />
  <main class="cmn-haveHamHeader">
    <ul>
      <my-garden-parts
        v-for="flower in flowers"
        :flower_info = "flower"
        :key="flower.flower_id"
      ></my-garden-parts>
    </ul>
    <BtnAddFlower :remaining="remain.remaining" />
  </main>
</template>

<script>
import HamHeader from "@/components/headers/HamburgerHeader";
import BtnAddFlower from "@/components/buttons/BtnAddFlower";
import MyGardenParts from "@/components/list-parts/MyGardenParts";

import { ref, reactive } from "vue";

export default {
  name: 'MyGarden',
  components: {
    HamHeader,
    BtnAddFlower,
    MyGardenParts,
  },
  setup() {
    const axios = require('axios');
    const remain = reactive({
      remaining: 10
    });
    const flowers = ref([]);

      axios
        .get('http://localhost:3001/flowers')
        .then((response) => {
          // 育成中の情報をセット
          flowers.value = response.data;
          // 追加残数をセット
          remain.remaining = 10 - response.data.length;
        })
        .catch((error) => (
          console.log('error: ', error)
        ));

    return {
      flowers,
      remain
    };
  }
};
</script>

<style scoped lang="scss">
ul {
  margin: 0 remSize(16);
  padding-bottom: remSize(60);
}
</style>
