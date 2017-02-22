<template>
  <div class="page">
    <div class="title_con">
      <el-input placeholder="请输入标题" size="large" v-model="title"></el-input>
    </div>
    <div class="textarea_con">
      <textarea id="editor" v-model="content" placeholder="这儿输入···" autofocus></textarea>
    </div>
    <el-button @click="save" type="primary" size="large" class="send_btn">保存</el-button>
  </div>
</template>

<script>
import $ from 'jquery'
import API from '../../../api.config.js'
import Simditor from 'simditor'
import { mapState } from 'vuex'

import '../../style/simditor.css'

export default {
  data () {
    return {
      form: {
        name: ''
      },
      editor: null,
      content: '',
      title: '',
      tipShow: false
    }
  },
  computed: mapState({ user: state => state.user }),
  created () {
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
    },
    save: function () {
      console.log(this.editor.sync())
      this.content = this.editor.sync()
      if (this.content.length > 0 && this.title.length > 0) {
        this.$http.post(API.HOST + 'articles', {title: this.title, content: this.content, author: this.user.username, authorId: this.user.id})
          .then((response) => {
          })
      } else {
        this.$message.error('标题,内容不能为空！')
      }
    }
  }
}
</script>

<style lang="less" scoped>
.page{
}
.title_con{
  margin-bottom: 20px;
  input{
    width:100%; height: 48px; padding: 0 10px; font-size: 16px; border: #c9d8db solid 1px; box-sizing: border-box;
  }
}
.btn{
  display: block; text-align: center; line-height: 48px; margin-top: 40px; background-color: #c9d8db; color: #FFF; font-size: 16px;
}
.send_btn{
  width: 100px; float: right; margin-top: 20px;
}
</style>
