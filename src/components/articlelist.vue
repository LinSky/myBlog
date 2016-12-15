<template>
  <div class="article_list">
    <template v-for="article in articles">
      <v-articleitem :article='article'></v-articleitem>
    </template>
  </div>
</template>

<script>
import API from '../../api.config.js'
export default {
  data () {
    return {
      url: API.HOST + 'articles',
      articles: null
    }
  },
  created () {
    this.getArticles()
  },
  methods: {
    getArticles: function () {
      var that = this
      that.$http.get(API.HOST + 'articles')
        .then((response) => {
          console.log(response.data.result)
          that.articles = response.data.result
        })
      }
  }
}
</script>

<style lang="less" scoped>

</style>
