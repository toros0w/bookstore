<template>
  <div class="book-count-wrapper">
    <img src="/src/assets/icons/MINUS_CIRCLE.svg" alt="" class="min-btn" @click="decreaseCount" />
    <div class="count">{{ count.toString().padStart(2, '0') }}</div>
    <img src="/src/assets/icons/PLUS_CIRCLE.svg" alt="" class="plus-btn" @click="increaseCount" />
  </div>
</template>

<script>
export default {
  name: 'BookCount',
  data() {
    return {
      count: 1
    }
  },
  methods: {
    increaseCount() {
      this.count++
    },
    decreaseCount() {
      if (this.count > 1) {
        this.count--
      }
    }
  }
}
</script>

<style scoped>
.book-count-wrapper {
  display: flex;
  /* position: absolute; */
  align-items: center;
  bottom: 0;
}
.min-btn {
  width: 16px;
  height: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor: pointer;
  transition: transform 0.1s ease;
}
.min-btn:hover {
  transform: scale(1.3);
}
.count {
  width: 52px;
  height: 35px;
  border-radius: 10px;
  border: 2px solid var(--gray-800);
  font-size: 20px;
  font-family: var(--syne);
  font-weight: 400;
  color: var(--gray-800);
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  margin-right: 10px;
  margin-left: 10px;
  user-select: none;
}
.plus-btn {
  width: 16px;
  height: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor: pointer;
  transition: transform 0.2s ease;
}
.plus-btn:hover {
  transform: scale(1.3);
}
</style>