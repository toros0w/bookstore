<template>
  <div class="favorite-books-wrapper">
    <BooksToSell :category="CategoryType" />
  </div>
</template>

<script>
import BooksToSell from '@/components/BooksToSell.vue'
export default {
  name: 'FavoriteBooks',
  components: {
    BooksToSell
  },
  props: {
    CategoryType: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.category-title {
  font-size: 36px;
  font-family: var(--unica);
  font-weight: 400;
  color: var(--gray-600);
  text-transform: uppercase;
  margin-bottom: 52px;
}
</style>