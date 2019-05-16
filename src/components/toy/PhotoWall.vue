<template>
    <div class="ppp">
      <mt-swipe :auto="time">
        <mt-swipe-item v-for="(item,index) in imgList" :key="index">
          <img :src="item.img" :alt="item.alt" :width="width" :height="height">
        </mt-swipe-item>
      </mt-swipe>
    </div>
</template>

<script>
    export default {
      name: "PhotoWall",
      data(){
          return{

          }
      },
      props:['imgList','time','width','height']
    }
</script>

<style scoped>
.ppp{
  width: 100%;
  height: 400px;
}
</style>
