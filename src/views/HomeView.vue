<template>
    <TopHyperlink></TopHyperlink>
  <!-- <Swiper></Swiper> -->
<Detail></Detail>
 <Hyperlink></Hyperlink>     
 <Footer></Footer>   
</template>

<script>
import axios from 'axios'
import Hyperlink from '@/components/Hyperlink.vue'
import TopHyperlink from '@/components/TopHyperlink.vue'
import Footer from '@/components/Footer.vue'
import Detail from '@/components/Detail.vue'

export default {
  components: {
    Hyperlink,
    Footer,
    TopHyperlink,
    Detail,
  },
  name: 'HomeView',

}


</script>
