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
      <el-card class="box-card" style="overflow: auto">
        <!-- 标题区域 -->
        <div class="title">
          <h3>构造函数的继承</h3>
          <span> 发表于 2020-12-02 12:00:00 </span>
        </div>

        <!--文章主体区域 -->
        <div class="wenzhang">
          现在有一个“Father”对象的构造函数，<br />

          <img src="./jicheng1.jpg" alt="" /><br />

          有一个“Son”对象的构造函数，<br />

          <img src="./jicheng2.jpg" alt="" /><br />

          一：构造函数绑定<br />
          第一种方法也是最简单的方法，使用call或apply方法，将父对象的构造函数绑定在子对象上，即在子对象构造函数中加一行<br />

          　
          <img src="./jicheng3.png" alt="" /><br />

          二：prototype模式<br />

          如果"Son"的prototype对象，指向一个Father的实例，那么所有"Son"的实例，就能继承Father了。<br />

          <img src="./jicheng4.png" alt="" /><br />
          三： 利用空对象作为中介<br />

          <img src="./jicheng5.png" alt="" /><br />

          将上面的方法，封装成一个函数，便于使用。<br />
          <img src="./jicheng6.png" alt="" /><br />

          四：拷贝继承<br />
          把父对象的所有属性和方法，拷贝进子对象,也能实现继承。<br />
          首先，还是把Father的所有不变属性，都放到它的prototype对象上。<br />
          <img src="./jicheng7.png" alt="" /><br />
          然后，再写一个函数，实现属性拷贝的目的。<br />
          <img src="./jicheng8.png" alt="" /><br />
          这个函数的作用，就是将父对象的prototype对象中的属性，一一拷贝给Child对象的prototype对象。<br />

          使用的时候，这样写：<br />

          <img src="./jicheng9.png" alt="" /><br />

         
        </div>
         <br /><el-button
            @click="handleClick()"
            type="text"
            size="small"
            style="font-size: 15px"
            >返回文章列表</el-button
          >
      </el-card>
    </el-main>
  </el-container>
</template>


<script>
export default {
  //   data(){
  // return{
  //   url:'jicheng1.png'
  // }
  // },
  methods: {
    logout() {
      // 清空token
      window.sessionStorage.clear()
      // 跳转到登录页面
      this.$router.push('/login')
    },
    handleClick() {
      this.$router.push('/articles')
    },
  },
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

  .box-card {
    width: 100%;
    text-align: center;

   

    .wenzhang {
      text-align: left;
      margin-top: 20px;
      padding: 0 100px;
    }

    .el-button{

    }
  }
}
</style>