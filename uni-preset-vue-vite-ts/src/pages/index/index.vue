<script setup lang="ts">
import { ref } from 'vue'
const title = ref('Hello')
</script>

<template>
  <view class="content">
    <image class="logo" src="/static/logo.png" />
    <view class="text-area">
      <text class="title">{{ title }}</text>
	  <h1 class="txt">响应式布局调试用响应式布局调试用响应式布局调试用响应式布局调试用</h1>
    </view>
  </view>
</template>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
.txt {
	font-size: 40px;
}
</style>

<!-- <style lang="scss" scoped>
body{
  .text-area{
    background-color: rgb(189, 16, 16);
  }
}
</style> -->