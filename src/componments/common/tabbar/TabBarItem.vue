<template>
    <div class="tab-bar-item" @click="change()">
      <div v-if="!isActive"><slot name='photo'></slot></div>
      <div v-else><slot name='photo_active'></slot></div>
      <div :style="activeStyle"><slot name='text'></slot></div>
      <!-- <slot v-if="isActive" name='photo'></slot>
      <slot v-else name='photo_active'></slot>
      <slot name='text'></slot> -->
    </div>
</template>

<script>

export default {
  name: "tabBarItem",
  props: {
    path:String,
    activeColor:{
      type: String,
      default: "red"
    }
  },
  data () {
    return {
     // isActive: false
    }
  },
  computed: {
    isActive(){
      return !this.$route.path.indexOf(this.path)
    },
    activeStyle(){
      return this.isActive? {color: this.activeColor}:{}
    }
  },
  methods: {
    change(){
      // if(this.sign != this.path){
      //   this.$router.push(this.path)  
      // }
      //console.log(this.$store.state.sign);
      if(this.$store.state.sign != this.path){
        this.$router.push(this.path)  
      }
    }
  }
}
</script>

<style>
  .tab-bar-item{
      flex: 1;
      text-align: center;
      height: 49px;
      /* line-height: 49px; */
  }
  .tab-bar-item img{
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
  }
</style>