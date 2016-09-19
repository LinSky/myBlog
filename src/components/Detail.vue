<template>
  <div>
    <h1>{{ article._id }}</h1>
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
        font-size: 18px;
    }
</style>
