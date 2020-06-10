<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  .nav-bar{
    display: flex;
    /* height: 20px; */
    line-height: 44px;
    text-align: center;
    box-shadow:  0 2px 12px 0 rgba(0, 0, 0, 0.2);
  }
  .left,.right{
    width: 60px;
  }
  .center {
    flex: 1;
  }
</style>