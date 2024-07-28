<template>
  <div class="not-found-error">
    <ErrorComponent
      errorType="Opps! This page don’t exist"
      errorText="Please, return to one page existent"
    />
  </div>
</template>
<script>
import ErrorComponent from '@/components/ErrorComponent.vue'
export default {
  name: 'ErrorNotFound',
  components: {
    ErrorComponent
  }
}
</script>

.<style scoped>
.not-found-error {
  display: flex;
  justify-content: center;
}
</style>