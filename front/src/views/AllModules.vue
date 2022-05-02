<template>
  <main class="cmn-haveHamHeader">
    <HamHeader msg="All Components" />
    <br>
    <p>↑ Hamburger Menu</p>
    <br>
    <p>Logo Header1</p>
    <LogoHeader />
    <br>
    <p>Logo Header2</p>
    <LogoHeader2 />
    <br>
    <p>Button Big Yellow</p>
    <BtnBigYellow btn-name="Button"/>
    <br>
    <p>Button Big White</p>
    <BtnBigWhite btnName="Button"/>
    <br>
    <p>Button Big Green</p>
    <BtnBigGreen btnName="MY GARDENへ" linkPath="/my-garden"/>
    <br>
    <p>Button Medium White</p>
    <BtnMediumWhite btnName="Button"/>
    <br>
    <p>Button Small Yellow</p>
    <BtnSmallYellow btn-name="Btn"/>
    <br>
    <p>Button Small White</p>
    <BtnSmallWhite btnName="Btn"/>
    <br>
    <p>Button Small Delete</p>
    <BtnSmallDelete btnName="Btn"/>
    <br>
    <p>Button Select Ship Address</p>
    <BtnSelectShipAdd />
    <br>
    <p>Button Add Ship Address</p>
    <BtnAddShipAdd />
    <br>
    <p>Form Design Components</p>
    <div class="sample-form">
      <ul>
        <InputMedium />
        <InputRequired placeholder="1060047" />
        <InputError />
        <TextareaRequired />
        <TextareaError />
        <SelectNormal />
        <SelectRequired />
        <SelectError />
        <Confirm label-name="ユーザー名" input-data="テストユーザ"/>
        <my-garden-parts
          v-for="flower in flowers"
          :flower_info = "flower"
          :key="flower.flower_id"
        ></my-garden-parts>
      </ul>
      <BtnAddFlower :remaining="remain.remaining"/>
    </div>
  </main>
</template>

<script>
// @ is an alias to /src
import LogoHeader from '@/components/headers/LogoHeader'
import LogoHeader2 from "@/components/headers/LogoHeader2";
import HamHeader from "@/components/headers/HamburgerHeader";
import BtnBigYellow from "@/components/buttons/BtnBigYellow";
import BtnBigWhite from "@/components/buttons/BtnBigWhite";
import BtnBigGreen from "@/components/buttons/BtnBigGreen";
import BtnMediumWhite from "@/components/buttons/BtnMediumWhite";
import BtnSmallYellow from "@/components/buttons/BtnSmallYellow";
import BtnSmallWhite from "@/components/buttons/BtnSmallWhite";
import BtnSmallDelete from "@/components/buttons/BtnSmallDelete";
import BtnSelectShipAdd from "@/components/buttons/BtnSelectShipAdd";
import BtnAddFlower from "@/components/buttons/BtnAddFlower";
import BtnAddShipAdd from "@/components/buttons/BtnAddShipAdd";
import InputMedium from "@/components/form-parts/InputNormal";
import InputRequired from "@/components/form-parts/InputRequired";
import InputError from "@/components/form-parts/InputError";
import TextareaRequired from "@/components/form-parts/TextareaRequired";
import TextareaError from "@/components/form-parts/TextareaError";
import SelectNormal from "@/components/form-parts/SelectNormal";
import SelectRequired from "@/components/form-parts/SelectRequired";
import SelectError from "@/components/form-parts/SelectError";
import Confirm from "@/components/form-parts/Confirm";
import MyGardenParts from "@/components/list-parts/MyGardenParts";

import { ref, reactive, onBeforeMount } from "vue";

export default {
  name: 'AllModules',
  components: {
    LogoHeader,
    LogoHeader2,
    HamHeader,
    BtnBigYellow,
    BtnBigWhite,
    BtnBigGreen,
    BtnMediumWhite,
    BtnSmallYellow,
    BtnSmallWhite,
    BtnSmallDelete,
    BtnSelectShipAdd,
    BtnAddFlower,
    BtnAddShipAdd,
    InputMedium,
    InputRequired,
    InputError,
    TextareaRequired,
    TextareaError,
    SelectNormal,
    SelectRequired,
    SelectError,
    Confirm,
    MyGardenParts,
  },
  setup() {
    const axios = require('axios');
    const remain = reactive({
      remaining: 10
    });
    const flowers = ref([]);

    onBeforeMount(() => {
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
    });

    return {
      flowers,
      remain
    };
  }
}
</script>

<style scoped lang="scss">
  main {
    padding: 0 0 remSize(30);
  }

  .sample-form {
    margin-bottom: remSize(50);
    padding: 0 remSize(20) 0;
  }

  ul {
    li {
      margin-top: remSize(20);
    }
  }

</style>
