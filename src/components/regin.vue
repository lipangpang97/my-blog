<template>
    <el-container class="">
    <!-- 头部区域 -->
    <el-header>
      <div class="nav" style="color:#fff">
        <!-- 首页 -->
            <el-link
          type="primary"
            href="http://localhost:8080/home"
            style="font-size: 15px"
            class="first-page"
            icon="el-icon-s-home"
            >首页</el-link
          >

          <!-- 文章列表 -->
          <el-link
          type="primary"
            href="http://localhost:8080/articles"
            style="font-size: 15px"
            class="first-page"
            icon="el-icon-s-home"
            >文章列表</el-link
          >
          <!-- 文章分类 -->
          <el-link
           type="primary"
            href="http://localhost:8080/regin"
            style="font-size: 15px"
            class="first-page"
            icon="el-icon-s-order"
            >文章分类</el-link
          >

          <!-- 生活 -->
          <el-link
           type="primary"
            href="http://localhost:8080/life"
            style="font-size: 15px"
            class="life-page"
            icon="el-icon-camera-solid"
            >关于我</el-link
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
    :data="this.$store.state.reginData"
    border
    style="width: 100%">
    <el-table-column
      fixed
      prop="regin"
      label="分类"
      width="150">
    </el-table-column>
    <el-table-column
      prop="number"
      label="文章数量"
      width="500">
    </el-table-column>
   
  
    <el-table-column
      prop="describe"
      label="概述"
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
    <el-form-item label="分类" :label-width="formLabelWidth">
      <el-input v-model="form.regin" autocomplete="off" ></el-input>
    </el-form-item>
    <el-form-item label="概述" :label-width="formLabelWidth">
     <el-input v-model="form.describe" autocomplete="off" type="textarea" ></el-input>
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
        // tableData: [{
        //   regin: '前端技术总结',
        //   number: '2',
        //   describe: ' 记录前端遇到的一些问题，以及解决的方法 ',
         
        // }, {
          
        //   regin: '学习笔记',
        //    number: '1',
        //  describe: ' 学习前端和日语的总结笔记 ',
        // }, {
        //   regin: '日语散文摘抄',
        //    number: '1',
        //  describe: ' 优美的日语散文摘抄 ',
        // }],
       
        dialogFormVisible: false,
        form: {
          regin: '',
         describe:'',
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
this.$router.push('/reginone')
            }
            else if(index==1){
                this.$router.push('/artthree')
            }
            else if(index==2){
                this.$router.push('/artfour')
            }
          
        },
        edit(index){
 this.dialogFormVisible = true;

 this.form.index=index
 this.form.regin=this.$store.state.tableData[index].regin
 this.form.describe=this.$store.state.tableData[index].describe

        },
        sure(){
this.dialogFormVisible = false
 console.log(this.form.index);
 const index=this.form.index


this.$store.state.tableData[index].regin= this.form.regin
this.$store.state.tableData[index].describe= this.form.describe

        }
       
      
    }
    
}
</script>

<style lang="less" scoped>
.el-container {
  height: 100%;

  background-image: url('../assets/mati.jpg');
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