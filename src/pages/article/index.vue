<template>
  <div>
    <h1 class="wrap">{{article.title}}</h1>
    <p class="numbers">阅读 {{article.view}} · 喜欢 {{article.like}}</p>
    <div class="content" v-html="article.content"></div>
    <div class="btns clearfix">
      <a class="like" @click="likeAction" href="javascript:;"><i class="fa fa-heart-o"></i> {{article.like}}</a>
    </div>
  </div>
</template>

<script>
import API from '../../../api.config.js'
export default {
  data () {
    return {
      article: {}
    }
  },
  created () {
    this.getArticle()
  },
  methods: {
    getArticle: function () {
      this.$http.get(API.HOST + 'article/' + this.$route.params.id)
        .then((response) => {
          this.article = response.data
        })
    },
    likeAction: function () {
      this.article.like++
    }
  }
}
</script>

<style lang="less" scoped>
h1{
  font-size: 32px; font-weight: bold; line-height: 64px; padding-top: 20px;
}
.numbers{
    font-size: 12px; color: 12px; line-height: 24px; color: #999;
}
.content{
  padding: 20px 0;
}
.btns{
  padding: 40px 0;
  a.like{
    float: right; height: 36px; padding: 0 40px; border: #e78170 solid 1px; text-align: center; line-height: 36px; border-radius: 19px; color: #e78170; font-size: 16px;
  }
}


</style>
