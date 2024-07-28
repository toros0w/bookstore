<template>
  <div class="buy-book-wrapper">
    <ImgFrame cls="marked-img-frame" :images="images" />
    <div class="first-controllers">
      <PriceComponent :price="price" cls="small-price" />
      <div class="bookmark-item">
        <img src="/src/assets/icons/BOOKMARK_SIMPLE.svg" alt="" class="bookmark" />
      </div>
    </div>
    <router-link to="/404">
      <CartBtn />
    </router-link>
  </div>
</template>

<script>
import ImgFrame from '@/components/ImgFrame.vue'
import CartBtn from '@/components/CartBtn.vue'
import PriceComponent from '@/components/PriceComponent.vue'
export default {
  name: 'BookBuy',
  components: {
    ImgFrame,
    CartBtn,
    PriceComponent
  },
  props: {
    images: {
      type: Array,
      required: true
    },
    price: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.first-controllers {
  display: flex;
  justify-content: space-between;
  margin-top: 28px;
  margin-bottom: 10px;
}
.bookmark-item {
  display: flex;
  background-color: var(--white);
  width: 50px;
  height: 46px;
  border-radius: 20px;
  text-align: center;
  align-items: center;
  justify-content: center;
  top: 0;
  right: 0;
  border: 2px solid var(--gray-800);
  cursor: pointer;
  transition: background-color 0.2s ease;
}
.bookmark-item:hover {
  background-color: var(--blue-500);
}
</style>