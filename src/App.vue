<template>
  <div id="app">
    <main-tab-bar></main-tab-bar>
    <router-view></router-view>
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
</style>