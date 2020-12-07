<template>
  <el-container class="home-container">
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
      <!-- 文章展示区域-->
      <div class="articles">
        <!-- 文章展示一 -->
        <el-row>
          <el-col>
            <el-card :body-style="{ padding: '0px' }"  >
              <div class="bottom clearfix" style="text-align: center">
                <h4 style="font-weight: 700">标题1</h4>
                <time class="time">{{ currentDate }}</time>
                <el-button type="text" class="button">操作按钮</el-button>
              </div>
              <div class="article-dis" @click='toArticle1' @mouseover="mouseOver($event)" @mouseleave="mouseLeave($event)">
                <div class="article-item">
                  关于“教养”最常见的迷思就是：“正确的教养方法会养育出好孩子，他们之后会成长为优秀的成年人”。这样一种“处方式”的养育观念，从根本上是错误的。
                  　　对于大多数成年人来讲，在工作中，专业知识能够将人导向成功。
                </div>
                <img
                  src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                  class="article-image"
                />
              </div>
            </el-card>
          </el-col>
        </el-row>
        <!-- 文章展示二-->
        <el-row @click="toArticle2">
          <el-col>
            <el-card :body-style="{ padding: '0px' }">
              <div class="bottom clearfix" style="text-align: center">
                <h4 style="font-weight: 700">标题1</h4>
                <time class="time">{{ currentDate }}</time>
                <el-button type="text" class="button">操作按钮</el-button>
              </div>
              <div class="article-dis">
                <div class="article-item">
                  关于“教养”最常见的迷思就是：“正确的教养方法会养育出好孩子，他们之后会成长为优秀的成年人”。这样一种“处方式”的养育观念，从根本上是错误的。
                  　　对于大多数成年人来讲，在工作中，专业知识能够将人导向成功。
                </div>
                <img
                  src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                  class="article-image"
                />
              </div>
            </el-card>
          </el-col>
        </el-row>
        <!-- 文章展示三 -->
        <el-row>
          <el-col>
            <el-card :body-style="{ padding: '0px' }">
              <div class="bottom clearfix" style="text-align: center">
                <h4 style="font-weight: 700">标题1</h4>
                <time class="time">{{ currentDate }}</time>
                <el-button type="text" class="button">操作按钮</el-button>
              </div>
              <div class="article-dis">
                <div class="article-item">
                  关于“教养”最常见的迷思就是：“正确的教养方法会养育出好孩子，他们之后会成长为优秀的成年人”。这样一种“处方式”的养育观念，从根本上是错误的。
                  　　对于大多数成年人来讲，在工作中，专业知识能够将人导向成功。
                </div>
                <img
                  src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                  class="article-image"
                />
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>
      <!-- 心情展示区域 -->
      <div class="mood-display">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>卡片名称</span>
          </div>
        </el-card>
        <el-card class="box-card">
          <div class="text item">
            <ul>
              <li class="el-icon-potato-strips">1</li>
              <li class="el-icon-potato-strips">1</li>
              <li class="el-icon-potato-strips">1</li>
              <li class="el-icon-potato-strips">1</li>
              <li class="el-icon-potato-strips">1</li>
            </ul>
          </div>
        </el-card>
      </div>

      <!-- 图片展示区域 -->
      <!-- <div class="demo-image">
  <div class="block" v-for="fit in fits" :key="fit">
    <span class="demonstration">{{ fit }}</span>
    <el-image
      style="width: 100px; height: 100px"
      :src="url"
      :fit="fit"></el-image>
  </div>
</div> -->
    </el-main>
    <!-- 底部区域 -->
    <!-- <el-footer>Footer</el-footer> -->
  </el-container>
</template>

<script>
// $(".first-page").onmouseover();
export default {
  data() {
    return {
      currentDate: new Date(),
      fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
      url:
        'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      // article:{
      // art1:''
      // }
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
      this.$('.articles el-row').css('background-color','gray')
    },
    mouseOver($event){
    $event.currentTarget.className="changeColor"
    },
    mouseLeave($event){
      $event.currentTarget.className="article-dis"
    },
    toArticle2() {
      this.$router.push('/arttwo')
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
  display: flex;
  padding-top: 40px;
  // .main{
  //   background-color: rosybrown;
  // }

  .articles {
    flex: 70%;
    margin-right: 10px;

    .el-row {
      margin-top: 20px;
    }

    .article-dis {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 30px;
      // background-color: blueviolet;

      .article-image {
      }

      //       .article-item{
      // flex: 80%;
      // background-color: blueviolet;
      //       }
    }
  }

  .mood-display {
    flex: 30%;

    .el-card {
      margin-top: 20px;
    }
  }
}
ul {
  padding: 0;
  margin: 0;
}
li {
  list-style: none;
  width: 100%;
  border-bottom: 1px gray solid;
  margin-bottom: 30px;
}
.text {
  padding: 10px;
}
.changeColor{
   display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 30px;
  background-color: #909399;
}
</style>