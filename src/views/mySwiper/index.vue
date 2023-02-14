
<template>
  <swiper
    :modules="modules"
    :slides-per-view="2"
    :space-between="50"
    :navigation="false"
    :pagination="{ clickable: true }"
    :scrollbar="{ draggable: true }"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <swiper-slide v-for="(item, index) in virtual_data.data" :key="index">
      <slide-item :slideItem="item"></slide-item
    ></swiper-slide>
  </swiper>
</template>

<script>
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'

// Import Swiper Vue.js components

import { Swiper, SwiperSlide } from 'swiper/vue';
// Import Swiper styles
import 'swiper/swiper.min.css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// virtual data
import virtual_data from './virtual_data.json'
import slide_item from './slide_item.vue'

/**
 * 如果嫌麻烦可以把上面的全部样式都删了，直接用总的
 * bundle：所有 Swiper 样式，包括所有模块样式（如导航、分页等）
 */
// import "swiper/swiper-bundle.min.css";

// Import Swiper styles
export default {
  components: {
    Swiper,
    SwiperSlide,
    SlideItem: slide_item,
  },
  setup() {
    const onSwiper = (swiper) => {
      // console.log(swiper);
    }
    const onSlideChange = () => {
      console.log('slide change')
    }
    console.log('-----:', virtual_data)
    return {
      virtual_data,
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination, Scrollbar, A11y],
    }
  },
}
</script>
<style lang="less" scoped>
.swiper-slide {
  padding: 20px 20px 20px 0;
  font-size: 30px;
  background-color: pink;
  margin: 0 !important;
}
</style>