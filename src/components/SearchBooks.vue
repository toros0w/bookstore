<template>
  <div class="book-item-wrapper">
    <SearchBook />
  </div>
</template>

<script>
import SearchBook from '@/components/SearchBook.vue'
export default {
  name: 'SearchBooks',
  components: {
    SearchBook
  }
}
</script>

<style scoped>
.book-item-wrapper {
  min-width: 526px;
  min-height: 147px;
  background: var(--yellow-500);
  border-bottom: 2px solid var(--gray-800);
  display: flex;
  align-items: center;
  padding-left: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
.book-item-wrapper:hover {
  background-color: rgb(255, 196, 107);
}
.book-item-wrapper:first-child {
  border-top: 2px solid var(--gray-800);
  margin-top: 25px;
}
.book-item-wrapper:last-child {
  /* border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px; */
  /* border-bottom: none; */
  margin-bottom: 18px;
}
</style>