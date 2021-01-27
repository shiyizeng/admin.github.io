<!--  -->
<template>
  <div id="app">
    <div id="myChart" :style="{ width: '100%', height: '380px' }"></div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  name: "app",

  components: {},
  data() {
    //这里存放数据
    return {
    resdata:[],
      //这个option就是在echarts官网demo中的option，这个对象中存放图标的各参数配置
      option: {
        
        title: {
          text: "富贵公司人员年龄分布",
          textAlign: "center",
          left: "50%",
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["40%", "70%"],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "40",
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
            },
            data:
             [
            //   { value: 1048, name: "搜索引擎" },
            //   { value: 735, name: "直接访问" },
            //   { value: 580, name: "邮件营销" },
            //   { value: 484, name: "联盟广告" },
            //   { value: 300, name: "视频广告" },

            ],
          },
        ],
      },
    };
  },
  //监听属性 类似于data概念
  computed: {

//                    for(let key in this.resdata){
// this.option.series[0].data.push({name:this.resdata[key].name})
//           }
  },
   
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
      
    draw() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      myChart.setOption(this.option);
    },
    loadData() {
        this.$http.get('http://rap2api.taobao.org/app/mock/276482/getPersonneInfo').then((res)=>{
            console.log(res);
            this.resdata=res
        })
      //请求接口，假设接口返回的数据我们用tableData接收了
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.draw();
    this. loadData()
  },
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style  lang='less' scoped>
</style>