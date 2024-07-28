<template>
  <div class="component-wrapper">
    <ImgFrame :images="[booksData.book_img]" class="img-frame-cart" />
    <div class="cart-book-info">
      <div class="book-name">{{ booksData.book_name }}</div>
      <div class="author-name">{{ booksData.author }}</div>
      <BookCount class="cart-book-counter" />
    </div>
    <div class="cart-book-right">
      <div class="book-price">{{ booksData.book_price }}</div>
      <img src="/src/assets/icons/TRASH.svg" alt="" class="remove-btn" />
    </div>
  </div>
</template>

<script>
import ImgFrame from '@/components/ImgFrame.vue'
import BookCount from '@/components/BookCount.vue'

export default {
  name: 'CartBook',
  components: {
    ImgFrame,
    BookCount
  },
  props: {
    booksData: {
      type: Object,
      required: true
    }
  },
  methods: {
    increaseCount() {
      this.count++
    },
    decreaseCount() {
      if (this.count > 1) {
        this.count--
      }
    }
  }
}
</script> 

<style scoped>
.img-frame-cart {
  display: flex;
  align-items: center;
}
.component-wrapper {
  display: flex;
  flex-direction: row;
  width: 416px;
  max-height: 200px;
  padding: 25px;
  border: dashed 2px var(--gray-600);
  border-radius: 30px;
  position: relative;
}
.cart-book-info {
  position: relative;
  margin-left: 31px;
  margin-right: 50px;
  margin-top: 12px;
  display: flex;
  flex-direction: column;
  font-family: var(--syne);
  font-weight: 400;
  color: var(--gray-800);
  text-align: left;
}
.cart-book-counter {
  margin-top: 30px;
}
.book-name {
  color: var(--gray-600);
  font-size: 16px;
  margin-bottom: 12px;
}
.author-name {
  color: var(--gray-600);
  font-size: 12px;
}
.cart-book-right {
  margin-left: auto;
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: 6px;
  font-size: 20px;
  font-family: var(--syne);
  font-weight: 400;
  color: var(--orange-500);
}
.remove-btn {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 30px;
  height: 32px;
  cursor: pointer;
  transition: transform 0.2s ease;
}
.remove-btn:hover {
  transform: scale(1.3);
}
</style>