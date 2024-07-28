<template>
  <div class="free-btn">{{ text }}</div>
</template>

<script>
export default {
  name: 'FreeBtn',
  props: {
    text: {
      type: String,
      required: false
    }
  }
}
</script>

<style scoped>
.free-btn {
  width: 420px;
  height: 50px;
  border: 2px solid var(--gray-800);
  border-radius: 20px;
  background-color: var(--yellow-500);
  transition: background-color 0.2s linear 0.1s;
  font-family: var(--syne);
  font-weight: 400;
  color: var(--gray-800);
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.free-btn:hover {
  background-color: var(--orange-500);
}
</style>