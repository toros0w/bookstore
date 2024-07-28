<template>
  <div class="error-container">
    <img src="/src/assets/icons/WrongGif.gif" alt="" class="wrong-gif" />
    <div class="error-title">{{ errorType }}</div>
    <div class="error-type-text">{{ errorText }}</div>
    <router-link class="error-route" to="/">
      <FreeBtn class="error-btn" text="Go back to Home" />
    </router-link>
    <div class="error-bottom">
      <div class="social-item">
        <img src="/src/assets/icons/GITHUBLOGO.svg" alt="" class="github" />
      </div>
      <div class="bottom-text">
        You are Dev? If yes, you can register one issue on github, if you want contribe to this
        project.
      </div>
    </div>
  </div>
</template>

<script>
import FreeBtn from '@/components/FreeBtn.vue'
export default {
  name: 'ErrorComponent',
  components: {
    FreeBtn
  },
  props: {
    errorType: {
      type: String
    },
    errorText: {
      type: String
    }
  }
}
</script>

<style scoped>
.error-container {
  width: 465px;
  height: 668px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
}
.wrong-gif {
  width: 300px;
  height: 300px;
}
.error-title {
  font-family: var(--unica);
  font-weight: 400;
  font-size: 34px;
  color: var(--gray-800);
  margin-bottom: 22px;
  text-transform: uppercase;
}
.error-text {
  font-family: var(--syne);
  font-weight: 400;
  font-size: 24px;
  color: var(--gray-600);
}
.error-btn {
  margin-top: 22px;
}
.error-bottom {
  margin-top: 24px;
  display: flex;
  align-items: center;
  gap: 39px;
}
.social-item {
  border-radius: 50%;
  height: 50px;
  width: 50px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  box-shadow: 5px 6px 0px 0px var(--blue-500);
  cursor: pointer;
  transition: transform 0.3s ease;
}
.social-item:hover {
  transform: scale(1.05);
}
.bottom-text {
  font-family: var(--syne);
  font-weight: 400;
  font-size: 14px;
  color: var(--gray-600);
  text-align: left;
  max-width: 300px;
}
.error-route {
  text-decoration: none;
}
</style>