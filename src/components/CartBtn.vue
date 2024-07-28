<template>
  <div :class="['cart-btn', { loading: isLoading }]" @click="handleClick">
    <img
      src="/src/assets/icons/SHOPPING_CART.svg"
      class="cart-btn-icon"
      :style="{ display: isLoading ? 'none' : 'block' }"
    />
    <img
      src="/src/assets/icons/LOADER_BUTTON.svg"
      class="cart-btn-load-icon"
      :style="{ display: isLoading ? 'block' : 'none' }"
    />
  </div>
</template>

<script>
export default {
  name: 'CartBtn',
  data() {
    return {
      isLoading: false
    }
  },
  methods: {
    handleClick() {
      this.isLoading = true
      setTimeout(() => {
        this.isLoading = false
      }, 2000)
    }
  }
}
</script>

<style scoped>
.cart-btn {
  height: 46px;
  width: 200px;
  background-color: var(--yellow-500);
  font-family: var(--syne);
  font-weight: 400;
  color: var(--gray-800);
  font-size: 16px;
  border: 2px solid var(--gray-800);
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.2s linear 0.1s;
}
.cart-btn:hover:not(.loading) {
  background-color: var(--orange-500);
}
.cart-btn.loading {
  background-color: var(--orange-500);
}
.cart-btn-load-icon {
  display: none;
  animation: rotate 1s linear infinite;
}
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
