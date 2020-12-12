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
     <el-card class="box-card" style="overflow:auto">
         <!-- 标题区域 -->
 <div class="title">
<h3>解决vue中使用axios请求格式问题</h3>
<span>
    发表于 2020-12-06 12:00:00
</span>

 </div>

 <!--文章主体区域 -->
 <div class="wenzhang" >
使用axios发送post请求总是失败，同样的数据，在postman中使用application/x-www-form-urlencoded可以请求成功但是from-data就不行。并且用from-data返回的massage和axios返回的一模一样，所以应该是格式问题。
一般axios的Content-type是
application/json，所以post请求发送的参数也应该是json<br>
<br>
解决方法：
引入qs模块来处理参数<br>
<img src="./axios.png" alt=""/><br>
<br>
<img src="./axios2.png" alt=""/><br>


 <br>
 </div>
<el-button @click="handleClick()" type="text" size="small" style="font-size:15px" >返回文章列表</el-button>
</el-card>
    </el-main>


  </el-container>
</template>


<script>
export default {
    methods:{
        logout() {
      // 清空token
      window.sessionStorage.clear()
      // 跳转到登录页面
      this.$router.push('/login')
    },
    handleClick(){
        this.$router.push('/articles')
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
 
  // .main{
  //   background-color: rosybrown;
  // }

 .box-card{
 width: 100%;
 text-align: center;



 .wenzhang{
     text-align: left;
     margin-top: 20px;
     padding: 0 100px;
 }
 }
  
}
</style>