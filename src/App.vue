<template>
    <author></author>
    <router-view ></router-view>

</template>

<script>
import Author from './components/Author'

export default {
  components: {
    Author
  }
}
</script>

<style lang="less">
    *{
        margin: 0; padding: 0; border: 0; font-family: "Hiragino Sans GB","Microsoft YaHei",tahoma,arial,simsun; font-size: 12px;
    }
    html{
        height: 100%;
    }
    body{
        height: 100%; background: url("./assets/bg.jpg");
    }
</style>
