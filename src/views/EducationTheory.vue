<template>
 <div id="app">           
  <li v-for="item in list">
    {{item.Title}}
</li></div>
</template>

<script>
import axios from 'axios'
   export default {
  name: 'EducationTheory',
  data(){
    return {
      list: this.list
    }
  },
  created(){
      let that = this
         axios.get("http://101.43.39.188:10000/api/theory/theory")
        .then(function (response) {
          if (response.status == 200){
            console.log(response.data.data.results)
            that.list = response.data.data.results
          }
        })
        .catch(function (error) {
          console.log(error);
        });
  },
}
</script>