<template>
  <li v-for="(soil, index) in soilData" :key="index">
<!--    <div class="fl-soilSelect_img" :class="soil.recommend == 'yes' ? 'recommend' : ''">-->
    <div class="fl-soilSelect_img">
      <img :src="require('@/assets/' + soil.alias_image_path)" alt="soil image">
    </div>
    <div class="fl-soilSelect_detail-wrap">
      <h2>{{ soil.item_name }}</h2>
      <p class="fl-soilSelect_detail">{{ soil.description.length > 23 ? soil.description.slice(0, 23) + '...' : soil.description }}</p>
      <div class="fl-soilSelect_btn">
        <BtnSoilDetail btn-name="詳細" :soil-info="soil" @relay="relaySelectSoil" />
        <BtnSmallYellow btn-name="選択" @click="clickSelect(soil.item_name, $event)" />
      </div>
    </div>
  </li>
</template>

<script>
import BtnSoilDetail from "@/components/buttons/BtnSoilDetail";
import BtnSmallYellow from "@/components/buttons/BtnSmallYellow";

import { ref } from "vue";

export default {
  name: 'SoilSelectParts',
  components: {
    BtnSoilDetail,
    BtnSmallYellow,
  },
  emits: ['goNickname'],
  setup(_, context) {
    const axios = require('axios');
    const soilData = ref([]);

    // 土情報の取得とセット
    axios
      .get('http://localhost:3001/items', {
        params: {
          kind: 1
        }
      })
      .then((response) => {
        soilData.value = response.data;
      })
      .catch((error) => (
        console.log('error: ', error)
      ));

    /***
     * 選択ボタン押下時
     ***/
    const clickSelect = (name, ev) => {
      // 親(SoilSelect)のgoNicknameイベント発行
      context.emit('goNickname', name, ev);
    };

    /***
     * modalの選択ボタンイベントを中継
    ***/
    const relaySelectSoil = (name, ev) => {
      // 親(SoilSelect)のgoNicknameイベント発行
      context.emit('goNickname', name, ev);
      ev.preventDefault();
    }

    return {
      soilData,
      clickSelect,
      relaySelectSoil
    };
  }
}
</script>

<style scoped lang="scss">
li {
  position: relative;
  display: flex;
  margin-bottom: remSize(16);
  border: 1px solid #e2e2e2;
  border-radius: remSize(20);
  text-align: left;
}

.fl-soilSelect_img {
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: remSize(140);
  min-height: remSize(157);
  border-radius: remSize(20) 0 0 remSize(20);
  background-color: rgba(211,235,205,0.35);

  &.recommend {
    &:before {
      content: url("~@/assets/fl-soilSelect_img01.png");
      position: absolute;
      top: remSize(10);
      left: remSize(10);
    }
  }
}

.fl-soilSelect_detail-wrap {
  width: 100%;
  padding: remSize(20) remSize(16);

  h2 {
    margin: 0;
    font-size: remSize(16);
    font-weight: 700;
    color: $strongFontColor;
  }

  .fl-soilSelect_detail {
    font-size: remSize(14);
    font-weight: 500;
  }

  .fl-soilSelect_btn {
    display: flex;

    div {
      &:nth-child(2) {
        padding-left: remSize(10);
      }
    }
  }
}
</style>
