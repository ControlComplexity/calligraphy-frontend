<template>
    <el-pagination background layout="prev, pager, next" :total="10000" />
  </template>
  <script>
  export default {
    name: "Pagination",
  };
  </script>
  
  <style>
  .pagination_center {
    width: 100%;
    text-align: center;
    margin-top: 20px;
  }
  .el-pagination__total {
    font-size: 20px;
    color: #fff;
  }
  .el-pagination__jump {
    font-size: 20px;
    color: #fff;
  }
  .el-pagination.is-background .el-pager li {
    border-radius: 30px !important;
  }
  .el-pagination.is-background .el-pager li:not(.disabled).active {
    background: #feb733 !important;
  }
  </style>
  
  