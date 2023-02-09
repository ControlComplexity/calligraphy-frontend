<template>
    <el-descriptions title="关于">
      <el-descriptions-item label="Username">kooriookami</el-descriptions-item>
      <el-descriptions-item label="电话">18100000000</el-descriptions-item>
      <el-descriptions-item label="地点">苏州</el-descriptions-item>
      <el-descriptions-item label="Remarks">
        <el-tag size="small">School</el-tag>
      </el-descriptions-item>
      <el-descriptions-item label="Address"
        >No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu
        Province</el-descriptions-item
      >
    </el-descriptions>
  </template>

<script>
   export default {
  name: 'PersonalInfo',
  props: {
    msg: String
  }
}
</script>