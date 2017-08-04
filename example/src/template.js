export const sourcecode = `<template>
  <vm-scrollbar 
  tag="ul"
  wrap-class="vm-scrollbar__box"
  >
    <li class="smallbox" v-for="item in 6">{{ item }}</li>
  </vm-scrollbar>
</template>

<style lang="less" rel="stylesheet/less">
  .vm-scrollbar__box{
    max-height: 600px;
  }
</style>`