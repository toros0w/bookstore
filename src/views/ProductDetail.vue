<template>
  <div class="product-container-wrapper">
    <div class="product-container">
      <HeaderWithLogo @cart-click="toggleSidebar" class="header-with-logo-section" />
      <BookDetail class="book-product" />
      <SellBookSection CategoryType="View More" class="sell-view-more" />
      <FooterSection />
      <SideBar :isActive="isSidebarActive" class="cart-side-bar" />
      <div v-if="isSidebarActive" class="overlay" @click="toggleSidebar"></div>
    </div>
  </div>
</template>

<script>
import HeaderWithLogo from '@/sections/HeaderWithLogo.vue'
import BookDetail from '@/sections/BookDetail.vue'
import SellBookSection from '@/sections/SellBookSection.vue'
import FooterSection from '@/sections/FooterSection.vue'
import SideBar from '@/components/SideBar.vue'

export default {
  name: 'ProductDetail',
  components: {
    HeaderWithLogo,
    BookDetail,
    SellBookSection,
    FooterSection,
    SideBar
  },
  data() {
    return {
      isSidebarActive: false
    }
  },
  methods: {
    toggleSidebar() {
      this.isSidebarActive = !this.isSidebarActive
      if (this.isSidebarActive) {
        document.body.style.overflow = 'hidden'
        document.body.style.paddingRight = '15px' // Замените на ширину полосы прокрутки вашего браузера
      } else {
        document.body.style.overflow = ''
        document.body.style.paddingRight = ''
      }
    }
  }
}
</script>

<style scoped>
.product-container-wrapper {
  position: relative;
}
.product-container {
  max-width: 1300px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}
.header-with-logo-section {
  margin-bottom: 20px;
}
.book-product {
  margin-bottom: 163px;
}
.sell-view-more {
  margin-bottom: 220px;
}
.cart-side-bar {
  position: fixed;
  z-index: 300;
  top: 0;
  right: -500px;
  background: #fff;
  width: 500px;
  height: 100%;
  transition: right 0.5s ease;
}
.cart-side-bar.active {
  right: 0;
}
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 250;
}
</style>
