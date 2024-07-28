<template>
  <div class="search-books-wrapper">
    <ImgFrame :images="imgArr" cls="search-img-frame" />
    <div class="book-info-wrapper">
      <div class="book-name">Killing Lincoln</div>
      <div class="author-name">BILL O'REILLY</div>
      <div class="book-price">$30,00</div>
    </div>
  </div>
</template>

<script>
import ImgFrame from '@/components/ImgFrame.vue'
export default {
  name: 'SearchBook',
  components: {
    ImgFrame
  },
  data() {
    return {
      imgArr: ['/src/assets/img/romance/book2.jpg']
    }
  }
}
</script>

<style scoped>
.search-books-wrapper {
  display: flex;
  gap: 20px;
}
.book-info-wrapper {
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  font-family: var(--syne);
  font-weight: 400;
  color: var(--gray-800);
}
.book-name {
  font-size: 16px;
}
.author-name {
  margin-top: 12px;
  color: var(--gray-600);
  font-size: 12px;
}
.book-price {
  margin-top: 15px;
  font-size: 24px;
  color: var(--gray-800);
  font-weight: 400;
}
</style>
