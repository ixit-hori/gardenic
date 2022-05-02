<template>
  <HamHeader msg="プライバシーポリシー" />
  <main class="cmn-haveHamHeader">
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
  </main>
  <Footer />
</template>

<script>
import HamHeader from "@/components/headers/HamburgerHeader";
import Footer from "@/components/Footer";

export default {
  name: 'UserPolicy',
  components: {
    HamHeader,
    Footer,
  }
}
</script>

<style scoped lang="scss">
main {
  margin: remSize(58) remSize(16) 0;
}
</style>
