<!--  -->
<template>
  <div class="myadminbox">
    <div class="myadmin_left">
      <ul class="menu_list">
        <el-menu     class="el-menu-vertical-demo"  @open="handleOpen"   @close="handleClose"   background-color="rgb(50, 64, 87)"         text-color="#fff"         >
          <el-submenu index="1"  >
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>首页</span>
            </template>          
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>HR模块</span>
            </template>
              <el-menu-item index='/hrlist'  @click="()=>{this.$router.push('./dashboard'); this.text1='HR模块';this.text2='人员资料管理'}">人员资料管理</el-menu-item>
              <el-menu-item index='/hrlist'  @click="()=>{this.$router.push('./dashboard'); this.text1='HR模块';this.text2='工资管理'}">工资管理</el-menu-item>
              <el-menu-item index='/hrlist'  @click="()=>{this.$router.push('./dashboard'); this.text1='HR模块';this.text2='调休管理'}">调休管理</el-menu-item>
              <el-menu-item index='/hrlist'  @click="()=>{this.$router.push('./dashboard'); this.text1='HR模块';this.text2='人员分析'}">人员分析</el-menu-item>
          </el-submenu>
             <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>OA模块</span>
            </template>
              <el-menu-item index="/oalist" @click="()=>{this.$router.push('./oalist');this.text1='OA模块';this.text2='补贴申请'}" >补贴申请</el-menu-item>
              <el-menu-item index="/oalist" @click="()=>{this.$router.push('./oalist');this.text1='OA模块';this.text2='离职申请'}">离职申请</el-menu-item>
          </el-submenu>

          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>EAM模块</span>
            </template>
              <el-menu-item index="/emalist" @click="()=>{this.$router.push('/emalist');this.text1='EAM模块';this.text2='资产信息'}">资产信息</el-menu-item>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>SRM模块</span>
            </template>       
              <el-menu-item index="/srmlist" @click="()=>{this.$router.push('./srmlist');this.text1='SRM模块';this.text2='供应商信息'}" >供应商信息</el-menu-item>
              <el-menu-item index="/srmlist" @click="()=>{this.$router.push('./srmlist');this.text1='SRM模块';this.text2='客户信息'}">客户信息</el-menu-item>
          </el-submenu>
        </el-menu>
      </ul>
    </div>
    <div class="myadmin_right">
        <div class="myadmin_right_navtitle">
                <!--面包屑导航-->
<el-breadcrumb separator="/" >
  <el-breadcrumb-item :to="{ path:'/dashboard' }">首页</el-breadcrumb-item>
  <el-breadcrumb-item v-if="text1!==''"><a href="#">{{text1}}</a></el-breadcrumb-item>
 <el-breadcrumb-item v-if="text2!==''"><a href="">{{text2}}</a></el-breadcrumb-item>

</el-breadcrumb>

        </div>
        <div class="myadmin_right_content"></div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
// import router from '../router/index.js'

export default {
    name:'',
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
        text1:'',
        text2:'',
//  position: "1",
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
        console.log(111);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
    
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    //    this.position = this.$route.path;
  },
  beforeCreate() {
    //   this.position = this.$route.path;
  }, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style  scoped lang="less">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.myadminbox {
  height: 100vh;
  display: flex;
  .myadmin_left {
    width: 16.66667%;
    height: 100vh;
    background-color: rgb(50, 64, 87);
    .el-menu-item{
        padding-left: 10px;
    }
  
  }
  .myadmin_right {
    overflow: auto;
    width: 83.33333%;
    height: 100vh;
    background-color: rgb(255, 255, 255);
    .myadmin_right_navtitle{
            display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    padding: 10px;
    width: 100%;
    background-color: #eff2f7;
    }
  }
}
</style>