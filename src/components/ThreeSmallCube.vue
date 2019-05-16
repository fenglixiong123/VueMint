<template>
    <div>
      <mt-range v-model="op" :min=0 :max=10
                :step=1 :bar-height="10"
                @change="changeRange">
        <div slot="start">0</div>
        <div slot="end">10</div>
      </mt-range>

      <TingTing v-if="this.$store.state.switcher==='open'" :opacity="op/10"/>
      <SmallBoss v-if="this.$store.state.switcher==='close'" :opacity="op/10"/>

    </div>
</template>

<script>
  import Cube3D from "./toy/Cube3D";
  import BigBoss from "./tea/BigBoss";
  import SmallBoss from "./tea/SmallBoss";
  import TingTing from "./tea/TingTing";
    export default {
        name: "ThreeSmallCube",
      data(){
        return{
          op : 1
        }
      },
      methods:{
        changeRange:function (value) {
          console.log(value)
        }
      },
      components: {TingTing, BigBoss, Cube3D,SmallBoss}
    }
</script>

<style scoped>
.myDiv{
  width: 100px;
  height: 700px;
}
</style>
