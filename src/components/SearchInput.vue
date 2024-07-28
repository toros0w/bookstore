<template>
  <div class="search-wrapper">
    <div class="input-wrapper" @click.stop>
      <input
        @focus="searchDropdown"
        @input="onInput"
        @blur="closeDropdown"
        type="text"
        placeholder="Type the name of book or author..."
        class="main-input"
      />
      <img src="/src/assets/icons/MAGNIFYING_GLASS.svg" alt="" class="search-btn" />
    </div>
    <div :class="isOpen ? 'search-books active' : 'search-books'">
      <div class="search-book-list">
        <SearchBooks />
      </div>
    </div>
  </div>
</template>

<script>
import SearchBooks from '@/components/SearchBooks.vue'
export default {
  name: 'SearchInput',
  components: {
    SearchBooks
  },
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    searchDropdown() {
      this.isOpen = true
    },
    closeDropdown() {
      setTimeout(() => {
        this.isOpen = false
      }, 200)
    },
    onInput() {}
  }
}
</script>

<style scoped>
.search-btn {
  position: absolute;
  right: 20px;
  z-index: 3;
  user-select: none;
  cursor: pointer;
}
.search-wrapper {
  position: relative;
  display: flex;
  justify-content: left;
}
.input-wrapper {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: vertical-text;
  transition: background-color 0.2s linear 0.1s;
  font-family: var(--syne);
  font-weight: 400;
  color: var(--gray-800);
  font-size: 16px;
}
.main-input {
  width: 530px;
  height: 42px;
  border: 2px solid var(--gray-800);
  border-radius: 20px;
  padding: 0 30px 0 30px;
  outline: none;
  z-index: 2;
}
.input-wrapper::after {
  content: '';
  width: 100%;
  height: 50px;
  background: var(--yellow-500);
  border-radius: 30px;
  position: absolute;
  top: 2px;
  left: 3px;
  z-index: -1;
}
.search-books {
  position: absolute;
  max-height: 0;
  top: 40%;
  background-color: #fff;
  border-right: 2px solid var(--gray-800);
  border-left: 2px solid var(--gray-800);
  border-bottom: 2px solid var(--gray-800);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  padding-top: 10px;
  z-index: 1;
  transition: max-height 0.3s ease-in-out, opacity 0.3s ease-in-out;
  overflow: hidden;
  opacity: 0;
}
.search-books.active {
  max-height: 200px;
  opacity: 1;
}
</style>
