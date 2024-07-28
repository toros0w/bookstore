<template>
  <div :class="cls">
    <div class="price">{{ price }}</div>
  </div>
</template>

<script>
export default {
  name: 'PriceComponent',
  props: {
    cls: {
      type: String,
      default: 'standard-price'
    },
    price: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.standard-price {
  width: 200px;
  height: 46px;
  color: var(--gray-800);
  font-weight: 400;
  font-family: var(--syne);
  font-size: 24px;
  border: 2px solid var(--gray-800);
  border-radius: 30px;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  user-select: none;
}
.small-price {
  width: 136px;
  height: 46px;
  color: var(--gray-800);
  font-weight: 400;
  font-family: var(--syne);
  font-size: 24px;
  border: 2px solid var(--gray-800);
  border-radius: 30px;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  user-select: none;
}
</style>