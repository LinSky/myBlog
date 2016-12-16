<template>
  <div class="login_content">
    <el-row>
      <el-col :span="12" :offset="6">
        <el-input type="text" v-model="user.phone" class="el_input" placeholder="请输入手机"></el-input>
        <el-input type="password" v-model="user.password" placeholder="请输入密码"></el-input>
        <el-button type="primary" @click="login" class="login_btn">登录</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import API from './../../../api.config.js'
import { mapActions, mapState } from 'vuex'
import { USER_SIGNIN } from '../../store/user'

export default {
  data () {
    return {
      user: {
        phone: null,
        password: null
      }
    }
  },
  computed: mapState({ user: state => state.user }),
  mounted () {
    if (this.user.id) {
      this.$router.push('/')
    }
  },
  methods: {
    ...mapActions([USER_SIGNIN]),
    login: function () {
      if (!this.user.phone) {
        this.$message.error('请输入手机！')
      } else if (!this.user.password) {
        this.$message.error('请输入密码！')
      } else {
        this.$http.post(API.HOST + 'login', this.user)
          .then((response) => {
            if (response.data.code === 0) {
              this.USER_SIGNIN(response.data.user)
              this.$router.push('/write')
            } else {
              this.$message.error(response.data.msg)
            }
          })
      }
    }
  }
}
</script>

<style lang="less" scoped>
.login_content{
  width: 600px; padding: 200px 0; margin: auto;
  .el_input{
    margin: 20px 0;
  }
  .login_btn{
    width: 100%; margin: 40px 0;
  }
}
</style>
