<template>
  <li>
    <a :href="'/nurturing?flower_id=' + flower_info.flower_id">
      <div class="myGarden_level_wrap" >
        <div class="myGarden_level">
          <b><span>Lv.</span>{{ flower_info.flower_level }}</b>
          <img :src="require('@/assets/' + flower_info.flower_current_img_path)" alt="flower stats image">
        </div>
      </div>
      <div class="myGarden_detail">
        <h2>{{ flower_info.nickname }}</h2>
        <div>育成期間：{{ flower_info.breeding_date }}日目</div>
      </div>
    </a>
  </li>
</template>

<script>
export default {
  name: 'MyGardenParts',
  props: {
    flower_info: Object
  }
}
</script>

<style scoped lang="scss">
li {
  position: relative;
  margin-bottom: remSize(16);
  border: 1px solid #e2e2e2;
  border-radius: remSize(20);
  text-align: left;

  a,
  a:visited {
    display: flex;
    padding: remSize(16);
    color: $strongFontColor;
  }

  &:after {
    position: absolute;
    content: "";
    bottom: remSize(10);
    right: remSize(17);
    width: remSize(28);
    height: remSize(28);
    background-image: url("~@/assets/cmn-hamMenu_img06@2x.png");
    background-size: contain;
    z-index: -1;
  }
}

.myGarden_level_wrap {
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  min-width: remSize(155);
  min-height: remSize(157);
  margin: remSize(-17) 0 remSize(-17) remSize(-17);
  border-radius: remSize(20) 0 0 remSize(20);
  background-color: rgba(211,235,205,0.35);

  .myGarden_level {
    padding: remSize(16);

    b {
      position: absolute;
      top: remSize(16);
      left: remSize(16);

      span {
        font-size: remSize(12);
      }
    }
  }
}

.myGarden_detail {
  min-width: remSize(188);
  padding: remSize(20) remSize(16);

  h2 {
    margin: 0;
    font-size: remSize(16);
  }

  div {
    margin-top: remSize(12);
    font-size: remSize(14);
    font-weight: 400;
    color: $baseFontColor;
  }
}
</style>
