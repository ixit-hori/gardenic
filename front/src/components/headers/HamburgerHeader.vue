<template>
  <!-- header - start -->
  <div id="headerWrap">
    <div class="js-modal-bk" @click="modalBkClick" :class="{active:modal_bk}"></div>
    <header class="header">
      <div class="headerInner">
        <div id="js-open-menu" class="header__menu" @click="mainMenuToggle" :class="{active:headerMenu_state}">
          <span class="header__menu__line"></span>
          <span class="header__menu__line"></span>
          <span class="header__menu__line"></span>
        </div>
        <!-- header__menu -->

        <!-- MENU INNER - start --------------------------------------------------------------------------------------------->
        <div class="header__menu__inner" :class="{active:headerMenu_state}">
          <div class="header__listWrap">
            <ul class="header__menuList">
              <li class="header__menuList-1st"><a href="/my-garden">
                <img src="@/assets/cmn-hamMenu_img01.png" srcset="@/assets/cmn-hamMenu_img01.png 1x, @/assets/cmn-hamMenu_img01@2x.png 2x" alt="my garden image">
                <span>MY GARDEN</span>
              </a></li>
              <li><a href="/user-info">
                <img src="@/assets/cmn-hamMenu_img02.png" srcset="@/assets/cmn-hamMenu_img02.png 1x, @/assets/cmn-hamMenu_img02@2x.png 2x" alt="user image">
                <span>ユーザ情報</span>
              </a></li>
              <li><a href="/exchange-history">
                <img src="@/assets/cmn-hamMenu_img03.png" srcset="@/assets/cmn-hamMenu_img03.png 1x, @/assets/cmn-hamMenu_img03@2x.png 2x" alt="exchange image">
                <span>交換履歴一覧</span>
              </a></li>
              <li><a href="/shipping-list">
                <img src="@/assets/cmn-hamMenu_img04.png" srcset="@/assets/cmn-hamMenu_img04.png 1x, @/assets/cmn-hamMenu_img04@2x.png 2x" alt="shipping image">
                <span>配送先一覧</span>
                </a></li>
              <li class="js-accordion" v-cloak>
                <div class="js-accordion_trigger" :class="{ '_state-open': isOpened }" @click="accordionToggle()">
                  <img src="@/assets/cmn-hamMenu_img05.png" srcset="@/assets/cmn-hamMenu_img05.png 1x, @/assets/cmn-hamMenu_img05@2x.png 2x" alt="other image">
                  <span>その他</span>
                </div>
                <ul class="header__menuList-other js-accordion_target" :class="{ '_state-open': isOpened }" v-if="isOpened">
                  <li><a href="/user-policy">
                    <span>利用規約</span>
                    </a></li>
                  <li><a href="/privacy-policy">
                    <span>プライバシーポリシー</span>
                    </a></li>
                </ul>
              </li>
            </ul><!-- header__menuList -->
          </div>
        </div><!-- header__menu__inner -->
        <!-- MENU INNER - end --------------------------------------------------------------------------------------------->
        <h1 class="header__logo">{{ msg }}</h1>
      </div>
      <!-- headerInner -->
    </header>
  </div>
  <!-- header - end -->

</template>

<script>

export default {
  name: 'headerWrap',
  data: () => ({
    headerMenu_state: false,
    modal_bk: false,
    isOpened: false,
  }),
  methods: {
    mainMenuToggle: function () {
      if (this.headerMenu_state == true) {
        this.headerMenu_state = false;
        this.modal_bk = false;
        return;
      }
      this.headerMenu_state = true;
      this.modal_bk = true;
    },
    modalBkClick: function () {
      this.headerMenu_state = false;
      this.modal_bk = false;
    },
    accordionToggle: function () {
      this.isOpened = !this.isOpened;
    },
  },
  props: {
    msg: String
  }
}
</script>

<style scoped lang="scss">
@import "src/scss/common";
@mixin afterContent($top,$right,$bottom,$left,$widh,$height) {
  position: absolute;
  top: $top;
  right: $right;
  bottom: $bottom;
  left: $left;
  width: $widh;
  height: $height;
  content: "";
}

.js-modal-bk {
  opacity: 0;
  visibility: hidden;
  position: fixed;
  z-index: 12;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  transition: all .3s;
}

