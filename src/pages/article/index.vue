<template>
  <div>
    <h1 class="wrap">{{title}}</h1>
    <p class="numbers">阅读 123 · 喜欢 64 · 评论 8</p>
    <div class="content" v-html="content">

    </div>
  </div>
</template>

<script>
import API from '../../../api.config.js'
export default {
  data () {
    return {
      title: '',
      content: ''
    }
  },
  created () {
    this.getArticle()
  },
  methods: {
    getArticle: function () {
      console.log(this.$route.params.id)
      this.$http.get(API.HOST + 'article/' + this.$route.params.id)
        .then((response) => {
          console.log(response.data.title)
          this.title = response.data.title
          this.content = response.data.content
        })
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

</style>
