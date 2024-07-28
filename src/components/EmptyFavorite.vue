<template>
  <div class="empty-favorite-wrapper">
    <img src="/src/assets/icons/BookOpenGr.svg" alt="" class="empty-favorite-icon" />
    <div class="empty-favorite-text">Favorite some book :)</div>
  </div>
</template>

<script>
export default {
  name: 'EmptyFavorite'
}
</script>

<style scoped>
.empty-favorite-wrapper {
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  gap: 45px;
  margin-top: 162px;
}
.empty-favorite-text {
  font-family: var(--syne);
  font-size: 36px;
  font-weight: 400;
  color: var(--orange-500);
}
</style>