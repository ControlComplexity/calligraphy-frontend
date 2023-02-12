<template>
    <TopHyperlink></TopHyperlink>
  <!-- <Swiper></Swiper> -->
 <Hyperlink></Hyperlink>     
 <Footer></Footer>   
</template>

<script>
import axios from 'axios'
import Hyperlink from '@/components/Hyperlink.vue'
import TopHyperlink from '@/components/TopHyperlink.vue'
import Footer from '@/components/Footer.vue'


export default {
  components: {
    Hyperlink,
    Footer,
    TopHyperlink,
  },
  name: 'HomeView',

}


</script>
