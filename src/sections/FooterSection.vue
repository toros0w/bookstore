<template>
  <div class="footer-wrapper">
    <div class="footer-project-name">BookStore Project</div>
    <div class="social-wrapper">
      <div class="social-item">
        <img src="/src/assets/icons/LINKEDINLOGO.svg" alt="" class="linkedin" />
      </div>
      <div class="social-item">
        <img src="/src/assets/icons/GITHUBLOGO.svg" alt="" class="github" />
      </div>
      <div class="social-item">
        <img src="/src/assets/icons/FIGMALOGO.svg" alt="" class="linkedin" />
      </div>
    </div>
    <div class="footer-copyright">by EDT-Web</div>
  </div>
</template>

<script>
export default {
  name: 'FooterSection'
}
</script>

<style scoped>
.footer-wrapper {
  width: 1300px;
  border-top: 2px dashed var(--gray-600);
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  height: 215px;
}
.footer-project-name {
  font-size: 20px;
  font-family: var(--syne);
  font-weight: 400;
  color: var(--gray-600);
  transform: translateY(-20px);
}
.social-wrapper {
  display: flex;
  gap: 20px;
  transform: translateY(-20px);
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
.footer-copyright {
  font-size: 20px;
  font-family: var(--syne);
  font-weight: 400;
  color: var(--gray-600);
  transform: translateY(-20px);
}
</style>