<template>
  <div id="hyperlink">
    <el-link :underline="false" href='http://www.cca1981.org.cn/' target='_blank'>中国书法家协会</el-link>
    <el-link :underline="false" href='http://www.xlys.org.cn/' target='_blank'>西泠印社</el-link>
    <el-link :underline="false" href='http://www.shanghaishuxie.com/' target='_blank'>上海市书法家协会</el-link>
    <el-link :underline="false" href='https://www.yac8.com/' target='_blank'>书法欣赏</el-link>
    <el-link :underline="false" href='http://www.chinashj.com/' target='_blank'>中国书画网</el-link>
  </div>
</template>
<style scoped>

#hyperlink{
  background-color:#f00;
  height: 100px;
  display:flex;
  justify-content:center;
  align-items:center;
}
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