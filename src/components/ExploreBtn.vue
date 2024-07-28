<template>
  <div class="explore-btn">
    Explore
    <img src="/src/assets/icons/Binoculars.svg" alt="" class="explore-btn-icon" />
  </div>
</template>

<script>
export default {
  name: 'ExploreBtn'
}
</script>

<style scoped>
.explore-btn {
  height: 51px;
  width: 153px;
  background-color: var(--yellow-500);
  font-family: var(--syne);
  font-weight: 400;
  color: var(--gray-800);
  font-size: 16px;
  border: 2px solid var(--gray-800);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.2s linear 0.1s;
}
.explore-btn:hover {
  background-color: var(--orange-500);
}
.explore-btn-icon {
  margin-left: 20px;
}
</style>