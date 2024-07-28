<template>
  <div class="index-container">
    <HeaderWithLogo @cart-click="toggleSidebar" class="header-with-logo-section" />
    <MainHeader class="main-header-section" />
    <TrendingBooks class="trending-books-section" />
    <CategorySection class="category-section" />
    <SellBookSection CategoryType="Romance" class="sell-romance" />
    <SellBookSection CategoryType="Adventure" class="sell-adventures" />
    <FooterSection />
    <SideBar :isActive="isSidebarActive" class="cart-side-bar" />
    <div v-if="isSidebarActive" class="overlay" @click="toggleSidebar"></div>
  </div>
</template>

<script>
import HeaderWithLogo from '@/sections/HeaderWithLogo.vue'
import MainHeader from '@/sections/MainHeader.vue'
import TrendingBooks from '@/sections/TrendingBooks.vue'
import CategorySection from '@/sections/CategorySection.vue'
import SellBookSection from '@/sections/SellBookSection.vue'
import FooterSection from '@/sections/FooterSection.vue'
import SideBar from '@/components/SideBar.vue'

export default {
  name: 'IndexPage',
  components: {
    HeaderWithLogo,
    MainHeader,
    TrendingBooks,
    CategorySection,
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
        document.body.style.paddingRight = '15px'
      } else {
        document.body.style.overflow = ''
        document.body.style.paddingRight = ''
      }
    }
  }
}
</script>

<style scoped>
.index-container {
  max-width: 1300px;
  margin: 0 auto;
  position: relative;
}
.header-with-logo-section {
  margin-bottom: 20px;
}
.main-header-section {
  margin-bottom: 200px;
}
.trending-books-section {
  margin-bottom: 220px;
}
.category-section {
  margin-bottom: 220px;
}
.sell-romance {
  margin-bottom: 85px;
}
.sell-adventures {
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
