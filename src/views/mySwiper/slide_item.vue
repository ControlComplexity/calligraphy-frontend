<template>
  <div class="slide-item">
    <div class="item" v-for="(item, index) in slideItem" :key="index">
      <div class="item-box">
        <div class="type">{{ item.type }}</div>
        <div class="img-box">
          <img :src="item.url" alt="" />
        </div>

        <div class="content-box">
          <div class="info">{{ item.content }}</div>
        </div>
        <div class="detail-box">
          <div class="detail">
            <el-icon :size="18" :color="'#000'">
              <Timer />
            </el-icon>
            <div class="info">{{ item.time }}</div>
          </div>
          <div class="detail">
            <el-icon :size="18" :color="'#000'">
              <DeleteLocation />
            </el-icon>
            <div class="info">{{ item.time }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script >
import { defineComponent, reactive, toRefs } from 'vue'
export default defineComponent({
  name: '',
  props: {
    slideItem: {
      type: Array,
      required: true,
      default: [],
    },
  },
  setup(props, context) {
    console.log('setup')
    const data = reactive({})
    console.log('++++++++++++++++', props.slideItem)

    return {
      ...toRefs(data),
    }
  },
})
</script>

<style scoped lang='less'>
.slide-item {
  display: flex;
  .item {
    height: 300px;
    flex: 1;
    margin-left: 5px;
    .item-box {
      color: #000000;
      .type {
        margin-left: 8px;
        text-align: left;
        font-size: 16px;
        font-weight: bold;
        color: #000;
        display: block;
        line-height: 1em;
        padding-bottom: 1em;
      }
      .img-box {
        height: '150px';
        width: '200px';
        overflow: hidden;
        img {
          height: 150px;
          width: 200px;
          transition: all 0.5s ease 0.1s;
          &:hover {
            transform: scale(1.3);
          }
        }
      }
      .content-box {
        margin-left: 8px;
        margin-top: 12px;
        text-align: left;
        font-size: 18px;
        font-weight: bold;
      }
      .detail-box {
        .detail {
          margin-top: 8px;
          display: flex;
          .info {
            margin-left: 12px;
            color: #000;
            text-align: left;
            font-size: 16px;
            font-weight: bold;
          }
        }
      }
    }
  }
}
</style>