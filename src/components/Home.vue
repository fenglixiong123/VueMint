<template>
    <div>
      <!--体验头部导航的使用-->
      <mt-header title="美团饿了么联合外卖" fixed>
        <router-link to="/" slot="left">
          <mt-button icon="back">返回</mt-button>
        </router-link>
        <mt-button icon="more" slot="right"></mt-button>
      </mt-header>
      <!--switch控件使用-->
      <div style="margin-top: 50px">
        <mt-cell title="开启通知">
          <mt-switch v-model="openValue1" @change="changeStatus"></mt-switch>
        </mt-cell>
        <mt-cell title="开启声音">
          <mt-switch v-model="openValue2" @change="changeStatus"></mt-switch>
        </mt-cell>
      </div>
      <div>
        <mt-cell title="哈哈哈哈">
          下面展示的是导航内容的切换方式
        </mt-cell>
      </div>
      <!--mt-cell表格-->
      <div class="myDiv">
        <mt-cell class="page-part" title="当前选中" :value="selected" />
      </div>
      <!--内容为下面mt-tabbar服务-->
      <mt-tab-container class="page-tabbar-container" v-model="selected">
        <mt-tab-container-item id="外卖">
          <div class="myDiv">
            <!--图片轮播插件-->
            <mt-swipe :auto="500">
              <mt-swipe-item v-for="(item,index) in imgList" :key="index">
                <img :src="item.img" :alt="item.alt" width="100px" height="100px">
              </mt-swipe-item>
            </mt-swipe>
          </div>
          <div class="myDiv">
            <!--Range控件-->
            <mt-range v-model="rangeValue" :min="0" :max="10" :step="1" :bar-height="5"></mt-range>
          </div>
          <div class="myDiv">
            <mt-progress :value="20" :bar-height="5"></mt-progress>
          </div>
          <div class="myDiv">
            <mt-popup
              class="mint-popup"
              v-model="popupVisible"
              position="top"
              popup-transition="popup-fade">
              速速退去
            </mt-popup>
            <br/>
            Popup:<mt-button type="primary" size="small" @click="clickPopup">点我</mt-button>
          </div>
          <div class="myDiv">
            <br/>
            Toast:<mt-button type="primary" size="small" @click="clickToast">点我</mt-button>
          </div>
          <div class="myDiv">
            <br/>
            Indicator:<mt-button type="primary" size="small" @click="clickIndicator">点我</mt-button>
          </div>
          <div class="myDiv">
            <br/>
            MessageBox:<mt-button type="primary" size="small" @click="clickMessageBox">点我</mt-button>
          </div>
          <div class="myDiv">
            <br/>
            <mt-actionsheet
              :actions="actions"
              v-model="sheetVisible">
            </mt-actionsheet>
            ActionSheet:<mt-button type="primary" size="small" @click="clickActionSheet">点我</mt-button>
          </div>
          <div class="myDiv" style="height: 150px">
            Spinner
            <mt-spinner color="red" type="snake"></mt-spinner>
            <mt-spinner color="red" type="double-bounce"></mt-spinner>
            <mt-spinner color="red" type="triple-bounce"></mt-spinner>
            <mt-spinner color="red" type="fading-circle"></mt-spinner>
          </div>
          <div class="myDiv">
            Search
            <mt-search
              v-model="searchValue"
              cancel-text="取消"
              placeholder="搜索">
            </mt-search>
          </div>
          <div class="myDiv">
            <br/>
            <br/>
            <mt-badge type="primary">30</mt-badge>
            <mt-badge type="error">10</mt-badge>
            <mt-badge type="success">10</mt-badge>
            <mt-badge type="warning">10</mt-badge>
          </div>
          <div >
            <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
            <mt-field label="邮箱" placeholder="请输入邮箱" type="email" v-model="email"></mt-field>
            <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
            <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="phone"></mt-field>
            <mt-field label="网站" placeholder="请输入网址" type="url" v-model="website"></mt-field>
            <mt-field label="数字" placeholder="请输入数字" type="number" v-model="number"></mt-field>
            <mt-field label="生日" placeholder="请输入生日" type="date" v-model="birthday"></mt-field>
            <mt-field label="自我介绍" placeholder="自我介绍" type="textarea" rows="4" v-modal="introduction"></mt-field>
          </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="订单">
          <mt-cell v-for="(n,index) in 5" :key="index" :title="'订单 ' + n" />
        </mt-tab-container-item>
        <mt-tab-container-item id="发现">
          <mt-cell v-for="(n,index) in 7" :key="index" :title="'发现 ' + n" />
        </mt-tab-container-item>
        <mt-tab-container-item id="我的">
          <div class="page-part">
            <!-- cell -->
            <mt-cell v-for="(n,index) in 12" :key="index" :title="'我的 ' + n" />
          </div>
          <router-link to="/">
            <!-- button -->
            <mt-button type="danger" size="large">退出</mt-button>
          </router-link>
        </mt-tab-container-item>
      </mt-tab-container>
      <!--底部导航的使用-->
      <mt-tabbar v-model="selected" fixed>
        <mt-tab-item id="外卖">
          <img slot="icon" src="/static/img/apple.jpg">
          外卖
        </mt-tab-item>
        <mt-tab-item id="订单">
          <img slot="icon" src="/static/img/video.jpg">
          订单
        </mt-tab-item>
        <mt-tab-item id="发现">
          <img slot="icon" src="/static/img/drunk.jpg">
          发现
        </mt-tab-item>
        <mt-tab-item id="我的">
          <img slot="icon" src="/static/img/wood.jpg">
          我的
        </mt-tab-item>
      </mt-tabbar>
    </div>
