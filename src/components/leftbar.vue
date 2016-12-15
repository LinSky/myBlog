<template>
  <div class="leftbar">
    <div class="avatar">
      <img :src="avatar" alt="">
    </div>
    <h2>叁木</h2>
    <v-Navs></v-Navs>
  </div>
</template>

<script>
import avatar from './../assets/avatar.jpg'
export default {
  data () {
    return {
      avatar: avatar
    }
  }
}
</script>

<style lang="less" scoped>
  .leftbar{
    position: fixed; width: 400px; padding: 20px 0 0 0; height: 100%; box-shadow: 0 0 10px rgba(160, 160, 160, .2);
    .avatar{
      width: 72px; height: 72px; margin: auto; overflow: hidden; border-radius: 50%;
      img{
        width: 100%;
      }
    }
    h2{
      text-align: center; line-height: 32px; font-size: 18px; font-weight: bold;
    }
  }
</style>
