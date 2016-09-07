<template>
  <div class="common_top">
      <div class="avatar">
          <img class="logo" v-bind:src="avatar_img">
      </div>
      <div class="name">
          <h1>{{name}}</h1>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: 'Trouble Maker',
      avatar_img: 'http://imglf0.ph.126.net/qbYA5OtC5u6MldoK8_AS6A==/4911738343701381591.jpg'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
    .common_top{
        padding: 20px 0;
        .avatar{
            width: 100px; height: 100px;border-radius: 50%; margin: auto; background-color: rgba(255, 255, 255, .5);overflow: hidden; box-shadow: 0 0 3px #999;
            img{
                width: 100%;
            }
        }
        .name{
            text-align: center; padding-top: 20px;
        }
        h1{
            display: inline-block; margin: auto; background-color: rgba(255, 255, 255, .5); line-height: 48px; border-radius: 24px; padding: 0 20px; font-size: 24px; color: #FFF; text-shadow: 0 1px 1px #999;
        }
    }
</style>
