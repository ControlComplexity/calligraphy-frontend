<template>
  <div>
    <el-link :underline="false" href='http://www.cca1981.org.cn/' target='_blank'>中国书法家协会</el-link>
  </div>
</template>
<style scoped>
.el-link {
  margin-right: 8px;
}
.el-link .el-icon--right.el-icon {
  vertical-align: text-bottom;
}
</style>

<script>
export default {
name: 'Hyperlink',
props: {
 msg: String
}
}
</script>