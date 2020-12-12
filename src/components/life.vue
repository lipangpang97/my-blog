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
         <el-card class="myself">
 <!--图片美化区 -->

   
  <!-- <div class="image">
    <img src="../assets/heng.jpg" style="height:300px">
  </div> -->

  <!-- 个人简介 -->
  <div class="about-me">
      <!-- 标题 -->
  <div class="title">
<h4 style="line-height:40px">About me</h4>
  </div>
  <!-- 自我介绍内容 -->
  <div class="contain">
<el-card>
我是小明，毕业于大学市场营销专业的。我喜欢读书看报，因为它能丰富我的知识，拓展我的视野；我喜欢跑步，因为它可以磨砺我的意志，强健我的体魄。
既然今天竞聘的是营销经理一职，我想谈谈自己对营销的理解。面对21世纪这个充满挑战、压力和机遇并存的世纪。“营销”成就梦想，带给人财富越来越被人们所认识到。营销不等同于推销，但推销是营销的重要组成部分。
我觉得作为一名销售总监，除了应该具备一定的营销知识外，还应具有良好的沟通、协调能力，能够吃苦耐劳，具有良好的团队合作精神，讲究职业道德。
如果这次我有幸竞聘上营销经理，我想打造一个平台，让自己的同事在一种轻松却不失严谨的氛围中工作，大家相互合作，具有良好的团队精神。
同时我认为营销也是一种服务。既然是一种服务，就应该做到让大家满意，用热情和真心去做。激情是工作中不可或缺的要素，是推动我们在工作中不断创新的动力。激情加上挑战自我的意识，我相信我能胜任这份工作。

</el-card>
  </div>
  </div>

  <!-- 博客简介 -->
 <div class="about-me">
      <!-- 标题 -->
  <div class="title">
<h4 style="line-height:40px"> About my blog</h4>
  </div>
  <!-- 博客简介内容 -->
  <div class="contain">
<el-card>

Github: https://github.com/lipangpang97/my-blog<br>
创建时间：2020年12月1日<br>
前端语言：Html+Css+Javascript+Vue

</el-card>
  </div>
  </div>
<!-- 技能 -->
 <div class="about-me">
      <!-- 标题 -->
  <div class="title">
<h4 style="line-height:40px">About my skill</h4>
  </div>
  <!-- 技能介绍内容 -->
  <div class="contain skill">
<el-card>
<el-progress :text-inside="true" :stroke-width="26" :percentage="90"  ></el-progress>
<el-progress :text-inside="true" :stroke-width="24" :percentage="80" status="success"></el-progress>
<el-progress :text-inside="true" :stroke-width="22" :percentage="70" status="warning"></el-progress>
<el-progress :text-inside="true" :stroke-width="20" :percentage="60" status="exception"></el-progress>
<el-progress :text-inside="true" :stroke-width="20" :percentage="50" ></el-progress>
</el-card>
  </div>
  </div>
  <!-- 联系方式 -->
  <div class="about-me">
      <!-- 标题 -->
  <div class="title">
<h4 style="line-height:40px">My information</h4>
  </div>
  <!-- 联系方式内容 -->
  <div class="contain">
<el-card>
QQ:1154953749<img src="../assets/qq.jpg" style="height: 20px; margin-left:20px" ><br>
邮箱：1154953749@qq.com<br>
微信：Lpp-suki-Jmm<br>
<img src="../assets/weixin.jpg" style="height: 150px;">


</el-card>
  </div>
  </div>
    </el-card>


    
    
    </el-main>


  </el-container>
</template>


<script>
export default {
     data() {
      return {
       
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
  },
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

.myself{
    margin-top: 20px;
    padding: 15px;
    background-color:  rgba(255, 255, 255, 0.5);
   border: none;

 .about-me{
margin-top: 40px;

.skill{
 
.el-progress{
  position: relative;
 margin-top: 20px;
 
}

}
    
 }
  .title{
         border-radius: 30px;
         height: 40px;
         width: 220px;
         text-align: center;
         color: #fff;
         background-color: darkblue;
     }
}

.el-progress:nth-child(1)::after{
  content: 'HTML/HTML5';
  position: absolute;
  color: #fff;
 
  width: 30px;
  height: 20px;
  top: 0;
  right: 750px;

}
.el-progress:nth-child(2)::after{
  content: 'CSS/CSS3';
  position: absolute;
 color: #fff;
  width: 30px;
  height: 20px;
  top: 0;
  right: 750px;

}
.el-progress:nth-child(3)::after{
  content: 'Javascript/ES6';
  position: absolute;
  color: #fff;
  width: 30px;
  height: 20px;
  top: 0;
  right: 750px;

}
.el-progress:nth-child(4)::after{
  content: 'Vue';
  position: absolute;
  color: #fff;
  width: 30px;
  height: 20px;
  top: 0;
  right: 750px;

}
.el-progress:nth-child(5)::after{
  content: 'Node.js';
  position: absolute;
  color: #fff;
  width: 30px;
  height: 20px;
  top: 0;
  right: 750px;

}
</style>