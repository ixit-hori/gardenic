<template>
  <header>
    <h1><img src="@/assets/cmn-header_logo01.png" srcset="@/assets/cmn-header_logo01.png 1x, @/assets/cmn-header_logo01@2x.png 2x" alt="gardenic Cloud Flower Garden"></h1>
  </header>

</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped lang="scss">
header {
  background-color: $mainColor;

  h1 {
    margin: 0;
    img {
      padding: remSize(24) 0;
    }
  }
}

</style>
