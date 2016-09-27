<template>
  <div class="common_top">
      <div class="avatar">
          <img class="logo" v-link="'/'" src="../assets/avatar.jpg">
      </div>
      <div class="name">
          {{name}}
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: 'Trouble - 叁木'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
    .common_top{
        height: 280px; padding: 100px 0 20px; background: url("../assets/bg.jpg") no-repeat center -150px; background-size: 100%;
        .avatar{
            width: 96px; height: 96px; margin:auto; border-radius: 50%; background-color: rgba(255, 255, 255, .5);overflow: hidden; border: rgba(255, 255, 255, .2) solid 3px;
            img{
                width: 100%;
            }
        }
        .name{
            text-align: center; padding-top: 20px; font-size: 18px; color: #FFF;
        }
    }
</style>
