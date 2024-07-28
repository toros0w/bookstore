<template>
  <div class="header-wrapper">
    <div class="header-search">
      <h1 class="header-search-title">
        What book you <br />
        looking for?
        <img src="/src/assets/icons/book-gif.svg" alt="" class="title-icon" />
      </h1>
      <p class="header-search-text">Explore our catalog and find your next read.</p>
      <SearchInput class="header-input" />
      <div class="header-search-bottom">
        <router-link to="/catalog" class="main-explore-btn">
          <ExploreBtn />
        </router-link>
        <div class="line"></div>
      </div>
    </div>
    <div class="header-photo-wrapper">
      <img src="/public/assets/img/main-img.jpg" alt="" class="header-photo" />
    </div>
  </div>
</template>

<script>
import SearchInput from '@/components/SearchInput.vue'
import ExploreBtn from '@/components/ExploreBtn.vue'
export default {
  name: 'MainHeader',
  components: {
    SearchInput,
    ExploreBtn
  }
}
</script>

<style scoped>
.main-explore-btn {
  text-decoration: none;
}
.header-wrapper {
  width: 1300px;
  height: 538px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header-search {
  max-width: 525px;
}
.header-search-title {
  font-size: 64px;
  font-family: var(--syne);
  font-weight: 400;
  color: var(--gray-800);
  position: relative;
}
.title-icon {
  position: absolute;
  top: 60px;
}
.header-search-text {
  margin-top: 16px;
  font-size: 16px;
  font-family: var(--syne);
  font-weight: 500;
  color: var(--gray-600);
}
.header-input {
  margin-top: 35px;
}
.header-search-bottom {
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  margin-top: 34px;
}
.line {
  border-bottom: 2px dashed var(--gray-600);
  width: 353px;
}
.header-photo-wrapper {
  box-shadow: -43px -36px 0px 0px var(--blue-500);
  border-bottom-left-radius: 20px;
  border-top-right-radius: 20px;
}
.header-photo {
  max-width: 484px;
  max-height: 503px;
  border-bottom-left-radius: 20px;
  border-top-right-radius: 20px;
  border: 2px solid var(--gray-800);
}
</style>