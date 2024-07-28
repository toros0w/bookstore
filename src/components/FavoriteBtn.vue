<template>
  <div :class="['favorite-btn', { active: isActive }]" @click="handleClick">
    <img
      src="/src/assets/icons/BOOKMARK_SIMPLE.svg"
      alt=""
      class="favorite-btn-icon"
      :style="{ display: isLoading ? 'none' : 'block' }"
    />
    <img
      src="/src/assets/icons/LOADER_BUTTON.svg"
      alt=""
      class="favorite-btn-load-icon"
      :style="{ display: isLoading ? 'block' : 'none' }"
    />
  </div>
</template>

<script>
export default {
  name: 'FavoriteBtn',
  data() {
    return {
      isLoading: false,
      isActive: false
    }
  },
  methods: {
    handleClick() {
      this.isLoading = true
      this.isActive = !this.isActive
      setTimeout(() => {
        this.isLoading = false
      }, 200)
    }
  }
}
</script>

<style scoped>
.favorite-btn {
  height: 46px;
  width: 57px;
  background-color: var(--white);
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
.favorite-btn.active {
  background-color: var(--blue-500);
}
.favorite-btn-load-icon {
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