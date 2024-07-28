<template>
  <div :class="cls">
    <p class="banner-text">
      {{ text }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'BannerDash',
  props: {
    text: {
      type: String
    },
    cls: {
      type: String,
      default: 'banner-dash'
    }
  }
}
</script>
<style scoped>
.banner-dash {
  width: 523px;
  height: auto;
  border: dashed 2px var(--gray-800);
  border-radius: 20px;
  text-align: left;
  padding: 35px 86px 35px 20px;
  background-color: var(--white);
}
.banner-dash-bg {
  width: 523px;
  height: auto;
  border: dashed 2px var(--gray-800);
  border-radius: 20px;
  text-align: left;
  padding: 35px 86px 35px 20px;
  background-color: var(--white);
  box-shadow: 11px 9px 0px 0px var(--gray-600);
}
.banner-text {
  font-family: var(--syne);
  font-weight: 400;
  color: var(--gray-600);
  font-size: 14px;
  line-height: 17px;
}
</style>
