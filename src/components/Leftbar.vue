<template>
    <div class="left_bar">
        <div class="avatar">
            <img class="logo" v-link="'/'" src="../assets/avatar.jpg">
        </div>
        <div class="name">{{name}}</div>
        <Leftmenu></Leftmenu>
    </div>
</template>

<script>
import Leftmenu from 'components/Leftmenu.vue'

export default {
  components: {
    Leftmenu
  },
  data () {
    return {
      name: '叁木'
    }
  }
}
</script>

<style lang="less" scoped>
    .left_bar{
        width: 400px; height: 100%; box-shadow: 0 0 8px #aaa; position: fixed; left: 0; top: 0;
        .avatar{
            width: 96px; height: 96px; margin: 40px auto 20px; border-radius: 50%; overflow: hidden; border: #ddd solid 4px;
            img{
                width: 100%;
            }
        }
        .name{
            text-align: center; line-height: 32px; color: #666; font-weight: bold; font-size: 20px;
        }
    }
</style>
