<template>
    <Leftbar></Leftbar>
    <div class="acticles_list">
        <articleinfo :items="articles"></articleinfo>
    </div>

</template>

<script>
import Leftbar from 'components/Leftbar.vue'
import Articleinfo from 'components/Articleinfo.vue'
import API from '../../api.config.js'

export default {
  components: {
    Articleinfo,
    Leftbar
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
      this.$http.get(API.HOST + 'articles')
        .then((response) => {
          this.$set('articles', response.data)
        })
    }
  }
}
</script>

<style lang="less" scoped>
    .acticles_list{
        width: 600px; margin: auto;
    }
</style>
