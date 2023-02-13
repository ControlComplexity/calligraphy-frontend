<template>
 <div id="theory">           
  <li v-for="item in list" @click="theoryDetail(item)">
<img v-bind:src="item.Image"  width="100" height="70"> {{item.Title}}
</li></div>
<Pagination></Pagination>
</template>

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
      list: this.list
    }
  },
  methods: {
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