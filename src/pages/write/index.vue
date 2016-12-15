<template>
  <div class="page">
    <div class="title_con">
      <el-input placeholder="请输入标题" size="large" v-model="title"></el-input>
    </div>
    <div class="textarea_con">
      <textarea id="editor" placeholder="这儿输入···" autofocus></textarea>
    </div>
    <el-button type="primary" size="large" class="send_btn">保存</el-button>
  </div>
</template>

<script>
import $ from 'jquery'
import Simditor from 'simditor'
import { mapState } from 'vuex'

import '../../style/simditor.css'

export default {
  data () {
    return {
      editor: null,
      content: '',
      title: '',
      tipShow: false
    }
  },
  computed: mapState({ user: state => state.user }),
  created () {
    if (!this.user.id) {
      this.$router.push('/login')
    }
  },
  mounted () {
    this.initSimdotir()
  },
  methods: {
    initSimdotir: function () {
      let toolbar = ['title', 'bold', 'italic', 'underline', 'strikethrough', 'fontScale', 'color', '|', 'ol', 'ul', 'blockquote', 'code', 'table', '|', 'link', 'image', 'hr', '|', 'indent', 'outdent', 'alignment']
      let editor = new Simditor({
        textarea: $('#editor'),
        toolbar: toolbar
      })
      this.editor = editor
    }
  }
}
</script>

<style lang="less" scoped>
.page{
  width: 600px; margin: auto;
}
.title_con{
  padding: 40px 0;
  input{
    width:100%; height: 48px; padding: 0 10px; font-size: 16px; border: #c9d8db solid 1px; box-sizing: border-box;
  }
}
.btn{
  display: block; text-align: center; line-height: 48px; margin-top: 40px; background-color: #c9d8db; color: #FFF; font-size: 16px;
}
.send_btn{
  width: 100%; margin: 40px 0;
}
</style>
