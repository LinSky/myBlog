<template>
  <div>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Detail!'
    }
  }
}
</script>
<style lang="less" scoped>
    h1{
        font-size: 18px;
    }
</style>
