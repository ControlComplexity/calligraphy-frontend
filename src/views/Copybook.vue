<template>
   <el-carousel class="lun_imgs" type="card" ref="carousel" height="1000px" width="1200px" indicator-position="none">
<el-carousel-item class="lun_img"  v-for="item in list" v-bind:key="item.URL">
  <img :src="item.URL"  @click.native="goSolution(item, index)"/>
</el-carousel-item>
</el-carousel>
</template>

<style scoped>
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>

<script>
import axios from 'axios'
/**
 *  字帖
 */
 export default {
  name: 'Copybook',
  data(){
    return {
      list: this.list
    }
  },
  methods: {
     goSolution(item, index){
      console.log("链接： ",item.Link)
      window.open(item.Link, "_blank");
    }
  },
  created(){
      let that = this
         axios.get("http://101.43.39.188:10000/api/carousel/carousels")
        .then(function (response) {
          if (response.status == 200){
            console.log(response.data.data.results,'shuchu')
            that.list = response.data.data.results
          }
        })
        .catch(function (error) {
          console.log(error);
        });
  },
}

</script>