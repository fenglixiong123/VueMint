<template>
    <div>
      <mt-range v-model="op" :min=0 :max=10
                :step=1 :bar-height="10"
                @change="changeRange">
        <div slot="start">0</div>
        <div slot="end">10</div>
      </mt-range>
      <XiongTing v-if="this.$store.state.switcher==='open'" :opacity="op/10"/>
      <BigBoss v-if="this.$store.state.switcher==='close'" :opacity="op/10"/>
    </div>
</template>

<script>
  import Cube3D from "./toy/Cube3D";
  import Cube3DBig from "./toy/Cube3DBig";
  import BigBoss from "./tea/BigBoss";
  import XiongTing from "./tea/XiongTing";
    export default {
        name: "ThreeBigCube",
      components: {XiongTing, BigBoss, Cube3DBig, Cube3D},
      data(){
        return{
          op : 8
        }
      },
      methods:{
        changeRange:function (value) {
          console.log(value)
        }
      }
    }
</script>

<style scoped>

</style>
