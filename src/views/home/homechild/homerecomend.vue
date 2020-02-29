<template>
  <div class="recomend">
    <div v-for="item in recommends" class="recomend-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeRecomend",
  props: {
    recommends: {
      type: Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style>
  .recomend{
    text-align: center;
    border-bottom: 8px solid #f111
  }
  .recomend-item{
    display:inline-block;
    width: 25%;
    padding: 10px 0 16px;
  }
  .recomend-item img{
    width: 80%;
    padding-bottom: 5px;
  }
  .recomend-item a{
    text-decoration: none;
    color:rgb(216, 131, 131)
  }
</style>