<template>
  <div class="home">
    <el-container>
      <el-header>header</el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu
            :default-active="position"
            text-color="#fff"
            background-color="#333744"
            class="el-menu-vertical-demo nav_menu"
            @open="handleOpen"
            @close="handleClose"
            :unique-opened="true"
            :router="true"
            :collapse="isCollapse"
          >
            <!-- 用户管理 -->
            <el-submenu index="用户管理">
              <template slot="title">
                <i class="el-icon-user-solid"></i>
                <span>用户管理</span>
              </template>
              <el-menu-item
                index="/"
                @click="
                  () => {
                    this.$router.push('/');
                    this.positioncA = '用户管理';
                    this.positionc = '用户列表';
                  }
                "
              >
                <i class="el-icon-menu"></i>
                用户列表
              </el-menu-item>
            </el-submenu>
            <!--权限管理-->
            <el-submenu index="权限管理">
              <template slot="title">
                <i class="el-icon-s-data"></i>
                <span slot="title">权限管理</span>
              </template>
              <el-menu-item  index="/rolelist"  @click="() => {this.$router.push('/rolelist'); this.positioncA = '权限管理'; this.positionc = '角色管理'; }" >
                <i class="el-icon-menu"></i>
                角色管理
              </el-menu-item>
              <el-menu-item  index="/rights"   @click="() => { this.$router.push('/rights'); this.positioncA = '权限管理';  this.positionc = '权限列表'; } " >
                <i class="el-icon-menu"></i>
                权限列表
              </el-menu-item>
            </el-submenu>
            <!--商品管理-->
            <el-submenu index="商品管理">
              <template slot="title">
                <i class="el-icon-s-cooperation"></i>
                <span slot="title">商品管理</span>
              </template>
              <el-menu-item
                index="/goods"
                @click="
                  () => {
                    this.$router.push('/goods');
                    this.positioncA = '商品管理';
                    this.positionc = '商品列表';
                  }
                "
              >
                <i class="el-icon-menu"></i>
                商品列表
              </el-menu-item>
              <el-menu-item
                index="/classify"
                @click="
                  () => {
                    this.$router.push('/classify');
                    this.positioncA = '商品管理';
                    this.positionc = '分类参数';
                  }
                "
              >
                <i class="el-icon-menu"></i>
                分类参数
              </el-menu-item>
              <el-menu-item
                index="/classifyGoods"
                @click="
                  () => {
                    this.$router.push('/classifyGoods');
                    this.positioncA = '商品管理';
                    this.positionc = '商品分类';
                  }
                "
              >
                <i class="el-icon-menu"></i>
                商品分类
              </el-menu-item>
            </el-submenu>
            <!--订单管理-->
            <el-submenu index="订单管理">
              <template slot="title">
                <i class="el-icon-s-order"></i>
                <span slot="title">订单管理</span>
              </template>
              <el-menu-item
                index="/orderlist"
                @click="
                  () => {
                    this.$router.push('/orderlist');
                    this.positioncA = '订单管理';
                    this.positionc = '订单列表';
                  }
                "
              >
                <i class="el-icon-menu"></i>
                订单列表
              </el-menu-item>
            </el-submenu>
            <!--数据统计-->
            <el-submenu index="数据统计">
              <template slot="title">
                <i class="el-icon-s-platform"></i>
                <span slot="title">数据统计</span>
              </template>
              <el-menu-item
                index="/chart"
                @click="
                  () => {
                    this.$router.push('/chart');
                    this.positioncA = '数据统计';
                    this.positionc = '数据报表';
                  }
                "
              >
                <i class="el-icon-menu"></i>
                数据报表
              </el-menu-item>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-main>
          <!--面包导航-->
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/chart' }"
              >首页</el-breadcrumb-item
            >
            <el-breadcrumb-item v-if="positioncA !== ''">
              <a href="#">{{ positioncA }}</a>
            </el-breadcrumb-item>
            <el-breadcrumb-item v-if="positionc !== ''">{{
              positionc
            }}</el-breadcrumb-item>
          </el-breadcrumb>
          <br />
          <!--router-view路由视图处-->
          <el-card class="box-card">
            <router-view />
          </el-card>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      position: "1",
      positioncA: "",
      positionc: "",
      isCollapse: false,
    };
  },
  mounted() {
    this.position = this.$route.path;
  },
  beforeUpdate() {
    this.position = this.$route.path;
    if (this.$route.path === "/chart") {
      this.positioncA = "饼状图表";
      this.positionc = "";
    } else if (this.$route.path === "/") {
      this.positioncA = "用户管理";
      this.positionc = "用户列表";
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      // console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      // console.log(key, keyPath);
    },
  },
};
</script>