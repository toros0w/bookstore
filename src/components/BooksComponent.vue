<template>
  <router-link class="trending-books-items" to="/book-info">
    <ImgFrame class="trending-images" :images="imgArr" cls="show-img-frame" />
  </router-link>
</template>

<script>
import ImgFrame from '@/components/ImgFrame.vue'

export default {
  name: 'TrendingBooks',
  components: {
    ImgFrame
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
.trending-books-items {
  display: flex;
  gap: 44px;
  max-width: 1300px;
  padding: 60px 90px 60px 90px;
  border: 2px dashed var(--gray-600);
  align-items: center;
  justify-content: center;
  border-radius: 20px;
}
</style>