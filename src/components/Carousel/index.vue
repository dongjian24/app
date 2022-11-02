<template>
  <div class="swiper-container" ref="swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="carousel in list" :key="carousel.id">
        <img :src="carousel.imgUrl" alt="" />
      </div>
    </div>
    <div class="swiper-pagination"></div>

    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>
    
    <script>
import Swiper from "swiper";
export default {
  name: "MyCarousel",
  props: ["list"],
  watch: {
    list: {
      //立即监听 不管数据有没有变化 上来立即监听一次
      //为什么watch监听不到list 因为这个数据没有变过 数据是父亲给的 父亲给的数据是一个对象 对象里该有的数据都有
      immediate: true,
      handler() {
        this.$nextTick(() => {
          new Swiper(this.$refs.swiper, {
            loop: true, // 循环模式选项

            // 如果需要分页器
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },

            // 如果需要前进后退按钮
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
          });
        });
      },
    },
  },
};
</script>
    
    <style>
        
</style>
    