<template>
  <div class="textarea_box">
    <input type="text" name="title" v-model="title" placeholder="请输入文章标题">
    <textarea id="editor" placeholder="这儿输入···" autofocus></textarea>
    <a href="javasctipt:;" v-on:click="submitForm()">Save</a>
    <div class="tip" v-show="tipShow">保存成功</div>
  </div>
</template>

<script>
import $ from 'jquery'
import Simditor from 'simditor'
import API from '../../api.config.js'

export default {
  data () {
    return {
      editor: null,
      content: '',
      title: '',
      tipShow: false
    }
  },
  ready () {
    this.initSimdotir()
  },
  methods: {
    initSimdotir: function () {
      let toolbar = ['title', 'bold', 'italic', 'underline', 'strikethrough', 'fontScale', 'color', '|', 'ol', 'ul', 'blockquote', 'code', 'table', '|', 'link', 'image', 'hr', '|', 'indent', 'outdent', 'alignment']
      let editor = new Simditor({
        textarea: $('#editor'),
        toolbar: toolbar
      })
      this.$set('editor', editor)
    },
    submitForm: function () {
      let _this = this
      _this.$http.post(API.HOST + 'articles', {title: this.title, content: _this.editor.sync()})
        .then((response) => {
          this.$set('tipShow', true)
          setTimeout(function () {
            _this.$set('tipShow', false)
          }, 2000)
        })
    }
  }
}
</script>
<style>
@import "../style/simditor.css";
.textarea_box input{
    width: 1000px; height: 48px; line-height: 48px; margin-bottom: 20px; font-size: 16px; outline: none;
}
.textarea_box{
    width: 1000px; margin: auto;
}
.textarea_box a{
    width: 100px; height: 48px; line-height: 48px; text-align: center; margin: auto; display: block; background-color: #FFF; margin-top: 20px; font-size: 16px; color: #333; text-decoration: none;
}
.tip{
    text-align: center; font-size: 14px; line-height: 32px;
}
</style>
