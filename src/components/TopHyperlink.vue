<template>
  <div id="hyperlink">
    <el-link style="position:relative;" :underline="false" href='http://www.cca1981.org.cn/' target='_blank'  @mouseover="show()" id="link1">
      古代书法
      <div class="menu" id="menu">
          <ul>
            <li>
              <a href="https://www.baidu.com"  target='_blank'>王羲之</a>
            </li>
            <li>
              <a href="https://www.slidestalk.com/" target='_blank' >颜真卿</a>
            </li>
          </ul>
      </div>
    </el-link>
  </div>
 
</template>
<style scoped>
#hyperlink{
  background-color:rgb(255, 255, 255);
  height: 100px;
  display:flex;
  justify-content:center;
  align-items:center;
}
.menu{
    display: none;
    width: 100px;
    position: absolute;
    background-color: #efaefa;
    bottom: -70px;
    z-index: 9999;
    transition: display ease 1s;
}
#link1{
  
}
#link1:hover  #menu
{
  display: block;
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
  methods:{
      show:function(){
        
      }
  },
name: 'TopHyperlink',
props: {
 msg: String
}
}
</script>