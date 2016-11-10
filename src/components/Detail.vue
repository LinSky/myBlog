<template>
  <Leftbar></Leftbar>

  <div class="article_box">
    <h1 class="wrap">{{article.title}}</h1>
    <div class="numbers">
        <em>阅读322</em>
        <em>喜欢542</em>
        <em>评论160</em>
        <i>{{article.author}} 写于 {{new Date(article.createTime).getFullYear() +'-'+ (new Date(article.createTime).getMonth()+1) + '-' + new Date(article.createTime).getDate() + ' ' + new Date(article.createTime).getHours()+':'+new Date(article.createTime).getMinutes()}}</i>
    </div>
    <div class="content">
      {{{article.content}}}
    </div>
  </div>

</template>

<script>
import Leftbar from 'components/Leftbar.vue'
import API from '../../api.config.js'

export default {
  components: {
    Leftbar
  },
  data () {
    return {
      article: {}
    }
  },
  ready () {
    this.getArticle()
  },
  methods: {
    getArticle: function () {
      this.$http.get(API.HOST + 'article/' + this.$route.params.articleId)
        .then((response) => {
          this.$set('article', response.data)
        })
    }
  }
}
</script>
<style lang="less" scoped>
    h1{
        font-size: 32px; color: #444; font-weight: bold; line-height: 48px;
    }
    .article_box{
        width: 640px; margin: auto; font-size: 14px; color: #333; background-color: #FFF; padding: 20px;
        .content{
            padding: 20px 0;
        }
    }
    .numbers{
        height: 48px; color: #999;
        em,i{
            float: left; line-height: 48px; padding-right: 20px; font-size: 12px;
        }
        i{
            float: right;
        }
    }
</style>
