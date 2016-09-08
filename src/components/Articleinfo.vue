<template>
  <div class="item" v-for="item in items">
      <div class="thumbnail">
          <img v-bind:src="item.img" alt="" />
      </div>
      <h2>{{item.title}}</h2>
  </div>
</template>

<script>
export default {
  data () {
    return {search: ''}
  },
  props: ['items']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.item{
    background-color: #FFF; margin-bottom: 40px; box-shadow: 0 0 5px #888;
    .thumbnail{
        height: 300px; overflow: hidden;
        img{
            width: 100%;
        }
    }
    h2{
        padding: 0 20px; line-height: 48px; color: #333; font-size: 16px;
    }
}
</style>
