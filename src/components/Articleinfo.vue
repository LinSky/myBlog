<template>
  <div class="item" v-for="item in items">
      <div class="thumbnail" v-link="{name: 'detail', params:{articleId:item._id}}">
          <img v-bind:src="item.thumb" alt="" />
      </div>
      <h2>{{item.title}}</h2>
      <div class="time">{{new Date(item.createTime).getFullYear() +'-'+ (new Date(item.createTime).getMonth()+1) + '-' + new Date(item.createTime).getDate() + ' ' + new Date(item.createTime).getHours()+':'+new Date(item.createTime).getMinutes() + ':' + new Date(item.createTime).getSeconds()}}</div>
      <em></em>
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
    background-color: #FFF; margin-bottom: 40px; box-shadow: 0 0 5px #888; position: relative;
    .thumbnail{
        height: 300px; overflow: hidden;
        img{
            width: 100%;
        }
    }
    h2{
        padding: 0 20px; line-height: 48px; color: #333; font-size: 24px;
    }
    .time{
        position: absolute; top: 0; left: -240px; font-size: 16px; color: #FFF; line-height: 24px; text-shadow:  0 0 2px #999;
    }
    em{
        position: absolute; top: 0; left: -51px; background-color: #FFF; border-radius: 50%; width: 20px; height: 20px; box-shadow:  0 0 2px #999;
    }
}
</style>
