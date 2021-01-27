<!--  -->
<template>
  <div class="rest_box">
    <div class="empty_left"></div>
    <div class="form_right">
      <div class="form_right_header" style="height: 60px"></div>
      <div class="form_top">
        <el-form
          :inline="true"
          :model="form"
          class="demo-form-inline"
          :rules="rules"
          ref="restForm"
        >
          <el-form-item label="姓名" prop="name">
            <el-input
              v-model="form.name"
              placeholder="姓名"
              clearable
            ></el-input>
          </el-form-item>
          <el-form-item label="工号" prop="usernumber">
            <el-input
              v-model.number="form.usernumber"
              placeholder="工号"
              clearable
            ></el-input>
          </el-form-item>

          <!-- 时间开始 -->
          <el-form-item label="入职时间" required>
            <el-col :span="22">
              <el-date-picker
                type="date"
                placeholder="请选择入职时间"
                v-model="form.entertime"
                value-format="yyyy-MM-dd"
                style="width: 100%"
              ></el-date-picker>
            </el-col>
          </el-form-item>
          <!-- 时间结束 -->

          <el-form-item label="一级部门" required>
            <el-select v-model="form.region" placeholder="一级部门">
              <el-option label="运营中心" value="运营中心"></el-option>
              <el-option label="IT部门" value="IT部门"></el-option>
              <el-option label="研发中心" value="研发中心"></el-option>
              <el-option label="销售中心" value="销售中心"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="onSearch('restForm')"
              >查询</el-button
            >
          </el-form-item>
        </el-form>
      </div>
      <!-- table开始 -->

      <div class="form_bottom">
        <el-table :data="resdata" border style="width: 100%">
          <el-table-column fixed prop="name" label="姓名" width="180">
          </el-table-column>
          <el-table-column prop="idcard" label="工号" width="150">
          </el-table-column>
          <el-table-column prop="boarddate" label="入职日期" width="150">
          </el-table-column>
          <el-table-column prop="departmentone" label="一级部门" width="120">
          </el-table-column>
          <el-table-column prop="departmenttwo" label="二级部门" width="120">
          </el-table-column>
          <el-table-column prop="year" label="年假时数" width="120">
          </el-table-column>
          <el-table-column prop="workovertime" label="平时加班数" width="120">
          </el-table-column>
          <el-table-column prop="alltime" label="总时数" width="120">
          </el-table-column>
          <el-table-column prop="taketime" label="已休时数" width="120">
          </el-table-column>
          <el-table-column prop="repairtime" label="可休时数" width="120">
          </el-table-column>
          <el-table-column fixed="right" label="操作" width="100">
            <template slot-scope="scope">
              <el-button
                @click="handleClick(scope.row)"
                type="text"
                size="small"
                >查看</el-button
              >
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},

  data() {
    //这里存放数据

    return {
      resdata: [],
      //   allworktime:()=>{
      //   return  parseInt(this.usualwroks-0)
      // //  return  111
      // },
      //form数据
      flag:false,
      form: {
        name: "",
        usernumber: "",
        region: "",
        entertime: "",
      },

      rules: {
        name: [
          { required: true, message: "请输入正确的名字", trigger: "blur" },
        ],
        usernumber: [
          {
            required: true,
            type: "number",
            message: "请输入正确工号",
            trigger: ["blur"],
          },
        ],
      },
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    onSearch: function (el) {
      //得再次校验表单
      console.log(this.form);
      console.log(el);
      //  console.log(this.$refs[el]);
      this.$refs[el].validate((boolean, object) => {
        console.log(boolean, object);
        let username = this.form.name;
        let usernumber = this.form.usernumber;
        let region = this.form.region;
        let entertime = this.form.entertime;
        this.$http
          .get("http://rap2api.taobao.org/app/mock/276482/getPersonneInfo", {
            name: username,
            idcard: usernumber,
            boarddate: entertime,
            departmentone: region,
          })
          .then((res) => {
            let result = res.data;
            // this.res = result;
            // console.log(this.res);
            //  this.flag=false
            for(let item of result){
              

                  if(   item.name === username &&
                item.idcard === usernumber &&
                item.departmentone === region &&
                item.boarddate === entertime){
                  console.log("输入正确，返回mock数据", res);
                console.log(result);
                   this.resdata = result;
                    
                }else{
                  return 
                // console.log('查无此人，请重新填写')
                 
                }
            }
          //   result.map((item) => {
          //  this.flag=true
          //     if (
          //       item.name === username &&
          //       item.idcard === usernumber &&
          //       item.departmentone === region &&
          //       item.boarddate === entertime
          //     ) {
          //       console.log("输入正确，返回mock数据", res);
          
          //     }else{
          //       alert('查无此人，请重新填写')
          //     }
          //   });
            
          });
      });
    },
    handleClick(row) {
      console.log(row); //table里面的methods
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style  scoped lang='less'>
.rest_box {
  display: flex;
  width: 100%;
  .empty_left {
    width: 16.66%;
  }
  .form_right {
    width: 83.33%;
    .form_top {
      height: 66px;
      display: flex;
    }
    .form_bottom {
      width: 1300px;
    }
  }
}
</style>