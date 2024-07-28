<template>
  <div class="trending-books-wrapper">
    <div class="trending-books-head">
      <h2 class="trending-books-title">Trending Books</h2>
      <div class="drag-to-explore">
        <img src="/src/assets/icons/Sparkle.svg" alt="" class="drag-icon" />
        <p class="drag-text">Drag to explore</p>
      </div>
    </div>
    <BooksComponent />
  </div>
</template>

<script>
import BooksComponent from '@/components/BooksComponent.vue'
export default {
  name: 'TrendingBooks',
  components: {
    BooksComponent
  },
  props: {},
  data() {
    return {
      imgArr: [
        '/src/assets/img/book1.jpg',
        '/src/assets/img/book2.jpg',
        '/src/assets/img/book3.jpg',
        '/src/assets/img/book4.jpg',
        '/src/assets/img/book5.jpg'
      ]
    }
  }
}
</script>

<style scoped>
.trending-books-head {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
}
.trending-books-title {
  font-family: var(--unica);
  font-weight: 400;
  color: var(--gray-800);
  font-size: 36px;
  text-transform: uppercase;
  margin-bottom: 13px;
}
.drag-to-explore {
  display: flex;
  text-align: center;
  align-items: center;
  font-family: var(--syne);
  font-weight: 400;
  color: var(--gray-600);
  font-size: 14px;
  text-transform: uppercase;
  margin-bottom: 30px;
  gap: 10px;
}
.drag-text {
}
</style>