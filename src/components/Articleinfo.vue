<template>
  <div class="article_item" v-for="item in items">
      <p class="date">{{item.author}} 写于 {{new Date(item.createTime).getFullYear() +'-'+ (new Date(item.createTime).getMonth()+1) + '-' + new Date(item.createTime).getDate() + ' ' + new Date(item.createTime).getHours()+':'+new Date(item.createTime).getMinutes() + ':' + new Date(item.createTime).getSeconds()}}</p>
      <h2 v-link="{name: 'detail', params:{articleId:item._id}}">{{item.title}}</h2>
      <p class="numbers">阅读 {{item.view}} · 喜欢 {{item.like}} · 评论 {{item.commentNum}}</p>
  </div>
</template>

<script>
export default {
  data () {},
  props: ['items']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.article_item{
    border-bottom:#ccc dashed 1px; padding: 20px 0;
    .date{
        font-size: 12px; color: 12px; line-height: 24px; color: #999;
    }
    h2{
        line-height: 48px; color: #666; font-size: 18px; cursor: pointer; font-weight: bold;
    }
    .numbers{
        font-size: 12px; color: 12px; line-height: 24px; color: #999;
    }
}
</style>
