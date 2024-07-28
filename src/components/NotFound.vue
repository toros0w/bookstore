<template>
  <div class="not-found-wrapper">
    <img src="/src/assets/icons/BookOpenGr.svg" alt="" class="not-found-icon" />
    <div class="not-found-text">Nothing was found :\</div>
  </div>
</template>

<script>
export default {
  name: 'NotFound'
}
</script>

<style scoped>
.not-found-wrapper {
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  gap: 45px;
  margin-top: 162px;
}
.not-found-text {
  font-family: var(--syne);
  font-size: 36px;
  font-weight: 400;
  color: var(--orange-500);
}
</style>