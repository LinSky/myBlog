<template>
  <div id="app">
    <img class="logo" src="./assets/logo.png">
    <hello></hello>
    <p>
      Welcome to your Vue.js app!
    </p>
    <p style="color:red">
      It seems you are using an outdated version of vue-cli.<br>
      Upgrade to vue-cli@2.x to get access to newer versions of this template.
    </p>
  </div>
</template>

<script>
import Hello from './components/Hello'

export default {
  components: {
    Hello
  }
}
</script>

<style lang="less" scoped>
    html{
        height: 100%;
    }
</style>
