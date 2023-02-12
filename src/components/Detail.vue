<template>
  <div id="essay">           
 {{essay.Title}} 
 {{essay.Content}}
</div>
 </template>
 

<script>
// 文章详情
import axios from 'axios'
export default {
  name: 'Detail',
  data(){
    return {
      essay: this.essay
    }
  },
  created(){
      let that = this
         axios.get("http://101.43.39.188:10000/api/essay/1")
        .then(function (response) {
          if (response.status == 200){
            that.essay = response.data.data.results
          }
        })
        .catch(function (error) {
          console.log(error);
        });
  },
}
</script>