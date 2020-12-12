<template>
  <el-container class="home-container">
    <!-- 头部区域 -->
    <el-header>
      <div class="nav" >
        <!-- 首页 -->
        <template>
       
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
        </template>
      </div>
      <div class="logout">
        <el-button type="info" @click="logout" class="btnLogout"
          >退出</el-button
        >
      </div>
    </el-header>
    <!-- 主体区域 -->
    <el-main>
      <!-- 照片展示区域 -->

      <div class="mood-display">
        <el-carousel :interval="4000" type="card" height="332px" :fit="cover">
          <el-carousel-item>
            <h3 class="medium"></h3>
            <img src="../assets/mm2.jpg" style="height: 332px" object-fit="contain"/>
          </el-carousel-item>
          <el-carousel-item>
            <h3 class="medium"></h3>
            <img src="../assets/mm1.jpg" style="height: 332px" />
          </el-carousel-item>
          <el-carousel-item>
            <h3 class="medium"></h3>
            <img src="../assets/mm3.jpg" style="height: 332px" />
          </el-carousel-item>
          <el-carousel-item>
            <h3 class="medium"></h3>
            <img src="../assets/mm4.jpg" style="height: 332px" />
          </el-carousel-item>
          <el-carousel-item>
            <h3 class="medium"></h3>
            <img src="../assets/mm.jpg" style="height: 400px" />
          </el-carousel-item>
        </el-carousel>
      </div>

      <!-- 文章展示区域-->
      <div class="articles">
        <!-- 文章展示区一 -->
        <div id="art1">
          <!-- 文章1 -->
          <el-row>
            <el-col>
              <el-card :body-style="{ padding: '0px' }">
                <div
                  class="art-image"
                  style="text-align: center"
                  @mouseover="mask"
                  @mouseleave="maskoff"
                  @click="toArticle1"
                >
                  <img src="../assets/fish.jpg"  />
                  <div class="mask" v-show="flag" style="width:">看一看吧</div>
                </div>
                <div class="article-dis" @click="toArticle1">
                  <div class="article-item">
                    构造函数的继承<br />
                    构造函数有许多继承的方法，如call（）或apply（）方法，<br />原型对象方法，拷贝继承等......
                  </div>
                </div>
              </el-card>
            </el-col>
          </el-row>
          <!-- 文章展示二-->
          <el-row>
            <el-col>
              <el-card :body-style="{ padding: '0px' }">
                <div
                  class="art-image"
                  style="text-align: center"
                  @mouseover="mask2"
                  @mouseleave="maskoff2"
                  @click="toArticle2"
                >
                  <img src="../assets/cat.jpg" />
                  <div class="mask" v-show="flag2">看一看吧</div>
                </div>
                <div class="article-dis">
                  <div class="article-item">解决vue中使用axios请求格式问题</div>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </div>
        <!-- 文章展示区二 -->
        <div id="art1">
          <!-- 文章1 -->
          <el-row>
            <el-col>
              <el-card :body-style="{ padding: '0px' }">
                <div
                  class="art-image"
                  style="text-align: center"
                  @mouseover="mask3"
                  @mouseleave="maskoff3"
                  @click="toArticle3"
                >
                  <img src="../assets/fengjing2.jpeg" />
                  <div
                    class="mask"
                    v-show="flag3"
                    
                  >
                    看一看吧
                  </div>
                </div>
                <div class="article-dis">
                  <div class="article-item">
                    IT日语词汇<br />パスワード：密码<br />ユーザー：用户
                  </div>
                </div>
              </el-card>
            </el-col>
          </el-row>
          <!-- 文章展示二-->
          <el-row>
            <el-col>
              <el-card :body-style="{ padding: '0px' }">
                <div
                  class="art-image"
                  style="text-align: center"
                  @mouseover="mask4"
                  @mouseleave="maskoff4"
                  @click="toArticle4"
                >
                  <img src="../assets/fengjing3.jpg" />
                  <div
                    class="mask"
                    v-show="flag4"
                   
                  >
                    看一看吧
                  </div>
                </div>
                <div class="article-dis">
                  <div class="article-item">
                    关于日语邮件用语常见的误区<br />川上商事営业部各位様 　
                    　　　　（误）<br />
                    　　川上商事営业部各位 　　　　　　（正）
                  </div>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </div>
      </div>
    </el-main>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      flag: false,
      flag2: false,
      flag3: false,
      flag4: false,
    }
  },
  methods: {
    logout() {
      // 清空token
      window.sessionStorage.clear()
      // 跳转到登录页面
      this.$router.push('/login')
    },
    toArticle1() {
      this.$router.push('/artone')
    },
    toArticle2() {
      this.$router.push('/arttwo')
    },
    toArticle3() {
      this.$router.push('/artthree')
    },
    toArticle4() {
      this.$router.push('/artfour')
    },

    mask() {
      this.flag = true
    },
    maskoff() {
      this.flag = false
    },
    mask2() {
      this.flag2 = true
    },
    maskoff2() {
      this.flag2 = false
    },
    mask3() {
      this.flag3 = true
    },
    maskoff3() {
      this.flag3 = false
    },
    mask4() {
      this.flag4 = true
    },
    maskoff4() {
      this.flag4 = false
    },
  },
}
</script>

<style lang="less" scoped>
.home-container {
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
  .articles {
    margin-right: 10px;

    .article-dis {
      display: flex;
      flex-direction: column;
      justify-content: center;

      padding: 30px;
      // background-color:  #E4E7ED;
    }
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }

  // .el-card {
  //   margin-top: 20px;
  // }
}
#art1 {
  display: flex;
  justify-content: space-between;
  padding: 10px 40px;
  background-color: rgba(255, 255, 255, 0.5);

  .el-row {
    margin-top: 50px;

    .el-card2 {
      margin-left: 50px;
    }

    .el-card {
      height: 600px;
      padding: 15px;

      .art-image {
        position: relative;
        width: 494px;
        height: 350px;
        overflow: hidden;

       img{
         width: 494px;
        height: 350px;
       } 

        .mask {
          position: absolute;
          top: 0;
          left: 0;

          width: 494px;
        height: 350px;
          text-align: center;
          line-height: 350px;
          color: #ffffff;
          font-size: 20px;
          background-color: rgba(0, 0, 0, 0.3);
        }
      }
    }
  }
}

.changeColor {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px;
  background-color: #e4e7ed;
}
</style>