<template>
  <LogoHeader />
  <main>
    <div class="ft-Start_Slider">
      <splide :options="options">
        <splide-slide>
          <img src="@/assets/ft-start_img01.png" alt="slide_image1">
        </splide-slide>
        <splide-slide>
          <img src="@/assets/ft-start_img02.png" alt="slide_image2">
        </splide-slide>
        <splide-slide>
          <img src="@/assets/ft-start_img03.png" alt="slide_image3">
        </splide-slide>
        <splide-slide>
          <img src="@/assets/ft-start_img04.png" alt="slide_image4">
        </splide-slide>
      </splide>
      <h2>お花を育てて<br>大切な人に贈りましょう</h2>
      <p>オンライン育てたお花を実物と交換♪</p>
    </div>
    <a href="">
      <img src="@/assets/ft-start_btn01.png" srcset="@/assets/ft-start_btn01.png 1x, @/assets/ft-start_btn01@2x.png 2x" alt="Sign In with Google">
    </a>
  </main>
</template>

<script>
import LogoHeader from '@/components/headers/LogoHeader';
import { Splide, SplideSlide } from '@splidejs/vue-splide';

export default {
  name: 'Start',
  components: {
    LogoHeader,
    Splide,
    SplideSlide,
  },
  data() {
    return {
      options: {
        type: 'loop',
        rewind: true,
        height: 230,
        autoplay: true,
        arrows: false,
      },
    };
  },
  setup() {
    // TODO data()のリファクタリング
    // TODO Sliderのドッド位置
    // TODO Google Login への遷移
  }
}
</script>

<style scoped lang="scss">
@import url("~@splidejs/splide/dist/css/themes/splide-default.min.css");

.ft-Start_Slider {
  margin-top: 0;
  margin-bottom: 30px;
  padding: 5% 0 15% 0;
  width: 100%;
  height: auto;
  background-color: $mainColor;
  border-radius:  0 0 50px 50px;
}

h2 {
  color: #326E39;
  font-size: remSize(22);
  font-weight: bold;
}

p {
  color: #2e2414;
  font-size: remSize(15);
  font-weight: bold;
}

:deep(.splide__pagination) {
  top: 380px;
}

</style>
