<template>
  <div class="tab-control">
    <div v-for="(item, index) in title" class="tab-control-item" :class="{active: index == count}" @click="change(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    title: {
      type: Array,
      default(){
        return []
      }
    }
  },
  data () {
    return {
      count: 0
    }
  },
  methods: {
    change(index){
      this.count = index
      this.$emit("tabclick", index)
    }
  }
}
</script>

<style>
  .tab-control{
    display: flex;
  }
  .tab-control-item{
    flex: 1;
    text-align: center;
    font-size: 15px;
    height: 30px;
    line-height: 30px;
  }
  .active{
    color: #ff5777;
    background-color:rgb(250, 244, 244)
  }
  .active span{
    padding: 5px 12px;
    border-bottom: 3px #ff5777 solid
  }
</style>