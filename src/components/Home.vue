<template>
    <div>
      Home
      <mt-header title="时光" fixed></mt-header>
      <mt-tab-container class="page-tabbar-container" v-model="selected">
        <mt-tab-container-item id="外卖">
          <div class="smallDiv">
            <ThreeSmallCube/>
          </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="订单">
          <div class="bigDiv">
            <ThreeBigCube/>
          </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="发现">
          <div class="photoDiv">
            <PhotoWall :imgList="imgList" :time="1000" width="100%" />
          </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="我的">
          <div class="setDiv">
            <Setting/>
          </div>
        </mt-tab-container-item>
      </mt-tab-container>
      <!--底部导航的使用-->
      <mt-tabbar v-model="selected" fixed>
        <mt-tab-item id="外卖">
          <img slot="icon" src="/static/img/apple.jpg">
          时光
        </mt-tab-item>
        <mt-tab-item id="订单">
          <img slot="icon" src="/static/img/video.jpg">
          我们
        </mt-tab-item>
        <mt-tab-item id="发现">
          <img slot="icon" src="/static/img/drunk.jpg">
          精彩
        </mt-tab-item>
        <mt-tab-item id="我的">
          <img slot="icon" src="/static/img/wood.jpg">
          我的
        </mt-tab-item>
      </mt-tabbar>
    </div>
</template>

<script>
    import ThreeSmallCube from "./ThreeSmallCube";
    import ThreeBigCube from "./ThreeBigCube";
    import Setting from "./Setting";
    import PhotoWall from "./toy/PhotoWall";
    export default {
        name: "Home",
      data(){
          return {
            selected: '外卖',
          }
      },
      computed:{
        imgList:function () {
          let switcher = this.$store.state.switcher;
          if(switcher==='open'){
            return [
              {img:'static/img/shi01.jpg',alt:'1'},
              {img:'static/img/shi02.jpg',alt:'2'},
              {img:'static/img/shi03.jpg',alt:'3'},
              {img:'static/img/shi04.jpg',alt:'4'},
              {img:'static/img/shi05.jpg',alt:'5'},
              {img:'static/img/shi06.jpg',alt:'6'},
            ]
          }else{
            return [
              {img:'static/img/boss01.jpg',alt:'1'},
              {img:'static/img/boss02.jpg',alt:'2'},
              {img:'static/img/boss03.jpg',alt:'3'},
              {img:'static/img/boss04.jpg',alt:'4'},
              {img:'static/img/boss05.jpg',alt:'5'},
              {img:'static/img/boss06.jpg',alt:'6'},
            ]
          }
        }
      },
      components: {PhotoWall, Setting, ThreeBigCube, ThreeSmallCube}
    }
</script>

<style scoped>
.smallDiv{
  margin-top: 50px;
  width: 100%;
  height: 1200px;
}
.bigDiv{
  margin-top: 50px;
  width: 100%;
  height: 1400px;
}
.setDiv{
  margin-top: 30px;
  width: 100%;
  height: 500px;
}
.photoDiv{
  margin-top: 50px;
  width: 100%;
  height: 400px;
}
</style>
