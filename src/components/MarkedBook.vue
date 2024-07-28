<template>
  <div class="marked-book-wrapper">
    <ImgFrame cls="marked-img-frame" :images="imgArr" />
    <div class="bookmark-item">
      <img src="/src/assets/icons/BOOKMARK_SIMPLE.svg" alt="" class="bookmark" />
    </div>
    <div class="marked-book-remove">
      <img src="/src/assets/icons/TRASH-WHITE.svg" alt="" class="remove-icon" />
    </div>
  </div>
</template>

<script>
import ImgFrame from './ImgFrame.vue'

export default {
  name: 'MarkedBook',
  components: {
    ImgFrame
  },
  props: {
    imgArr: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.marked-book-wrapper {
  position: relative;
  cursor: pointer;
  display: inline-block;
  align-items: center;
  justify-content: center;
}

.marked-img-frame {
  position: relative;
}

.bookmark-item,
.marked-book-remove {
  position: absolute;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;
}

.bookmark-item {
  display: flex;
  background-color: var(--white);
  width: 50px;
  height: 50px;
  border-radius: 10px;
  text-align: center;
  align-items: center;
  justify-content: center;
  top: 0;
  right: 0;
}

.marked-book-remove {
  display: flex;
  background-color: rgba(249, 120, 75, 0.8);
  width: 201px;
  height: 80px;
  border-radius: 10px;
  text-align: center;
  align-items: center;
  justify-content: center;
  bottom: 0;
}
.remove-icon {
  transition: transform 0.2s ease;
}
.marked-book-remove:hover .remove-icon {
  transform: scale(1.25);
}

.marked-book-wrapper:hover .bookmark-item,
.marked-book-wrapper:hover .marked-book-remove {
  opacity: 1;
  visibility: visible;
}
</style>
