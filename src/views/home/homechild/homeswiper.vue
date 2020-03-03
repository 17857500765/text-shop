<template>
  <div>
    <swiper>
      <swiper-item v-for = "(item ,index) in banners" :key="index" >
        <a :href="item.link">
          <img :src="item.image" @load="imgLoad">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>

import { Swiper, SwiperItem } from '../../../componments/common/swiper/index'

export default {
  name: "HomeSwiper",
  data () {
    return {
      sign: false  
    }
  },
  components: {
      Swiper,
      SwiperItem
  },
  props: {
    banners: {
      type: Array,
      default(){
        return []
      }
    }
  },
  methods: {
    imgLoad(){
      //console.log("哈哈哈");
      if(!this.sign){
        this.$emit("swiperLoad", "哈哈哈")
        this.sign = false
      }
    }
  }
}
</script>

<style>

</style>