<template>
  <div class="goods-item">
    <img :src="goodsItem.show.img">
    <div class="goods-info" >
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    goodsItem: {
      type: Object,
      default(){
        return {}
      }
    }
  }
}
</script>

<style>
 .goods-item{
    padding-bottom: 40px;
    width: 48%;
    position: relative;
  }
  .goods-item img{
    width: 100%;
    border-radius: 5px
  }
   .goods-info {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }

  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }
  .goods-info .price {
    color: #ff5777;
    margin-right: 20px;
  }

  .goods-info .collect {
    position: relative;
  }

  .goods-info .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: 0;
    width: 14px;
    height: 14px;
    background: url('../../../assets/img/detail/detail_bottom.png') no-repeat left center;
    background-size: 14px;
    background-position: 0px 0px;
  }
</style>