</template>

<script>
    import {Toast} from "mint-ui";
    import {Indicator} from "mint-ui";
    import { MessageBox } from 'mint-ui';
    export default {
      name: "Home",
      data(){
        return{
          openValue1:true,
          openValue2:false,
          selected:'外卖',
          imgList:[
            {img:'/static/img/apple.jpg',alt:'1'},
            {img:'/static/img/drunk.jpg',alt:'2'},
            {img:'/static/img/video.jpg',alt:'3'},
            {img:'/static/img/wood.jpg',alt:'4'},
          ],
          rangeValue:0,
          popupVisible:false,
          actions:[
            {
              name: '拍照',
              // method : this.getCamera// 调用methods中的函数
            }, {
              name: '从相册中选择',
              // method : this.getLibrary// 调用methods中的函数
            }
          ],
          sheetVisible:false,
          searchValue:'日历',
          username:'',
          password:'',
          email:'',
          phone:'',
          website:'',
          number:'',
          birthday:'',
          introduction:''
        }
      },
      methods:{
        changeStatus:function (status) {
          console.log('switcher status : ',status)
        },
        clickPopup:function () {
          this.popupVisible = !this.popupVisible;
        },
        clickToast:function () {
          Toast({
            message: '操作成功',
            iconClass: 'icon icon-success'
          });
        },
        clickIndicator:function () {
          Indicator.open({
            text: '加载中...',
            spinnerType: 'fading-circle'
          });
          setTimeout(function () {
            Indicator.close();
          },1000)
        },
        clickMessageBox:function () {
          MessageBox('提示', '操作成功');
        },
        clickActionSheet:function () {
          this.sheetVisible = !this.sheetVisible;
        }
      }
    }
</script>

<style scoped>
.myDiv{
  width: 100%;
  height: 100px;
  border: 1px solid blue;
}
.page-tabbar-container {
  margin-bottom: 55px;
}
.mint-popup{
  color: white;
  line-height: 50px;
  width: 100%;
  height: 50px;
  text-align: center;
  background-color: rgba(0,0,0,.7);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}
</style>
