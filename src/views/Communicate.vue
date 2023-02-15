<template>
  <div class="_block">
    <div class="media_block">
      <div class="media" v-for="(media,i) in mediaList" :key="i">
        <div class="image" :style="{backgroundImage:`url(${media.src})`}">
          <div class="desc_block">
            <div class="desc">
              <span style="background-color:#eee;">{{media.label}}</span>
              <span>{{media.desc}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/**
 *  交流与学习
 */
  export default {
    name: 'Communicate',
    props: {
      msg: String
    },
    data(){
      return {
        mediaList:[
          {
            type:'img',
            src:'http://101.43.39.188/image/calligraphy/carousel/carousel3.jpg',
            label:'图片',
            desc:'这是一段描述文字',
            link:''
          },
          {
            type:'img',
            src:'http://101.43.39.188/image/calligraphy/carousel/carousel3.jpg',
            label:'图片2',
            desc:'这是一段描述文字2',
            link:''
          },
          {
            type:'img',
            src:'http://101.43.39.188/image/calligraphy/carousel/carousel3.jpg',
            label:'图片2',
            desc:'这是一段描述文字2',
            link:''
          },
          {
            type:'img',
            src:'http://101.43.39.188/image/calligraphy/carousel/carousel3.jpg',
            label:'图片2',
            desc:'这是一段描述文字2',
            link:''
          },
          {
            type:'img',
            src:'http://101.43.39.188/image/calligraphy/carousel/carousel3.jpg',
            label:'图片2',
            desc:'这是一段描述文字2',
            link:''
          },
          {
            type:'img',
            src:'http://101.43.39.188/image/calligraphy/carousel/carousel3.jpg',
            label:'图片2',
            desc:'这是一段描述文字2',
            link:''
          }
        ]
      }
    }
  }
</script>
<style scoped>
  ._block{
    width:100vw;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .media_block{
    margin: 10px;
    width: 80vw;
    height: 500px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: cloumn;
    align-items: center;
    background-color: #efaefa;
  }
  .media{
    position: relative;
    width: 30%;
    height: calc(50% - 20px);
    background-color: #efa;
    margin: 5px;
  }
  .image{
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center;
    transition: background-size ease-in .5s;
  }
  .media:hover .image{
    background-size: 120%;
  }
  .desc_block{
    top: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column-reverse;
  }
  .desc{
    margin: 0 0 10px 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
</style>