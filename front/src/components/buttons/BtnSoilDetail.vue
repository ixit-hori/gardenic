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
          <h2>{{ soilInfo.item_name }}</h2>
          <img :src="require('@/assets/' + soilInfo.detail_image_path)" :alt="soilInfo.item_name" class="detail-modal_soil">
          <p class="detail-modal_detail">{{ soilInfo.description }}</p>
          <BtnBigYellow btn-name="選択する" @click="clickSelect(soilInfo.item_name, $event)" class="detail-modal_selectBtn" />
        </div>
      </div>
    </div>
  </teleport>
</template>

<script>
import BtnBigYellow from "@/components/buttons/BtnBigYellow";
import { ref } from "vue";

export default {
  name: 'BtnSoilDetail',
  components: {
    BtnBigYellow
  },
  props: {
    btnName: String,
    soilInfo: Object,
  },
  emits: ['relay'],
  setup(_, context) {
    const modalOpen = ref(false);

    /***
     * 選択ボタン押下時
    ***/
    const clickSelect = (name, ev) => {
      // 親(SoilSelectParts)のrelayイベント発行
      context.emit('relay', name, ev);
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

.detail-modal_soil {
  width: remSize(280);
  height: remSize(190);
  object-fit: cover;
  border: 1px solid #e2e2e2;
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
