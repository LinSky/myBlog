<template>
    <div class="login_box">
        <input type="text" name="user" value="" v-model="user" placeholder="账号">
        <input type="text" name="user" value="" v-model="password" placeholder="密码">
        <button type="button" name="button" v-on:click="submit()">Login</button>
    </div>
</template>

<script>
export default {
  data () {
    return {
      user: '',
      password: ''
    }
  },
  ready () {

  },
  methods: {
    check: function () {
      if (this.user.length !== 0 && this.password.length > 5) {
        return true
      }
      return false
    },
    submit: function () {
      this.check() ? this.login() : window.alert('表单填写不完整！')
    },
    login: function () {

    }
  }
}
</script>

<style lang="less" scoped>
    .login_box{
        width: 400px; height: 260px; padding: 20px;background-color: #FFF; margin: auto; margin-top: 200px; border-bottom: #ccc solid 1px;
        input{
            width: 100%; height: 48px; border: #ccc solid 1px; padding: 0 10px; box-sizing: border-box; border-radius: 3px; margin: 10px 0;
        }
        button{
            width: 100%; height: 48px; text-align: center; margin-top: 40px; border-radius: 3px; background-color: #1499ba; color: #FFF; font-size: 16px;
        }
    }

</style>
