<template>
  <router-link class="category-btn" to="/error">
    <div class="rect-btn">
      {{ CategoryText }}
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'RectBtn',
  props: {
    CategoryText: {
      type: String,
      required: true
    }
  }
}
</script>
<style scoped>
.category-btn {
  text-decoration: none;
}
.rect-btn {
  height: 80px;
  width: 387.5px;
  background-color: var(--white);
  font-family: var(--syne);
  font-weight: 400;
  color: var(--gray-800);
  font-size: 24px;
  border: 2px solid var(--gray-800);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 12px 12px 0px 0px var(--orange-500);
  cursor: pointer;
  transition: background-color 0.2s linear 0.1s;
}
.rect-btn:hover {
  background-color: var(--yellow-500);
}
</style>