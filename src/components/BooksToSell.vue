<template>
  <div class="books-wrapper">
    <div v-for="(book, index) in selectedBooks" :key="index">
      <BookBuy class="book-item" :images="[book.img]" :price="book.price" />
    </div>
  </div>
</template>

<script>
import BookBuy from '@/components/BookBuy.vue'
export default {
  name: 'BooksToSell',
  components: {
    BookBuy
  },
  props: {
    category: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      books: [
        { img: '/src/assets/img/romance/book1.jpg', price: '$19,99' },
        { img: '/src/assets/img/romance/book2.jpg', price: '$29,99' },
        { img: '/src/assets/img/romance/book3.jpg', price: '$11,99' },
        { img: '/src/assets/img/romance/book4.jpg', price: '$84,00' },
        { img: '/src/assets/img/romance/book5.jpg', price: '$18,00' }
      ],
      adventure: [
        { img: '/src/assets/img/adventure/book1.jpg', price: '$22,99' },
        { img: '/src/assets/img/adventure/book2.jpeg', price: '$16,99' },
        { img: '/src/assets/img/adventure/book3.jpg', price: '$37,99' },
        { img: '/src/assets/img/adventure/book4.jpg', price: '$11,99' },
        { img: '/src/assets/img/adventure/book5.jpg', price: '$28,99' }
      ],
      viewMore: [
        { img: '/src/assets/img/book3.jpg', price: '$22,99' },
        { img: '/src/assets/img/adventure/book2.jpeg', price: '$16,99' },
        { img: '/src/assets/img/romance/book3.jpg', price: '$37,99' },
        { img: '/src/assets/img/adventure/book4.jpg', price: '$11,99' },
        { img: '/src/assets/img/book5.jpg', price: '$28,99' }
      ]
    }
  },
  computed: {
    selectedBooks() {
      if (this.category.toLowerCase() === 'romance') {
        return this.books
      } else if (this.category.toLowerCase() === 'adventure') {
        return this.adventure
      } else if (this.category.toLocaleLowerCase() === 'view more') {
        return this.viewMore
      } else {
        return this.viewMore
      }
    }
  }
}
</script>

<style scoped>
.books-wrapper {
  display: flex;
  gap: 75px;
}
.book-item {
  transition: transform 0.3s ease;
}
.book-item:hover {
  transform: scale(1.04);
}
</style>