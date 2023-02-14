<template>
  <div class="tab-container" id="tabContainer">
    <div class="tab-item" v-for="(item, index) in list" :key="index">
      <img :src="item.Image" />
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
export default {
  data() {
    return {
      list: [],
    };
  },
  created(){
      let that = this
         axios.get("http://101.43.39.188:10000/api/tech/tech")
        .then(function (response) {
          if (response.status == 200){
            console.log(response.data.data.results)
            let res =[];
            // that.list = response.data.data.results
            for(var item of response.data.data.results) {
              res.push(item)
            }
            that.list = res
            that.total = response.data.data.page.total
            console.log("that.total: ", that.total)
          }
        })
        .catch(function (error) {
          console.log(error);
        });
  },
  mounted() {
    this.waterFall("#tabContainer", ".tab-item"); //实现瀑布流
    // 窗口变化自适应布局
    window.onresize = () => {
      return (() => {
        this.waterFall("#tabContainer", ".tab-item");
      })();
    };
  },
  methods: {
    /**
     * @param { string } wrapIdName    容器id(或class)名称
     * @param { string } contentIdName 容器中内容项id(或class)名称
     * @param { number } column        容器中内容展示列数 手机的话建议改为2
     * @param { number } columnGap     容器中 列 间隔距离 默认为20
     * @param { number } rowGap        容器中 行 间隔距离 默认为20
     */

    //瀑布流方法：通过拿到dom循环，给每一个dom添加对应的定位位置排列出瀑布流布局。
    //通过判断列的高度，来把下一个盒子放在最短的地方补上
    waterFall(
      wrapIdName,
      contentIdName,
      columns = 3,
      columnGap = 20,
      rowGap = 20
    ) {
      // 获得内容可用宽度（去除滚动条宽度）
      const wrapContentWidth =
        document.querySelector(wrapIdName).offsetWidth - 8;

      // 间隔空白区域
      const whiteArea = (columns - 1) * columnGap;

      // 得到每列宽度(也即每项内容宽度)
      const contentWidth = parseInt((wrapContentWidth - whiteArea) / columns);

      // 得到内容项集合
      const contentList = document.querySelectorAll(contentIdName);

      // 成行内容项高度集合
      const lineConentHeightList = [];

      for (let i = 0; i < contentList.length; i++) {
        // 动态设置内容项宽度
        contentList[i].style.width = contentWidth + "px";

        // 获取内容项高度
        const height = contentList[i].clientHeight;

        if (i < columns) {
          // 第一行按序布局
          contentList[i].style.top = 0;
          contentList[i].style.left = contentWidth * i + columnGap * i + "px";

          // 将行高push到数组
          lineConentHeightList.push(height);
        } else {
          // 其他行
          // 获取数组最小的高度 和 对应索引
          let minHeight = Math.min(...lineConentHeightList);
          let index = lineConentHeightList.findIndex(
            (listH) => listH === minHeight
          );

          contentList[i].style.top = minHeight + rowGap + "px";
          contentList[i].style.left = (contentWidth + columnGap) * index + "px";

          // 修改最小列的高度 最小列的高度 = 当前自己的高度 + 拼接过来的高度 + 行间距
          lineConentHeightList[index] += height + rowGap;
        }
      }
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
/* 最外层大盒子 */
.tab-container {
  position: relative;
}
/* 每个小盒子 */
.tab-container .tab-item {
  position: absolute;
  height: auto;
  border: 1px solid #ccc;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  background: white;
  /* 元素不能中断显示 */
  break-inside: avoid;
  text-align: center;
}
.tab-container .tab-item img {
  width: 100%;
  height: auto;
}
/* 描述 */
.content {
  text-align: left;
  color: #5c5c5c;
  font-size: 14px;
  margin-top: 10px;
  padding: 0 10px 0 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  /* 将对象作为弹性伸缩盒子模型显示 */
  display: -webkit-box;
  /* 限制在一个块元素显示的文本的行数 */
  /* -webkit-line-clamp 其实是一个不规范属性，使用了WebKit的CSS扩展属性，该方法适用于WebKit浏览器及移动端；*/
  -webkit-line-clamp: 2;
  /* 设置或检索伸缩盒对象的子元素的排列方式 */
  -webkit-box-orient: vertical;
}
/* 价格和销量 */
.tips {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  margin: 10px 0;
}
.tipsRight {
  padding: 3px 7px;
  background-color: #ff9a00;
  color: #fff;
  border-radius: 8px;
  font-size: 14px;
}
</style>
