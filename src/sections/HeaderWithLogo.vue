<template>
  <div class="header-wrapper">
    <router-link to="/">
      <img src="/src/assets/icons/LOGO.svg" alt="" class="logo" />
    </router-link>
    <div class="right-side">
      <router-link to="/favorites">
        <img
          src="/src/assets/icons/BOOKMARK_SIMPLE.svg"
          alt=""
          class="right-items"
          id="header-bookmark"
        />
      </router-link>
      <img
        src="/src/assets/icons/SHOPPING_CART.svg"
        alt=""
        class="right-items"
        id="header-cart"
        @click="handleCartClick"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderWithLogo',
  methods: {
    handleCartClick() {
      this.$emit('cart-click')
    }
  }
}
</script>

<style scoped>
.header-wrapper {
  display: flex;
  justify-content: space-between;
  height: 120px;
  align-items: center;
}
.right-side {
  display: flex;
  justify-content: space-between;
  gap: 25px;
}
.logo {
  cursor: pointer;
  transition: transform 0.3s ease;
}
.logo:hover {
  transform: scale(1.1);
}
.right-items {
  cursor: pointer;
  transition: transform 0.3s ease;
}
.right-items:hover {
  transform: scale(1.1);
}
</style>
