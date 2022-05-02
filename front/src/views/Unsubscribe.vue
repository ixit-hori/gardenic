<template>
  <HamHeader :msg="headTitle" />
  <main class="cmn-haveHamHeader">
    <div v-if="!completion">
      <ul class="cmn-policy">
        <li>
          <p>タイトルタイトル</p>
          <div>
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
          </div>
        </li>
        <li>
          <p>タイトルタイトル</p>
          <div>
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
          </div>
        </li>
        <li>
          <p>タイトルタイトル</p>
          <div>
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
          </div>
        </li>
      </ul>
      <BtnBigYellow btn-name="退会する" class="unsubscribe_btn" @click="withdrawal" />
    </div>
    <div v-if="completion" class="unsubscribe_complete">
      <p>ご利用いただき<br>ありがとうございました。</p>
      <BtnBigGreen btn-name="TOP画面へ" @click="goTop" />
    </div>
  </main>
  <Footer />
</template>

<script>
import HamHeader from "@/components/headers/HamburgerHeader";
import BtnBigYellow from "@/components/buttons/BtnBigYellow";
import BtnBigGreen from "@/components/buttons/BtnBigGreen";
import Footer from "@/components/Footer";

import { ref } from "vue";

export default {
  name: 'UserPolicy',
  components: {
    HamHeader,
    BtnBigYellow,
    BtnBigGreen,
    Footer,
  },
  setup() {
    const headTitle = ref('退会規約');
    const completion = ref(false);
    const withdrawal = () => {
      // TODO: 退会処理
      headTitle.value = '退会手続き 完了';
      completion.value = true;
    };

    const goTop = () => {
      // TODO: TOPへ遷移
      // TOPはどこ？Googleログイン画面？
    };

    return {
      headTitle,
      completion,
      withdrawal,
      goTop
    }
  }
}
</script>

<style scoped lang="scss">
main {
  padding: 0 remSize(16);
}

.unsubscribe_btn {
  margin-top: remSize(40);
}

.unsubscribe_complete {
  p {
    padding: remSize(72) 0 remSize(76);
    font-size: remSize(16);
    font-weight: 500;
  }
}
</style>
