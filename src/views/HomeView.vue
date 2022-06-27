<template>
  <van-tabs v-model:active="state.active" swipeable>
    <van-tab :key="idx" v-for="(item, idx) in state.tabInfo" :title="item.label">
      <div class="video-content">
        <div @click="onPlay(item1)" :key="idx1" v-for="(item1, idx1) in item.list" class="video-item">
          <img :src="item1.imgUrl" alt="">
        </div>
      </div>
    </van-tab>
  </van-tabs>
</template>


<script lang="ts" setup>
import Config from '@/common/config';
import { get, post } from '@/common/http';
import { reactive } from 'vue';
const state = reactive({
  active: 0,
  tabInfo: [
    {
      label: "顺序",
      page: 1,
      list: [
        // {
        //   imgUrl: "http://192.168.1.18:8080/image/zw_XtDSALO7C_f9999.png",
        //   path: "http://192.168.1.18:8080/video/zw_XtDSALO7C.mp4"
        // }
      ] as any[]
    }, {
      label: "随机",
      page: 1,
      list: [

      ]
    }, {
      label: "最近",
      page: 1,
      list: [

      ]
    }
  ]
})

const onPlay = (item: any) => {
  window.open(item.path, '_blank')
}

const getPageData = () => {
  post('file/video', {
    page: 1,
    pageSize: 10,
    random: true
  }).then((res: any) => {
    state.tabInfo[state.active].list = res.data.map((x: any) => {
      return {
        imgUrl: `${Config.baseURL}${x.thum}`,
        path: `${Config.baseURL}/video${x.storeIdx}/${x.name}`
      }
    })
    console.log('数据', res)
  })
}
getPageData()
</script>

<style lang="less" scoped>
.video-content {
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  &>.video-item {
    width: calc(50% - 2px);
    padding-bottom: 30%;
    margin-top: 4px;
    background-color: gray;
    box-sizing: border-box;
    position: relative;

    &:nth-child(odd) {
      margin-right: 2px;
    }

    &:nth-child(even) {
      margin-left: 2px;
    }

    &>img {
      position: absolute;
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
}
</style>