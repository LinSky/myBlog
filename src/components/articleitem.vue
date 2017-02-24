<template>
  <div class="">
    <div class="article_item">
        <p class="date">{{article.username}} 写于 {{format(article.createTime)}}</p>
        <router-link :to="{name: 'article', params: {id: article._id}}"> <h2>{{article.title}}</h2> </router-link>
        <p class="numbers">阅读 {{article.view}} · 喜欢 {{article.like}}</p>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  data () {
    return {
    }
  },
  props: ['article'],
  methods: {
    format: function (time) {
      return moment(time).utc(true).format('YYYY-MM-DD HH:mm:ss')
    }
  }
}
</script>

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
