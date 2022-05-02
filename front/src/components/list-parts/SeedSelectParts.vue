<template>
  <li>
    <div class="fl-seedSelect_img">
      <img :src="require('@/assets/' + flowerInfo.alias_image_path)" alt="flower image">
    </div>
    <div class="fl-seedSelect_detail-wrap">
      <h2>{{ flowerInfo.seed_name }}</h2>
      <div class="fl-seedSelect_detail">
        <p><span>育成目安</span><span>: {{ flowerInfo.breeding_speed }}ヶ月</span></p>
        <p><span>育てやすさ </span><span ref="test" class="fl-seedSelect_detail-breeding_level">:
          <svg :class="[ flowerInfo.breeding_level > 0 ? 'is-active' : '' ]" width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.612 8.63184V6.42618C9.63335 6.15317 12 3.90081 12 1.17068C12 0.872518 11.7275 0.631836 11.386 0.631836C9.61708 0.631836 8.1979 1.02699 7.17723 1.80651C6.68113 2.1837 6.28668 2.64351 5.99797 3.18594C5.70925 2.6507 5.31481 2.19088 4.82277 1.8137C3.79803 1.03058 2.37885 0.631836 0.614029 0.631836C0.27245 0.631836 0 0.872518 0 1.17068C0 3.90081 2.36666 6.15317 5.388 6.42618V8.63184H6.612Z" fill="#326E39"/>
          </svg>
          <svg :class="[ flowerInfo.breeding_level > 1 ? 'is-active' : '' ]" width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.612 8.63184V6.42618C9.63335 6.15317 12 3.90081 12 1.17068C12 0.872518 11.7275 0.631836 11.386 0.631836C9.61708 0.631836 8.1979 1.02699 7.17723 1.80651C6.68113 2.1837 6.28668 2.64351 5.99797 3.18594C5.70925 2.6507 5.31481 2.19088 4.82277 1.8137C3.79803 1.03058 2.37885 0.631836 0.614029 0.631836C0.27245 0.631836 0 0.872518 0 1.17068C0 3.90081 2.36666 6.15317 5.388 6.42618V8.63184H6.612Z" fill="#326E39"/>
          </svg>
          <svg :class="[ flowerInfo.breeding_level > 2 ? 'is-active' : '' ]" width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.612 8.63184V6.42618C9.63335 6.15317 12 3.90081 12 1.17068C12 0.872518 11.7275 0.631836 11.386 0.631836C9.61708 0.631836 8.1979 1.02699 7.17723 1.80651C6.68113 2.1837 6.28668 2.64351 5.99797 3.18594C5.70925 2.6507 5.31481 2.19088 4.82277 1.8137C3.79803 1.03058 2.37885 0.631836 0.614029 0.631836C0.27245 0.631836 0 0.872518 0 1.17068C0 3.90081 2.36666 6.15317 5.388 6.42618V8.63184H6.612Z" fill="#326E39"/>
          </svg>
          <svg :class="[ flowerInfo.breeding_level > 3 ? 'is-active' : '' ]" width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.612 8.63184V6.42618C9.63335 6.15317 12 3.90081 12 1.17068C12 0.872518 11.7275 0.631836 11.386 0.631836C9.61708 0.631836 8.1979 1.02699 7.17723 1.80651C6.68113 2.1837 6.28668 2.64351 5.99797 3.18594C5.70925 2.6507 5.31481 2.19088 4.82277 1.8137C3.79803 1.03058 2.37885 0.631836 0.614029 0.631836C0.27245 0.631836 0 0.872518 0 1.17068C0 3.90081 2.36666 6.15317 5.388 6.42618V8.63184H6.612Z" fill="#326E39"/>
          </svg>
          <svg :class="[ flowerInfo.breeding_level > 4 ? 'is-active' : '' ]" width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.612 8.63184V6.42618C9.63335 6.15317 12 3.90081 12 1.17068C12 0.872518 11.7275 0.631836 11.386 0.631836C9.61708 0.631836 8.1979 1.02699 7.17723 1.80651C6.68113 2.1837 6.28668 2.64351 5.99797 3.18594C5.70925 2.6507 5.31481 2.19088 4.82277 1.8137C3.79803 1.03058 2.37885 0.631836 0.614029 0.631836C0.27245 0.631836 0 0.872518 0 1.17068C0 3.90081 2.36666 6.15317 5.388 6.42618V8.63184H6.612Z" fill="#326E39"/>
          </svg>
        </span></p>
      </div>
      <div class="fl-seedSelect_btn">
        <BtnSeedDetail btn-name="詳細" :flower-info="flowerInfo" @relay="relaySelectFlower" />
        <BtnSmallYellow btn-name="選択" @click="clickSelect(flowerInfo.seed_id, flowerInfo.alias_image_path, flowerInfo.seed_name, $event)" />
      </div>
    </div>
  </li>
</template>

<script>
import BtnSeedDetail from "@/components/buttons/BtnSeedDetail";
import BtnSmallYellow from "@/components/buttons/BtnSmallYellow";

export default {
  name: 'SeedSelectParts',
  components: {
    BtnSeedDetail,
    BtnSmallYellow,
  },
  props: {
    flowerInfo: Object,
  },
  emits: ['goSoil'],
  setup(_, context) {
    /***
     * 選択ボタン押下時
     ***/
    const clickSelect = (seed_id, img, name, ev) => {
      // 親(FlowerSelect)のgoSoilイベント発行
      context.emit('goSoil', seed_id, img, name, ev);
      ev.preventDefault();
    };

    /***
     * modalの選択ボタンイベントを中継
    ***/
    const relaySelectFlower = (seed_id, img, name, ev) => {
      // 親(FlowerSelect)のgoSoilイベント発行
      context.emit('goSoil', seed_id, img, name, ev);
      ev.preventDefault();
    }

    return {
      clickSelect,
      relaySelectFlower
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

.fl-seedSelect_img {
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: remSize(140);
  min-height: remSize(157);
  border-radius: remSize(20) 0 0 remSize(20);
  background-color: rgba(211,235,205,0.35);
}

.fl-seedSelect_detail-wrap {
  width: 100%;
  padding: remSize(20) remSize(16);

  h2 {
    margin: 0;
    font-size: remSize(16);
    font-weight: 700;
    color: $strongFontColor;
  }

  .fl-seedSelect_detail {
    font-size: remSize(14);
    font-weight: 500;

    p {
      margin: remSize(20) 0 remSize(5);

      &:nth-child(2) {
        margin: remSize(5) 0 remSize(14);
      }

      span {
        &:nth-child(odd) {
          display: inline-block;
          width: remSize(75);
        }
      }

      svg {
        margin-left: remSize(3);

        path {
          fill: #c4c4c4;
        }

        &.is-active {
          path {
            fill: $strongFontColor;
          }
        }
      }
    }
  }

  .fl-seedSelect_btn {
    display: flex;

    div {
      &:nth-child(2) {
        padding-left: remSize(10);
      }
    }
  }
}
</style>
