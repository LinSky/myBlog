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
    let articlesData = [
      {
        title: '文章标题测试一',
        img: 'http://imglf1.nosdn.127.net/img/TnhVL3ZGTmh0cDNKOHZIUlNONFlmTzVsZ1k5SVBIcmQzSkI0TUlILzhwcFJ6Yk84YTg2QzZRPT0.jpg?imageView&thumbnail=500x0&quality=96&stripmeta=0&type=jpg',
        time: '2016-09-07 15:30'
      },
      {
        title: '文章标题测试2',
        img: 'http://imglf2.nosdn.127.net/img/TnhVL3ZGTmh0cDNIcm9nRk9EWlZ2c2VPQ2dzTHRoZG5YK2UwRnRVNXEyVmdtQ1JZWkJSQjFnPT0.jpg?imageView&thumbnail=500x0&quality=96&stripmeta=0&type=jpg',
        time: '2016-09-07 15:30'
      }
    ]
    return {
      articles: articlesData
    }
  }
}
</script>

<style lang="less" scoped>
.acticles_list{
    width: 600px; margin: auto;
}

</style>
