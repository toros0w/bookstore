<template>
  <div :class="['custom-select-wrapper', { open: isOpen }]" @click="toggleDropdown">
    <div class="selected-option">
      {{ selectedOption ? selectedOption.label : 'Categories' }}
      <img src="/src/assets/icons/CARET_DOWN.svg" alt="" class="custom-sellect-arrow" />
    </div>
    <div v-if="isOpen" class="options">
      <div
        v-for="option in options"
        :key="option.value"
        class="option"
        @click="selectOption(option)"
      >
        {{ option.label }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CustomSelect',
  props: {
    options: {
      type: Array,
      required: false
    },
    modelValue: {
      type: [String, Number, Object, null],
      default: null
    }
  },
  data() {
    return {
      isOpen: false,
      selectedOption: null
    }
  },
  watch: {
    modelValue: {
      immediate: true,
      handler(newValue) {
        this.selectedOption = this.options.find((option) => option.value === newValue) || null
      }
    }
  },
  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen
    },
    selectOption(option) {
      this.selectedOption = option
      this.isOpen = false
      this.$emit('update:modelValue', option.value)
    }
  }
}
</script>

<style scoped>
.custom-select-wrapper {
  position: relative;
  width: 302px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.2s linear 0.1s;
  font-family: var(--syne);
  font-weight: 400;
  color: var(--gray-800);
  font-size: 16px;
}

.custom-select-wrapper:hover .selected-option {
  background-color: var(--yellow-500);
}
.custom-select-wrapper::after {
  content: '';
  width: 100%;
  height: 50px;
  background: var(--orange-500);
  border-radius: 20px;
  position: absolute;
  top: 7px;
  left: 6px;
  z-index: -1;
}

.selected-option {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px 0 30px;
  cursor: pointer;
  width: 100%;
  height: 50px;
  z-index: 5;
  background: #fff;
  border-radius: 20px;
  border: 2px solid var(--gray-800);
  overflow: hidden;
  transition: background-color 0.2s ease;
}

.options {
  position: absolute;
  top: 100%;
  min-width: 302px;
  background-color: #fff;
  border-right: 2px solid var(--gray-800);
  border-left: 2px solid var(--gray-800);
  border-bottom: 2px solid var(--gray-800);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  padding-top: 35px;
  z-index: 1;
  margin-top: -25px;
  transition: all 0.3s ease-in-out;
}
.custom-select-wrapper.open .options {
  max-height: 200px;
  opacity: 1;
}

.option {
  cursor: pointer;
  display: flex;
  justify-content: left;
  padding-left: 22px;
  align-items: center;
  height: 45px;
  background-color: var(--white);
  transition: background-color 0.2s ease;
}

.custom-select-wrapper.open .selected-option {
  background-color: var(--yellow-500);
}

.option:hover {
  background-color: var(--blue-500);
  border-top: 2px solid var(--gray-800);
  border-bottom: 2px solid var(--gray-800);
}

.option:last-child {
  border-bottom-color: transparent;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
}
</style>
