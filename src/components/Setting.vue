<template>
  <div>

    <mt-cell title="开关状态">
      {{this.$store.state.switcher}}
    </mt-cell>

    <mt-cell>
      <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
    </mt-cell>

    <mt-cell >
      <mt-button type="primary" @click="checkPassword">验证</mt-button>
    </mt-cell>

    <div v-show="show">
      <mt-cell title="切换">
        <mt-switch v-model="boxSwitcher" @change="changeSwitcher"></mt-switch>
      </mt-cell>
    </div>

  </div>
</template>

<script>
  import {Toast} from "mint-ui";
    export default {
        name: "Setting",
      data(){
          return{
            password:'',
            show:false,
            boxSwitcher:this.$store.state.switcher==='open',
          }
      },
      methods:{
        checkPassword:function () {
          if(this.password==='welcome123'){
            console.log("password success");
            this.password = '';
            this.show = true;
            Toast({
              message: '恭喜你，密码正确',
              iconClass: 'icon icon-success'
            });
          }else {
            console.log("password err");
            this.password = '';
            this.show = false;
            Toast({
              message: '您输入的密码有误',
              iconClass: 'icon icon-success'
            });
          }
        },
        changeSwitcher:function (value) {
          console.log(value);
          if(value){
            this.$store.dispatch('modifySwitcher',{switcher:'close'});
          }else{
            this.$store.dispatch('modifySwitcher',{switcher:'open'});
          }
        },
      }
    }
</script>

<style scoped>

</style>
