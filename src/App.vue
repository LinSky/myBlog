<template>
  <div>
    <v-Leftbar></v-Leftbar>
    <div class="left_content">
      <router-view></router-view>
    </div>
  </div>

</template>

<script>
</script>

<style lang="less" scoped>
.left_content{
  width: 600px; margin: auto;
}
</style>
