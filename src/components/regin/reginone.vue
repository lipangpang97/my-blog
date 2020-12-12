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
      <div class="qianduan">
        <!-- 文章1 -->
        <el-card>
          <div class="title el-icon-edit-outline">
            <strong>构造函数的继承</strong>
          </div>
          <div class="wenzhang1" style="margin-top: 10px" @mouseover="mask" @mouseleave="maskoff" @click="toart1">
            <div class="img1">
              <!-- <img src="./js.jpg" alt="" /> -->

           
            </div>
               <div
                class="mask"
                v-show="flag"
              >
                看一看吧
              </div>

            <div class="wenzhang1-container" style="padding: 40px 0">
              <span>
                构造函数有许多继承的方法，如call（）或apply（）方法，原型对象方法，拷贝继承等......
              </span>

              <div style="margin-top: 200px; margin-left: 250px">
                <span class="el-icon-edit" style="margin-right: 10px">
                  李胖胖
                </span>
                <i class="el-icon-loading" style="margin-right: 5px">
                  <!-- 前端技术总结 -->
                </i>
                <span style="margin-right: 10px">前端技术总结</span>
                <span class="el-icon-date"> 2020-12-02 12:00:00 </span>
              </div>
            </div>
          </div>
        </el-card>
        <!-- 文章3 -->
        <el-card class="qianduan2">
          <div class="title el-icon-edit-outline">
            <strong>解决vue中使用axios请求格式问题</strong>
          </div>
          <div class="wenzhang1" style="margin-top: 10px" @mouseover="mask2" @mouseleave="maskoff2" @click="toart2">
            <div class="img2">
              <!-- <img src="js.jpg"  > -->
              
            </div>
            <div class="mask" v-show="twoflag">看一看吧</div>

            <div class="wenzhang1-container">
              <span>
                使用axios发送post请求总是失败，同样的数据，在postman中使用application/x-www-form-urlencoded可以请求成功但是from-data就不行。并且用from-data返回的massage和axios返回的一模一样，所以应该是格式问题。</span
              >

              <div style="margin-top: 200px; margin-left: 250px">
                <span class="el-icon-edit" style="margin-right: 10px">
                  李胖胖
                </span>
                <i class="el-icon-loading" style="margin-right: 5px">
                  <!-- 前端技术总结 -->
                </i>
                <span style="margin-right: 10px">前端技术总结</span>
                <span class="el-icon-date"> 2020-12-02 12:00:00 </span>
              </div>
            </div>
          </div>
        </el-card>
      </div>
    </el-main>
  </el-container>
</template>


<script>
export default {
  data() {
    return {
      flag:false,
      twoflag:false
    }
  },
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
    mask() {
      this.flag=true
      
    },
    maskoff() {
      this.flag=false
      
    },
     mask2() {
     
      this.twoflag=true
    },
    maskoff2() {
     
       this.twoflag=false
    },
    toart1(){
      this.$router.push('/artone')
    },
    toart2(){
      this.$router.push('/arttwo')
    }
  },
}
</script>




<style lang="less" scoped>
.shaow {
  box-shadow: 0 2px 4px rgba(212, 23, 23, 0.04);
  background-color: salmon;
}
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
  padding: 50px;

  .qianduan {
    padding: 50px;
    // display: flex;
    // justify-content: space-between;
    background-color: rgba(255, 255, 255, 0.5);
  }

  .el-card {
    height: 380px;
    width: 100%;

    .wenzhang1 {
      display: flex;
       position: relative;

       .mask {
          position: absolute;

          top: 0;
          left: 0;
          // display: none;
          height: 292px;
          width: 435px;
          text-align: center;
          line-height: 292px;
          color: #ffffff;
          font-size: 20px;
          background-color: rgba(0, 0, 0, 0.3);
        }

      .img1 {
       
        flex: 40%;
        height: 292px;
        width: 475px;

        background: url(js.jpg) no-repeat;

       
      }

      .wenzhang1-container {
        flex: 60%;
        margin-left: 20px;
      }
    }
  }
  .qianduan2 {
    margin-top: 30px;

    .img2 {
      flex: 40%;
      height: 292px;
      width: 475px;

      background: url(xing.jpeg) no-repeat;
    }
  }
}
</style>