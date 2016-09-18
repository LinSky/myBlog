<template>
    <div class="acticles_list">
        <articleinfo :items="articles"></articleinfo>
    </div>

</template>

<script>
import Articleinfo from 'components/Articleinfo.vue'

export default {
  components: {
    'articleinfo': Articleinfo
  },
  data () {
    return {
      articles: []
    }
  },
  ready () {
    this.getArticles()
  },
  methods: {
    getArticles: function () {
      this.$http.get('http://127.0.0.1:3000/articles')
        .then((response) => {
          this.$set('articles', response.data)
        })
    }
  }
}
</script>

<style lang="less" scoped>
.acticles_list{
    width: 600px; padding: 40px 0 40px 40px; margin: auto; border-left: rgba(255, 255, 255, .2) solid 4px;
}

</style>
