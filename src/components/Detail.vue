<template>
  <div>
    <h1>{{article.title}}</h1>
    <div class="content">
        {{{article.content}}}
    </div>
  </div>
</template>

<script>
import API from '../../api.config.js'

export default {
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
        font-size: 18px; width: 1000px; margin: auto; line-height: 64px; background-color: #FFF; text-align: center;
    }
    .content{
        width: 960px; margin: auto; font-size: 14px; color: #333; background-color: #FFF; padding: 20px;
    }
</style>
