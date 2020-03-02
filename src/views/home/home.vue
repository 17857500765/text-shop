<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <scroll class="content" ref="scroll" :probe="2" :pullUp="true" @scroll="getScroll" @pullingUp="getPullUp">
      <home-swiper :banners='banners' ></home-swiper>
      <!-- <swiper>
        <swiper-item v-for = "item in banners">
          <a :href="item.link">
            <img :src="item.image">
          </a>
        </swiper-item>
      </swiper> -->
      <home-recomend :recommends="recommends"></home-recomend>
      <feature></feature>
      <tab-control :title="['流行','新款','精选']" class="tab-control" @tabclick="tabchange"></tab-control>
      <goods-list :goods="goods[info].list"></goods-list>
    </scroll>
    <back-top @click.native="backTop" v-show="sign"></back-top>
    <div style="padding-bottom:44px" ></div>  
  </div>
</template>
<script>
import {getHomeData, getHomeGoods} from '../../network/home'

import NavBar from '../../componments/common/navbar/NavBar'
import HomeSwiper from './homechild/homeswiper'
//import { Swiper, SwiperItem } from '../../componments/common/swiper/index'
import HomeRecomend from './homechild/homerecomend'
import Feature from './homechild/feature'
import TabControl from '../../componments/content/tabcontrol/TabControl'
import GoodsList from '../../componments/content/goods/GoodsList'
import Scroll from '../../componments/common/scroll/Scroll'
import BackTop from '../../componments/content/backtop/BackTop'

export default {
  name: "home",
  data () {
    return {
      banners: [],
      recommends: [],
      goods: {
        "pop": {page: 0, list: []},
        "new": {page: 0, list: []},
        "sell": {page: 0, list: []},
      },
      info: 'pop',
      sign: false
    }
  },
  components: {
    NavBar,
    HomeSwiper,
    HomeRecomend,
    Feature,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
    // Swiper,
    // SwiperItem
  },
  created () {

    this.getHomeData()  
    this.getHomeGoods("pop")
    this.getHomeGoods("new")
    this.getHomeGoods("sell")
  },
  methods: {
    getHomeData(){
      getHomeData().then(res =>{
        this.banners = res.data.data.banner.list
        this.recommends = res.data.data.recommend.list
      })
    },
    getHomeGoods(type){
      const page = this.goods[type].page + 1
      getHomeGoods(type, page).then(res =>{
        this.goods[type].list.push(...res.data.data.list)
        this.goods[type].page+=1
      })
    },
    tabchange(index){
      switch(index){
        case 0:
          this.info = "pop"
          break
        case 1:
          this.info = "new"
          break
        case 2:
          this.info = "sell"
          break
      }
    },
    backTop(){
      this.$refs.scroll.scroll.scrollTo(0, 0, 500)
    },
    getScroll(info){
      this.sign = (-info.y) > 1000
    },
    getPullUp(){
      this.$refs.scroll.scroll.refresh()
      this.getHomeGoods(this.info)
    }
    
  }

}

</script>

<style scoped>
  #home{
    padding-top: 44px;
    height: 100vh;
    position: relative;
  }
  .home-nav{
    /* background-color: var(--color-tint); */
    background-color: #ff5777;
    color: white;
    position: fixed;
    left: 0px;
    right: 0px;
    top: 0px;
    z-index: 9;
  }
  .tab-control{
    position:sticky;
    top:44px;
    background-color: white;
    z-index: 9;
  }
  .content{
    position: absolute;
    top: 44px;
    bottom: 49px;
  }
</style>