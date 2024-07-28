<template>
  <div class="marked-books-wrapper">
    <MarkedBook v-for="(img, index) in imgArr" :key="index" :imgArr="[img]" class="favorite-book" />
  </div>
</template>

<script>
import MarkedBook from '@/components/MarkedBook.vue'

export default {
  name: 'MarkedBooks',
  components: {
    MarkedBook
  },
  props: {
    imgArr: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.marked-books-wrapper {
  display: flex;
  flex-wrap: nowrap;
  gap: 19px;
  overflow-x: auto;
  margin-top: 70px;
}
</style>
