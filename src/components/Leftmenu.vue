<template>
    <div class="left_menu">
        <a href="javascript:;" v-for="item in navs" v-link="item.link">{{item.text}} / <em>{{item.engText | uppercase}}</em><br></a>
    </div>
</template>

<script>
export default {
  data () {
    return {
      navs: [
        {text: '首页', engText: 'home', link: '/create'},
        {text: '介绍', engText: 'info', link: '/create'},
        {text: '照片', engText: 'photoes', link: '/create'}
      ]
    }
  }
}
</script>

<style lang="less" scoped>
    .left_menu{
        padding: 40px 0 0 80px;
        a{
            line-height: 32px; margin: 10px 0; color: #888;
            em{
                font-size: 12px; color: #aaa;
            }
        }
    }
</style>
