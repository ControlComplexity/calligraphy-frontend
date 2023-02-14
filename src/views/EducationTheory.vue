<template>
  <div class="root">
    <div class="theory">           
      <div style="display:flex;align-items: center;height: 110px; margin: 10px;overflow: hidden;" v-for="item in list">
        <div class="image" :style="{backgroundImage:`url(${item.Image})`}">
          <div class="time">
            <span style="font-size: 17px;font-weight: bold;">13</span>
            <span style="font-size: 14px;">2023.2</span>
          </div>
        </div>
        <div class="desc_block">
          <span class="title" @click="theoryDetail(item)">{{item.Title}}</span>
          <div class="abstract">
            <span style="">{{ item.Abstract }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="pagination">
    <Pagination :total="total"></Pagination>
  </div>
</template>
<style>
  .root{
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .pagination{
    display:flex;
    justify-content:center;
    align-items:center;
  }
  .theory{
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .theory .image{
    width: 40%;
    height: 100%;
    /* background-repeat: no-repeat; */
    background-size: 100%;
    position: relative;
  }
  .image .time{
    background-color: #adf;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    position: absolute;
    left: 10px;
    bottom: 10px;
    color: #eee;
  }
  .desc_block{
    width: 60%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    padding: 10px;
  }
  .desc_block .title{
    margin-bottom: 10px;
    font-size: 13.5px;
    font-weight: bold;
    color: #000;
    font-family: "SourceSansPro-Regular", "微软雅黑";
  }
  .desc_block .title:hover{
    cursor:pointer;
    text-decoration: underline;
  }
  .abstract > span{
    display: inline-block;
    width: 100%;
    height: 64px;
    line-height: 13px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    font-size: 12.5px;
    text-align: left;
  }
</style>
<script>
import axios from 'axios'
import Pagination from '@/components/Pagination.vue'
   export default {
    components:{
      Pagination
    },
  name: 'EducationTheory',
  data(){
    return {
      list: [],
      total: 0
    }
  },
  methods: {
    /**
     * 跳转到书法理论界面
     * @param {理论文章编号} id 
     */
    theoryDetail(id) {
      this.$router.push({
        name: 'theoryDetail',
        params: {
          id: id.ID
        }
      })
    }
  },
  created(){
      let that = this
         axios.get("http://101.43.39.188:10000/api/theory/theory?limit=10&page=1")
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
}
</script>