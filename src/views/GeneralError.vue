<template>
  <div class="general-error">
    <ErrorComponent
      errorType="Something went wrong"
      errorText="Please, refresh the page or try again later"
    />
  </div>
</template>
<script>
import ErrorComponent from '@/components/ErrorComponent.vue'
export default {
  name: 'GeneralError',
  components: {
    ErrorComponent
  }
}
</script>

<style scoped>
.general-error {
  display: flex;
  justify-content: center;
}
</style>