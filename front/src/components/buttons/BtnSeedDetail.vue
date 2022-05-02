<template>
  <div>
    <button type="button" class="cmn-Button_smallWhite" @click="modalOpen = true">{{ btnName }}</button>
  </div>

  <!-- Popup 要素 -->
  <teleport to="#app">
    <div v-if="modalOpen" class="cmn-modal_wrap">
      <div class="cmn-modal">
        <button type="button" @click="modalOpen = false" class="cmn-modal_close">
          <img src="@/assets/cmn_img01.png" srcset="@/assets/cmn_img01@2x.png 2x" alt="Close">
        </button>
        <div>
          <h2>{{ flowerInfo.seed_name }}</h2>
          <img :src="require('@/assets/' + flowerInfo.detail_image_path)" :alt="flowerInfo.seed_name" class="detail-modal_flower">
          <div class="detail-modal_detail">
            <p><span>育成目安</span><span>: {{ flowerInfo.breeding_speed }}ヶ月</span></p>
            <p><span>育てやすさ </span><span>:
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
          <p>{{ flowerInfo.description }}</p>
          <BtnBigYellow btn-name="選択する" @click="clickSelect(flowerInfo.seed_id, flowerInfo.alias_image_path, flowerInfo.seed_name, $event)" class="detail-modal_selectBtn" />
        </div>
      </div>
    </div>
  </teleport>
</template>

<script>
import BtnBigYellow from "@/components/buttons/BtnBigYellow";
import { ref } from "vue";

export default {
  name: 'BtnSeedDetail',
  components: {
    BtnBigYellow
  },
  props: {
    btnName: String,
    flowerInfo: Object,
  },
  emits: ['relay'],
  setup(_, context) {
    const modalOpen = ref(false);

    /***
     * 選択ボタン押下時
    ***/
    const clickSelect = (id, img, name, ev) => {
      // 親(SeedSelectParts)のrelayイベント発行
      context.emit('relay', id, img, name, ev);
    };

    return {
      modalOpen,
      clickSelect
    };
  }
}
</script>

<style scoped lang="scss">
.cmn-modal_wrap {
  h2 {
    margin-bottom: remSize(20);
  }
}

.detail-modal_flower {
  width: remSize(280);
  height: remSize(190);
  object-fit: cover;
  border-radius: remSize(20);
}

.detail-modal_detail {
  p {
    margin: remSize(24) 0 0;

    &:nth-child(2) {
      margin-top: remSize(5);
    }

    span {
      display: inline-block;
      width: remSize(85);

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
}

.detail-modal_selectBtn {
  margin-top: remSize(24);
}
</style>
