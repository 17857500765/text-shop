<template>
  <div id="app">
    <main-tab-bar class="tab-bar"></main-tab-bar>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import MainTabBar from './componments/content/maintab/MainTabBar'
export default {
  name: "App",
  components: {
    mainTabBar: MainTabBar
  }
}
</script>

<style>
  @import "./assets/css/normalize.css";
  .tab-bar{
    z-index: 99999;
  }
</style>