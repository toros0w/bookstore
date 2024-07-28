<template>
  <div v-for="(img, index) in images" :key="index">
    <img :class="cls" :src="img" alt="" />
  </div>
</template>

<script>
export default {
  name: 'ImgFrame',
  props: {
    images: {
      type: Array,
      required: true
    },
    cls: {
      type: String,
      required: true,
      default: 'search-img-frame'
    }
  }
}
</script>

<style scoped>
.search-img-frame {
  width: 80px;
  height: 120px;
  box-shadow: 10px 12px 10px -6px rgba(0, 0, 61, 0.36);
  border-radius: 10px;
}
.marked-img-frame {
  width: 200px;
  height: 298px;
  box-shadow: 10px 12px 10px -6px rgba(0, 0, 61, 0.36);
  border-radius: 10px;
}
.show-img-frame {
  width: 187px;
  height: 278px;
  box-shadow: 10px 12px 10px -6px rgba(0, 0, 61, 0.36);
  border-radius: 10px;
  cursor: pointer;
  transition: transform 0.3s ease;
}
.show-img-frame:hover {
  transform: scale(1.15);
}
.book-info-frame {
  width: 280px;
  height: 417px;
  box-shadow: 10px 12px 10px -6px rgba(0, 0, 61, 0.36);
  border-radius: 10px;
}
</style>