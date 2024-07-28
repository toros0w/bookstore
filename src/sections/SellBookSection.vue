<template>
  <div class="selling-books-wrapper">
    <div class="category-romance">
      <h2 class="category-title">
        <img
          v-if="CategoryType != ''"
          src="/src/assets/icons/PATH.svg"
          alt=""
          class="romance-icon"
        />
        {{ CategoryType ? CategoryType : '' }}
      </h2>
    </div>
    <BooksToSell :category="CategoryType" />
  </div>
</template>

<script>
import BooksToSell from '@/components/BooksToSell.vue'
export default {
  name: 'SellBookSection',
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