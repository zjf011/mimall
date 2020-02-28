<template>
  <div class="order-header">
    <div class="container">
      <div class="header-logo">
        <a href="/#/index"></a>
      </div>
      <div class="title">
        <h2>
          {{title}}
        <slot name="tip"></slot>
        </h2>
      </div>
      <div class="username">
        <a href="javascript:;">admin</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "order-header",
  props:{
    title:String,
  }
};
</script>
<style lang="scss">
.order-header {
  padding: 30px 0;
  
  .container {
    height: 112px;
    display: flex;
    //padding-top: 30px;
    align-items: center;
    box-sizing: border-box;
    justify-content: space-between;
  }
  .title { 
    font-size: 24px;
    width:950px;
    padding-left: 50px;
    span {
      font-size: 12px;
      margin-left: 17px;
      color: #999999;
      font-weight: bold;
    }
  }
  .title,
  .username {
    display: inline-block;
    height: 55px;
    line-height: 55px;
  }
  .username{
    width: 160px;
    text-align: right;
    a{
      text-decoration: none;
      color:#000000;
      font-weight: bold;
      font-size: 14px;
      
    }
  }
  
}
</style>