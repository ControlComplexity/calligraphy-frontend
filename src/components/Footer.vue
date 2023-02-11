<template>
    <div id="footer">
     版权所有@书法教育网&nbsp&nbsp&nbsp&nbsp地址：深圳市南山区&nbsp&nbsp&nbsp&nbsp反馈意见：1111111&nbsp&nbsp&nbsp&nbsp联系人：Alex
    </div>
  </template>
  <style scoped>
    #footer{
        background-color: rgb(195, 192, 189);
        height: 100px;
        display:flex;
        justify-content:center;
        align-items:center;
    }
  </style>
  
  <script>
  export default {
  name: 'Footer',
  props: {
   msg: String
  }
  }
  </script>