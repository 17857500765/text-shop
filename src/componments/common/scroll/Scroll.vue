<template>
  <div class="wrap">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: "Scroll",
  props: {
    probe: {
      type: Number,
      default: 0
    },
    pullUp: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      scroll: null
    }
  },
  mounted () {
    this.scroll = new BScroll('.wrap', {
      click: true,
      probeType: this.probe,
      pullUpLoad: this.pullUp
    })
    this.scroll.on("scroll", (position) =>{
      this.$emit("scroll", position)
    })
    this.scroll.on('pullingUp', () =>{
       this.$emit("pullingUp")
      setTimeout(() => {
        this.scroll.finishPullUp()   //finish调用后才可再一次调用pullupload
      }, 1500);
    })
  }
}
</script>

<style scoped>

</style>