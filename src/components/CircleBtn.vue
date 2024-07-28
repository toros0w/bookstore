<template>
  <div class="circle-btn"></div>
</template>

<script>
export default {
  name: 'CircleBtn'
}
</script>

<style scoped>
.circle-btn {
  height: 50px;
  width: 50px;
  background-color: var(--white);
  border: 2px solid var(--gray-800);
  border-radius: 320px;
  box-shadow: 4px 6px 0px 0px var(--blue-500);
  cursor: pointer;
  transition: background-color 0.2s linear 0.1s;
}
.circle-btn:hover {
  background-color: var(--yellow-500);
}
</style>