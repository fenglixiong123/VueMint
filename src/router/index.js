import Vue from 'vue'
import Router from 'vue-router'
import Home from "../components/Home";
import LearnMint from "../components/LearnMint";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/home'
    },
    {
      path:'/home',
      name:'Home',
      component:Home
    },
    {
      path:'/learnMint',
      name:'LearnMint',
      component:LearnMint
    }
  ]
})
