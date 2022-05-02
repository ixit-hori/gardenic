<template>
  <li class="cmn-selectRequired">
    <label for="prefectures">都道府県<span>※必須</span></label>
    <select name="prefectures" id="prefectures">
      <option value="01">北海道</option>
      <option value="02">青森県</option>
      <option value="03">岩手県</option>
      <option value="04">宮城県</option>
      <option value="05">秋田県</option>
    </select>
  </li>
</template>

<script>
export default {
  name: 'SelectRequired',
}
</script>

<style scoped lang="scss">

</style>
