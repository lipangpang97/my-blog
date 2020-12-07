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
          href="http://localhost:8080/#/articles"
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
         <!-- 标题区域 -->
 <div class="title">
<h3>标题1</h3>
<span>
    发表于
</span>

 </div>

 <!--文章主体区域 -->
 <div class="wenzhang">
今天，妈妈就买了三斤小龙虾。一只只火红的龙虾，挥舞着钳子，在水中挣扎着，仿佛是龙虾大军在向我示威呢！妈妈正对着面前的小龙虾发愁呢。她皱着眉头：“唉，这可怎么洗呢？”我自告奋勇地要帮妈妈洗小龙虾，我手刚抄起一把大刷子放进盆里，一只巨大的钳子已迅雷不及掩耳之势夹住了我的手指，疼得我“哇哇”直叫，无论怎么甩都甩不掉。经过妈妈帮助，它才乖乖“投降”。我灰溜溜走到一边，耷拉着脑袋，差点要流下泪来。妈妈笑了笑：“宝贝，可以了，你就乖乖坐着等着吃龙虾吧！”不久，妈妈开始烧小龙虾了。只见妈妈先倒入一点油和葱、姜等调料，然后把小龙虾倒进锅里，盖上锅盖，调成大火在一边等待。等小龙虾熟了，又往里边倒黑胡椒、辣椒粉、椒盐粉等五花八门的调料，空气中弥漫着一股醉人的香气。又过了一会儿，妈妈端着一盘色香味俱全的小龙虾上桌了。“开吃喽！”我抓起一只火红的小龙虾，把头拔掉，只见金黄的虾黄正在缓缓流出，鲜嫩的肉和着汤汁的鲜香发出诱人的香味。我拔掉一片又一片小龙虾的“铠甲”，沾上酱料，“啊呜”一口吞下肚。可一不小心，手指就被锋利的“铠甲”划破了，鲜血直流，我“呜呜”地哭了起来。“吃美食总要付出一点代价的嘛！“妈妈安慰我。很快，小龙虾就全被我们消灭了，我满足地抚摸着圆滚滚的肚皮，餍足地说：“小龙虾真美味呀！”
　　小龙虾真是百吃不厌，下次我还要吃！

好文章摘抄大全（二）记叙文
　　生活中，只有那些善于生存、会自我保护的人才算得上是主宰生活的强者。学会生存，使我们日常生活中一种不可或缺的本领。
　　生存说简单也不简单，说艰难也不艰难，对于那些会生存、善于生存的人来说，无论在怎样的情况下，生存好像一场游戏。在遇到偶发事件、危险以及灾难时，我们要学会不惊慌失措，积极开动自己的大脑，用之前在生活中所积累的经验和知识来使自己化险为夷，转危为安。
　　记得以前妈妈给我讲过这样一个故事：一个小男孩上四年级，一天中午放学后走回家的路上，一拐卖小孩的骗子截住了这个小男孩的去路，说：“小朋友，去哪呀！”说着骗子拿出了一盒哈根达斯，来引诱这个小孩跟着他们走，孩经不起诱惑跟着拐卖犯上了车。走了一会小孩感觉出来有什么不对劲，他想了想对拐卖犯说：“叔叔我饿了。”“好，你在车上等着，别乱跑。”于是，拐卖饭下车给小孩买饭，小孩趁这个时间跑下车，看见一对老人开了药铺，他飞奔着跑的两位老人旁边，说清楚了事情的来龙去脉，老人非常同情他并让他先到床底下躲一躲。骗子回来后找不到孩子，非常着急四处寻找，老人看着他沮丧地走了以后，让小男孩出来报了警，警察把他安全的带回了家。
　　这件事告诉我一个道理，不要吃陌生人的食物，当遇见坏人时，要保持冷静，正确运用自己的智慧与坏人周旋，以做到自我保护的目的。
 <br><el-button @click="handleClick()" type="text" size="small" style="font-size:15px" >返回文章列表</el-button>
 </div>

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

 .title{
     text-align: center;
 }

 .wenzhang{
     text-align: center;
 }
 }
  
}
</style>