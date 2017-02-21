<template>
  <div class="navs">
    <div class="item" v-for="link in links"><router-link :to="{name: link.name}">{{link.ch}} / <em>{{link.en}}</em></router-link></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      links: [
        {
          ch: '首页',
          en: 'home',
          name: 'home'
        },
        {
          ch: '关于',
          en: 'about',
          name: 'about'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
  .navs{
    padding: 50px 100px;
    .item{
      line-height: 32px;
      em{
        font-size: 12px; color: #999;
      }
    }
  }
</style>
