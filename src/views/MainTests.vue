<template>
  <div class="container">
    <!-- <CategoryBtn :CategoryText="CategoryText" /> -->
    <!-- <ExploreBtn /> -->
    <!-- <CartBtn /> -->
    <!-- <FavoriteBtn /> -->
    <!-- <CircleBtn /> -->
    <!-- <FreeBtn :text="'AnyBtn'" /> -->
    <!-- <FreeBtnBack :text="'Btn2'" /> -->
    <!-- <CustomSelect v-model="selectedValue" :options="options" /> -->
    <!-- <SearchInput /> -->
    <!-- <FilterSelect v-model="selectedValue" :options="options" /> -->
    <!-- <CartBook /> -->
    <!-- <MarkedBook /> -->
    <!-- <BookBuy /> -->
    <!-- <BannerDash :text="txt" cls="banner-dash-bg" /> -->
    <!-- <HeaderWithLogo /> -->
    <!-- <MainHeader /> -->
    <!-- <TrendingBooks />
    <CategorySection /> -->
    <!-- <SellBookSection CategoryType="Romance" /> -->
    <!-- <SellBookSection CategoryType="Adventure" />
    <FooterSection /> -->
    <BookDetail />
  </div>
</template>
<script>
// import CategoryBtn from '@/components/CategoryBtn.vue'
// import ExploreBtn from '@/components/ExploreBtn.vue'
// import CartBtn from '@/components/CartBtn.vue'
// import FavoriteBtn from '@/components/FavoriteBtn.vue'
// import CircleBtn from '@/components/CircleBtn.vue'
// import FreeBtn from '@/components/FreeBtn.vue'
// import FreeBtnBack from '@/components/FreeBtnBack.vue'
// import CustomSelect from '@/components/CustomSelect.vue'
// import SearchInput from '@/components/SearchInput.vue'
// import FilterSelect from '@/components/FilterSelect.vue'
// import CartBook from '@/components/CartBook.vue'
// import MarkedBook from '@/components/MarkedBook.vue'
// import BookBuy from '@/components/BookBuy.vue'
// import BannerDash from '@/components/BannerDash.vue'
// import HeaderWithLogo from '@/sections/HeaderWithLogo.vue'
// import MainHeader from '@/sections/MainHeader.vue'
// import TrendingBooks from '@/sections/TrendingBooks.vue'
// import CategorySection from '@/sections/CategorySection.vue'
// import SellBookSection from '@/sections/SellBookSection.vue'
// import FooterSection from '@/sections/FooterSection.vue'
import BookDetail from '@/sections/BookDetail.vue'

export default {
  name: 'MainTests',
  components: {
    // CategoryBtn,
    // ExploreBtn
    // CartBtn
    // FavoriteBtn
    // CircleBtn
    // FreeBtn,
    // FreeBtnBack,
    // CustomSelect
    // SearchInput
    // FilterSelect
    // CartBook
    // MarkedBook
    // BookBuy
    // BannerDash
    // HeaderWithLogo
    // MainHeader
    // TrendingBooks,
    // CategorySection,
    // SellBookSection,
    // FooterSection
    BookDetail
  },
  data() {
    return {
      CategoryText: 'Adventures',
      selectedValue: null,
      options: [
        { value: '1', label: 'Option 1' },
        { value: '2', label: 'Option 2' },
        { value: '3', label: 'Option 3' }
      ],
      txt: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
      // romance: {
      //   img: '/src/assets/icons/PATH.svg',
      //   text: 'Romance'
      // },
      // adventure: {
      //   img: '/src/assets/icons/PATH.svg',
      //   text: 'Adventure'
      // }
    }
  }
}
</script>

<style scoped>
.container {
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  row-gap: 100px;
  align-items: center;
  justify-content: center;
  /* background-color: var(--blue-500); */
  height: 100vh;
  width: 1300px;
}
</style>