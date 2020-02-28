<template>
  <div>
    <tab-bar>
     <tab-bar-item path="/home" >
       <img slot='photo' src="../../../assets/img/tabbar/home.svg" >  
       <img slot='photo_active' src="../../../assets/img/tabbar/home_active.svg">
       <div slot='text' >首页</div>
     </tab-bar-item>
     <tab-bar-item path="/about" >
       <img slot='photo' src="../../../assets/img/tabbar/category.svg" >
       <img slot='photo_active' src="../../../assets/img/tabbar/category_active.svg">
       <div slot='text' >关于</div>
     </tab-bar-item>
     <tab-bar-item path="/shop">
       <img slot='photo' src="../../../assets/img/tabbar/cart.svg" >
       <img slot='photo_active' src="../../../assets/img/tabbar/cart_active.svg">
       <div slot='text' >购物</div>
     </tab-bar-item>
     <tab-bar-item path="/profile">
       <img slot='photo' src="../../../assets/img/tabbar/profile.svg" >
       <img slot='photo_active' src="../../../assets/img/tabbar/profile_active.svg">
       <div slot='text' >我的</div>
     </tab-bar-item>
   </tab-bar>
  </div>
</template>

<script>
import TabBar from '../../common/tabbar/TabBar'
import TabBarItem from '../../common/tabbar/TabBarItem'
export default {
  name: "mainTabBar",
  components: {
    tabBar: TabBar,
    tabBarItem: TabBarItem
  }
}
</script>

<style>

</style>