<template>
  <div>
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners='banners'></home-swiper>
    <!-- <swiper>
      <swiper-item v-for = "item in banners">
        <a :href="item.link">
          <img :src="item.image">
        </a>
      </swiper-item>
    </swiper> -->
    <home-recomend :recommends="recommends"></home-recomend>

    
  </div>
</template>
<script>
import {getHomeData} from '../../network/home'

import HomeSwiper from './homechild/homeswiper'
//import { Swiper, SwiperItem } from '../../componments/common/swiper/index'
import NavBar from '../../componments/common/navbar/NavBar'
import HomeRecomend from './homechild/homerecomend';


export default {
  name: "home",
  data () {
    return {
      banners: [],
      recommends: []
    }
  },
  components: {
    NavBar,
    HomeSwiper,
    HomeRecomend
    // Swiper,
    // SwiperItem
  },
  created () {
    getHomeData().then(res =>{
      this.banners = res.data.data.banner.list
      this.recommends = res.data.data.recommend.list
    })
  }
}

</script>

<style scoped>
  .home-nav{
    /* background-color: var(--color-tint); */
    background-color: #ff5777;
    color: white;
  }
</style>