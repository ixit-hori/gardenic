<template>
  <header>
    <h1><img src="@/assets/cmn-header_logo02.png" srcset="@/assets/cmn-header_logo02.png 1x, @/assets/cmn-header_logo02@2x.png 2x" alt="gardenic"></h1>
  </header>

</template>

<script>
export default {
  name: 'Header2'
}
</script>

<style scoped lang="scss">
header {
  background-color: $mainColor;

  h1 {
    margin: 0;
    img {
      padding: remSize(12) 0 remSize(4) 0;
    }
  }
}

</style>
