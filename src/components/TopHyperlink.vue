<template>
  <div id="hyperlink">
    <span id="logo">书法教育网</span>
    <el-link style="position:relative;" :underline="false" href='http://www.cca1981.org.cn/' target='_blank'  @mouseover="show()" id="link1">
      教育研究
      <div class="menu1" id="menu1">
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
    <el-link style="position:relative;" :underline="false" href='http://www.cca1981.org.cn/' target='_blank'  id="link2">
      大学书法教育
      <div class="menu2" id="menu2">
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
#logo{
 margin-right: 100px; 
 font-size: 50px;
}
#hyperlink{
  background-color:rgb(255, 255, 255);
  height: 100px;
  display:flex;
  justify-content:center;
  align-items:center;
}
.menu1{
    display: none;
    width: 100px;
    position: absolute;
    background-color: #efaefa;
    bottom: -70px;
    z-index: 9999;
    transition: display ease 1s;
}

.menu2{
    display: none;
    width: 100px;
    position: absolute;
    background-color: #efaefa;
    bottom: -70px;
    z-index: 9999;
    transition: display ease 1s;
}

#link1:hover  #menu1
{
  display: block;
}

#link2:hover  #menu2
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