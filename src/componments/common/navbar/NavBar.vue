<template>
  <div class="navBar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style>
  .navBar{
    display: flex;
    text-align: center;
    line-height: 44px;
    font-size: 25px;
    box-shadow: 0 1px 1px rgba(100, 100, 100, .1)
  }

  .left, .right{
    width: 60px;  /* width: 15%; */
  }

  .center{
    flex: 1;
  }
</style>