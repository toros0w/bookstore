<template>
  <div class="success-container">
    <HeaderWithLogo />
    <div class="success-details">
      <img src="/assets/icons/success.gif" alt="" class="success-img" />
      <div class="success-title">Thank you for your order!</div>
      <div class="success-text">Check your e-mail inbox for the receipt</div>
      <router-link class="success-router" to="/">
        <FreeBtn
          class="success-btn"
          img="/src/assets/icons/SHOPPING_CART.svg"
          text="Continue Shopping"
        />
      </router-link>
    </div>
  </div>
</template>

<script>
import HeaderWithLogo from '@/sections/HeaderWithLogo.vue'
import FreeBtn from '@/components/FreeBtn.vue'

export default {
  name: 'SuccessPage',
  components: {
    HeaderWithLogo,
    FreeBtn
  }
}
</script>

<style scoped>
.success-details {
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
}
.success-img {
  width: 300px;
  height: 300px;
}
.success-title {
  font-family: var(--unica);
  font-weight: 400;
  font-size: 34px;
  color: var(--gray-800);
  text-transform: uppercase;
}
.success-text {
  font-family: var(--syne);
  font-weight: 400;
  font-size: 24px;
  color: var(--gray-600);
  margin-top: 22px;
}
.success-btn {
  margin-top: 42px;
}
.success-router {
  text-decoration: none;
}
</style>