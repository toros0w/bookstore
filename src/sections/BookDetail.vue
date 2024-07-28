<template>
  <div class="book-details-wrapper">
    <ImgFrame :images="images" cls="book-info-frame" />
    <div class="details-wrapper">
      <div class="detail-top">
        <h1 class="detail-title">Things i wanted to say</h1>
        <div class="bookmark-wrapper">
          <img src="/src/assets/icons/BOOKMARK_SIMPLE.svg" alt="" class="book-bookmark" />
        </div>
      </div>
      <BannerDash text="Author: Monica Murphy" cls="banner-dash-bg" class="banner-small" />
      <BannerDash
        class="banner-big"
        cls="banner-dash-bg"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
      />
      <div class="price-count">
        <div class="book-price">$30,00</div>
        <BookCount />
      </div>
      <div class="detail-buttons">
        <CartBtn class="details-cart-btn" />
        <FreeBtnBack text="Buy" class="free-buy-btn" />
      </div>
    </div>
  </div>
</template>

<script>
import ImgFrame from '@/components/ImgFrame.vue'
import BannerDash from '@/components/BannerDash.vue'
import CartBtn from '@/components/CartBtn.vue'
import FreeBtnBack from '@/components/FreeBtnBack.vue'
import BookCount from '@/components/BookCount.vue'
export default {
  name: 'BookDetail',
  components: {
    ImgFrame,
    BannerDash,
    CartBtn,
    FreeBtnBack,
    BookCount
  },
  data() {
    return {
      images: ['/src/assets/img/romance/book4.jpg']
    }
  }
}
</script>

<style scoped>
.book-details-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 960px;
  margin: 0 auto;
}
.detail-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
}
.detail-title {
  text-transform: uppercase;
  font-family: var(--unica);
  font-size: 36px;
  font-weight: 400;
  color: var(--gray-800);
}
.bookmark-wrapper {
  border-radius: 20px;
  border: 1px solid black;
  width: 57px;
  height: 46px;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  transition: background-color 0.3s ease;
  cursor: pointer;
}
.bookmark-wrapper:hover {
  background-color: var(--blue-500);
}
.banner-small {
  padding: 22px;
  margin-top: 18px;
}
.banner-big {
  margin-top: 21px;
}
.book-price {
  font-family: var(--syne);
  font-size: 36px;
  font-weight: 400;
  color: var(--orange-500);
}
.price-count {
  display: flex;
  text-align: center;
  justify-content: space-between;
  margin-top: 50px;
}
.detail-buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 23px;
}
.details-cart-btn {
  max-height: 45px;
  width: 255px;
}
.free-buy-btn {
  max-height: 45px;
  width: 255px;
}
</style>