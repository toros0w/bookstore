<template>
  <div class="category-wrapper">
    <h2 class="category-title">
      <img src="/src/assets/icons/FOLDER_NOTCH_OPEN.svg" alt="" class="category-img" />
      Categories
    </h2>
    <div class="category-items">
      <CategoryBtn v-for="(category, index) in categories" :key="index" :CategoryText="category" />
    </div>
  </div>
</template>

<script>
import CategoryBtn from '@/components/CategoryBtn.vue'
export default {
  name: 'CategorySection',
  components: {
    CategoryBtn
  },
  data() {
    return {
      categories: ['Classic', 'Adventure', 'Horrow', 'Mystic', 'Documental', 'Philosophy']
    }
  }
}
</script>

<style scoped>
.category-wrapper {
  max-width: 1300px;
}
.category-title {
  font-size: 36px;
  font-family: var(--unica);
  font-weight: 500;
  color: var(--gray-800);
  text-transform: uppercase;
}
.category-items {
  margin-top: 75px;
  display: flex;
  flex-wrap: wrap;
  row-gap: 50px;
  column-gap: 63px;
}
</style>