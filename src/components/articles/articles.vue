<template>
    <el-container class="">
    <!-- 头部区域 -->
    <el-header>
      <div class="nav">
        <!-- 首页 -->
        <el-link
          href="http://localhost:8080/#/home"
          target="_blank"
          style="font-size: 15px"
          class="first-page"
          icon="el-icon-s-home"
          >首页</el-link
        >

        <!-- 文章列表 -->
         <el-link
          href="http://localhost:8080/#/ariticles"
          target="_blank"
          style="font-size: 15px"
          class="first-page"
          icon="el-icon-s-home"
          >文章列表</el-link
        >
        <!-- 文章分类 -->

        <el-dropdown class="artixle-category">
          <i
            style="line-height: 60px; font-style: normal"
            class="el-icon-s-order"
            >文章分类</i
          >
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>查看</el-dropdown-item>
            <el-dropdown-item>新增</el-dropdown-item>
            <el-dropdown-item>删除</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>

        <!-- 生活 -->
        <el-link
          href=""
          target="_blank"
          style="font-size: 15px"
          class="life-page"
          icon="el-icon-camera-solid"
          >生活</el-link
        >
      </div>
      <div class="logout">
        <el-button type="info" @click="logout" class="btnLogout"
          >退出</el-button
        >
      </div>
    </el-header>

     
    <!-- 主体区域 -->
    <el-main>
 <el-card class="box-card">

    <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      fixed
      prop="date"
      label="日期"
      width="150">
    </el-table-column>
    <el-table-column
      prop="name"
      label="标题"
      width="500">
    </el-table-column>
   
  
    <el-table-column
      prop="region"
      label="分类"
      width="400">
    </el-table-column>
   
    <el-table-column
      fixed="right"
      label="操作"
      width="200">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.$index)" type="text" size="small" style="font-size:15px" >查看</el-button>
        <el-button type="text" size="small" style="font-size:15px" @click="edit(scope.$index)">编辑</el-button>
       
 
      </template>

      
    </el-table-column>
  </el-table>

 </el-card>

    </el-main>
          <el-dialog title="编辑" :visible.sync="dialogFormVisible">
  <el-form :model="form">
    <el-form-item label="标题" :label-width="formLabelWidth">
      <el-input v-model="form.name" autocomplete="off" disabled="ture"></el-input>
    </el-form-item>
    <el-form-item label="分类" :label-width="formLabelWidth">
      <el-select v-model="form.region" placeholder="请选择类别">
        <el-option label="前端问题概述" value="前端问题概述"></el-option>
        <el-option label="学习笔记" value="学习笔记"></el-option>
         <el-option label="生活感悟" value="生活感悟"></el-option>
      </el-select>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="sure" v-model="form.index">确 定</el-button>
  </div>
</el-dialog>
</el-container>

 
</template>

<script>
export default {
      data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '',
          region: '  ',
         
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          region: '上海市普陀区金沙江路 1517 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          region: '上海市普陀区金沙江路 1519 弄',
          zip: 200333
        }, {
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          region: '上海市普陀区金沙江路 1516 弄',
          zip: 200333
        }],
       
        dialogFormVisible: false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: '',
          index:''
        },
        formLabelWidth: '120px'
      }
    },
    methods:{
        logout() {
      // 清空token
      window.sessionStorage.clear()
      // 跳转到登录页面
      this.$router.push('/login')
    },
        handleClick(index){
            console.log(index);
            if(index==0){
this.$router.push('/artone')
            }
            else if(index==1){
                this.$router.push('/arttwo')
            }
            else if(index==2){
                this.$router.push('/artthree')
            }
            
        },
        edit(index){
 this.dialogFormVisible = true;
//  const index=$event.currentTarget.index
 console.log(index);
 console.log(this.tableData[index]);
 this.form.index=index
 this.form.name=this.tableData[index].name
his.form.region=this.tableData[index].region
        },
        sure(){
this.dialogFormVisible = false
 console.log(this.form.index);
 const index=this.form.index


this.tableData[index].name= this.form.name
this.tableData[index].region= this.form.region

        }
       
      
    }
    
}
</script>

<style lang="less" scoped>
.el-container {
  height: 100%;

  background-image: url('mati.jpg');
}

.el-header {
  height: 40px;
  display: flex;
  padding: 0;
  background-color: rgba(0, 0, 0, 0.3);

  .nav {
    flex: 80%;
    justify-content: center;

    .first-page {
      margin-right: 25px;
    }
    .artixle-category {
      margin-right: 25px;
    }

    .life-page {
      margin-right: 25px;
    }
  }

  .logout {
    flex: 20%;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    // align-self: flex-end;

    .btnLogout {
      line-height: 3px;
      height: 20px;
    }
  }
}

.el-main {
   
  display: flex;
  padding-top: 40px;
 
.box-card{
    width: 100%;
}
}

.el-aside{
    background-color:  rgba(0, 0, 0, 0.3);
}
</style>