<template>
  <div class="info_page-box">
    <div class="video-box">
      <video
        controls
        class="video_content-box"
        src="http://company.float.run/assets/1650859818753.mp4"
      ></video>
    </div>
    <div class="thum-box"></div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="less" scoped>
.info_page-box {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: stretch;
  flex-direction: column;
  & > .video-box {
    height: 0;
    padding-bottom: 50%;
    position: relative;
    & > .video_content-box {
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
    }
  }
  & > .thum-box {
    height: 0;
    flex-grow: 1;
  }
}
</style>