.js-modal-bk.active {
  opacity: 1;
  visibility: visible;
  height: 100vh;
  overflow: hidden;
}

.header {
  position: fixed;
  z-index: 12;
  top: 0;
  right: 0;
  left: 0;
  width: 100%;
  margin: 0 auto;
  background-color: $mainColor;
}

.headerInner {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header__menu {
  display: flex;
  z-index: 100;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  position: relative;
  width: 44px;
  height: 46px;
  margin-left: auto;
  padding: 13px 10px;
  transition: all .4s;

  .header__menu__line {
    display: block;
    width: 20px;
    height: 2px;
    margin: 0 auto 0 0;
    background: $strongFontColor;
    transition: all .4s;
  }
}

.header__menu.active {
  .header__menu__line {
    position: relative;
    width: 17px;

    &:nth-of-type(1) {
      top: -2px;
      transform: translateY(6px) rotate(-45deg);
    }

    &:nth-of-type(2) {
      opacity: 0
    }

    &:nth-of-type(3) {
      top: 0;
      width: 17px;
      transform: translateY(-10px) rotate(45deg);
    }
  }
}

.header__logo {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 80%;
  margin: auto;
  color: $strongFontColor;
  font-size: remSize(24);
}

.header__menu__inner {
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: $mainColor;
  font-size: 14px;
  transform: translateX(100%);
  transition: all .5s;
}

.header__menu__inner.active {
  transform: translateX(0)
}

.header__listWrap {
  margin: 46px 16px 20px;
  background-color: $baseColor;
  border-radius: 24px;
}

.header__menuList {
  margin-bottom: 20px;
  padding: 24px;

  li {
    position: relative;
    text-align: left;
    font-size: remSize(18);
    font-weight: bold;
    color: $strongFontColor;

    &:nth-child(n+2):nth-child(-n+4){
      &:after {
        @include afterContent(5%, 0, 0, 90%, 8px, 14px);
        margin: auto;
        background-image: image-set(url("~@/assets/cmn-hamMenu_img07.png") 1x, url(~@/assets/cmn-hamMenu_img07@2x.png) 2x);
      }
    }

    img {
      margin-right: 15px;
      vertical-align: bottom;
    }

    a {
      display: block;
      padding: 15px 0 15px 11px;
      border-bottom: 1px solid #c4c4c4;
      line-height: 1.5;
      span {
        position: relative;
      }
      &:visited {
        color: $strongFontColor;
      }
    }
  }

  .header__menuList-1st {
    margin: 0 -25px;
    text-align: center;
    font-size: remSize(26);
    &:after {
      @include afterContent(0, 24px, 5px, auto, 28px, 28px);
      margin: auto;
      background-image: image-set(url("~@/assets/cmn-hamMenu_img06.png") 1x, url(~@/assets/cmn-hamMenu_img06@2x.png) 2x);
    }

    a {
      padding-top: 0;
      border-bottom: 1px solid #d3ebcd;

      span {
        margin-right: 35px;
      }
    }
  }
}

.header__menuList-other {
  margin-left: remSize(40);

  li {
    text-align: left;

    a {
      span {
        font-size: remSize(16);
        color: $baseFontColor;
      }
    }
  }
}

.js-accordion_trigger {
  position: relative;
  padding: 15px 0 15px 11px;
  border-bottom: 1px solid #c4c4c4;
  line-height: 1.5;
  transition: all .2s ease-in;
  &:after {
    @include afterContent(5%, 0, 0, 90%, 14px, 8px);
    margin: auto;
    background-image: image-set(url("~@/assets/cmn-hamMenu_img08.png") 1x, url(~@/assets/cmn-hamMenu_img08@2x.png) 2x);
  }
  &._state-open {
    &:after{
      transform:rotateX(180deg);
    }
  }
}

.js-accordion_target {
  overflow: hidden;
  transition: .4s ease-in-out;

  li {
    text-align: left;

    a {
      span {
        font-size: remSize(16);
        color: $baseFontColor;
      }
    }
    &:nth-child(1) {
      &:after {
        @include afterContent(5%, 0, 0, 90%, 8px, 14px);
        margin: auto;
        background-image: image-set(url("~@/assets/cmn-hamMenu_img07.png") 1x, url(~@/assets/cmn-hamMenu_img07@2x.png) 2x);
      }
    }
  }
}
</style>
