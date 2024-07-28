<template>
  <div :class="['sidebar-wrapper', { active: isActive }]">
    <div class="cart-title">
      <img src="/src/assets/icons/CARET_LEFT.svg" alt="" class="cart-img" />
      <div class="cart-title-text">Your Cart</div>
      <div class="cart-title-count">({{ cartItemCount }} items)</div>
    </div>
    <div class="cart-book-item">
      <CartBook
        v-for="(book, index) in oncart"
        :key="index"
        :booksData="book"
        class="side-bar-item"
      />
    </div>
    <div class="total-books-wrapper">
      <div class="total-text">Subtotal:</div>
      <div class="total-price">{{ formattedTotalPrice }}</div>
      <router-link to="/success" class="slide-bar-buy">
        <FreeBtnBack class="cart-free-btn" text="Pay with stripe" />
      </router-link>
    </div>
  </div>
</template>

<script>
import CartBook from '@/components/CartBook.vue'
import FreeBtnBack from '@/components/FreeBtnBack.vue'
// import accounting from 'accounting-js'

export default {
  name: 'SideBar',
  props: {
    isActive: {
      type: Boolean,
      required: true
    }
  },
  components: {
    CartBook,
    FreeBtnBack
  },
  data() {
    return {
      oncart: [
        {
          book_name: 'Dune',
          author: 'Frank Herbert',
          book_img: '/src/assets/img/adventure/book1.jpg',
          book_price: '$22.99',
          count: '1'
        },
        {
          book_name: 'Truth or date',
          author: 'Sophie McKenzie',
          book_img: '/src/assets/img/book4.jpg',
          book_price: '$34.99',
          count: '1'
        },
        {
          book_name: 'Heart bones',
          author: 'Colleen Hoover',
          book_img: '/src/assets/img/romance/book1.jpg',
          book_price: '$19.99',
          count: '1'
        }
      ]
    }
  },
  computed: {
    cartItemCount() {
      return this.oncart.length
    },
    totalPrice() {
      return this.oncart
        .reduce((total, book) => {
          const price = parseFloat(book.book_price.replace('$', ''))
          return total + price * parseInt(book.count)
        }, 0)
        .toFixed(2)
    },
    formattedTotalPrice() {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      }).format(this.totalPrice)
    }
  }
}
</script>

<style scoped>
.slide-bar-buy {
  text-decoration: none;
}
.sidebar-wrapper {
  width: 486px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: fixed;
  top: 0;
  right: -500px;
  background: #fff;
  transition: right 0.5s ease;
  z-index: 300;
  padding: 25px;
}
.sidebar-wrapper.active {
  right: 0;
}
.cart-title {
  display: flex;
  align-items: center;
  margin-bottom: 33px;
}
.cart-title-text {
  margin-left: 10px;
  font-family: var(--syne);
  font-size: 16px;
  font-weight: 500;
  color: var(--gray-800);
}
.cart-title-count {
  margin-left: 10px;
  font-family: var(--syne);
  font-size: 16px;
  font-weight: 500;
  color: var(--blue-500);
}
.cart-book-item {
  width: 100%;
}
.side-bar-item {
  margin-bottom: 14px;
}
.total-books-wrapper {
  border-left: 2px solid var(--gray-800);
  border-top: 2px solid var(--gray-800);
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  text-align: center;
  padding: 20px;
  border-top-left-radius: 20px;
  bottom: 0;
  left: 0;
  position: absolute;
}
.total-text {
  font-family: var(--syne);
  font-size: 24px;
  font-weight: 500;
  color: var(--gray-800);
}
.total-price {
  font-family: var(--syne);
  font-size: 24px;
  font-weight: 500;
  color: var(--gray-800);
  width: 142px;
  height: 50px;
  border: 2px solid var(--gray-800);
  border-radius: 20px;
  background-color: var(--yellow-500);
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
}
.cart-free-btn {
  height: 50px;
  margin-top: 38px;
  margin-left: 20px;
}
</style>
