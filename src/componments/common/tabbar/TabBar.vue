<template>
  <div id="tab-bar">
    <slot></slot>
   </div>
</template>

<script>
export default {
  name: "tabBar"
}
</script>

<style>
  #tab-bar{
      display: flex;
      background-color: #f2f2f2;
      position: fixed;
      bottom: 0px;
      left: 0px;
      right: 0px;
      box-shadow: 0px -3px 4px rgba( 100, 100, 100, 0.1)
  }
</style>