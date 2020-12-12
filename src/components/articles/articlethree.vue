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
<h3>IT日语词汇</h3>
<span>
    发表于 2020-12-04 14:08:00
</span>

 </div>

 <!--文章主体区域 -->
 <div class="wenzhang">
パスワード：密码<br>

例：パスワードを入力する。<br>

[翻译]输入密码。<br>

画面から取得されたパスワードはテーブルに格納します。<br>

[翻译]从画面上取得的密码保存在数据表中。<br>

ユーザー：用户<br>

例：これはユーザーの情報を表示する機能です。<br>

[翻译]这是表示用户信息的功能。<br>

画面からユーザー名を入力してください。<br>

[翻译]请在画面上输入用户名。<br>

ログイン：登录<br>

例：ユーザー名とパスワードを入力してから、ログインできます。<br>

[翻译]输入用户名和密码后可以登录。<br>

ログイン画面では、エラーメッセージを表示します。<br>

[翻译]在登录画面会显示错误信息。<br>

レイアウト：布局<br>

例：画面レイアウトが間違っています。<br>

[翻译]画面布局有错误。<br>

画面レイアウトは仕様書と一致してください。<br>

[翻译]请保持画面布局与式样书一致。<br>

引数（ひきすう）：参数。<br>

例：A引数の内容は仕様書を参照ください。<br>

[翻译]参数A的内容请参见式样书。<br>

A引数をBメソッドに引き渡します。<br>

[翻译]把参数A传给B这个方法。<br>

重複（ちょうふく）<br>

解释：重复<br>

例：開始日と終了日が重複している。<br>

[翻译]开始日和结束日重复。<br>

コミット<br>

解释：提交<br>

例：レコード毎に中間コミット実施している。<br>

[翻译]每条记录都执行中间提交。<br>

初期化（しょきか）<br>

解释：初始化<br>

例： IDが初期化されてしまう。<br>

[翻译]ID被初始化了。<br>

ダイアログボックス<br>

解释：对话框<br>

例：確認ダイアログボックスのメッセージが出力される<br>

[翻译]信息会显示在确认对话框里<br>

桁（けた）<br>

解释：位<br>

例：画面の入力項目は4桁にしてください。<br>

[翻译]画面输入项设为4位。<br>

更新（こうしん）<br>

解释：更新<br>

例：更新データファイルを読み込み、情報テーブルの更新を行う。取得したデータはテーブルに更新してください。<br>

[翻译]读取更新数据文件，进行情报表的更新。请将取得的数据更新到表中。<br>

格納（かくのう）<br>

解释：保存<br>

例：異常データはエラー詳細テーブルに格納する。格納場所はありません。<br>

[翻译]异常数据将被保存到错误详细列表中。没有专门的保存场所。<br>

編集（へんしゅう）<br>

解释：编辑<br>

例：「A：B」形式に編集する。編集結果はメールで教えてください。<br>

[翻译]编辑为「A：B」的形式。请通过邮件告知编辑结果。<br>

押下（おうか）<br>

解释：按下<br>

例：入力内容をクリアする場合、クリアボタンを押下する。クリアした時に、エラーになった。<br>

[翻译]清空输入内容时，按下CLEAR按钮。清空时出错了。<br>

遷移（せんい）<br>

解释：跳转<br>

例：正常の場合は登録確認画面に遷移する。遷移アクションが不正。<br>

[翻译]正常情况跳转到登录确认画面。跳转动作不正确（没有成功）。<br>

選択（せんたく）<br>

解释：选择<br>

例：対象件数が0件以上の場合、名称を確認して選択する。<br>

[翻译]当对象件数为0件以上时，要确认名称后选择。<br>

一覧（いちらん）<br>

解释：一览<br>

例：取得できない場合は、検索結果一覧は表示しない。<br>

[翻译]无法取得检索信息时，检索结果一览中将没有表示。<br>

発生（はっせい）<br>

解释：发生<br>

例：画面にて実行ボタン押下するとエラーが発生した。<br>

[翻译]按下画面的实行按钮后报错。<br>

昇順（しょうじゅん）<br>

解释：升序<br>

例：昇順でソートされて表示されていない。<br>

[翻译]没有按照升序排列显示。<br>

降順（こうじゅん）<br>

解释：降序<br>

例：降順で表示された結果は不正です。<br>

[翻译]降序显示的结果不正确。<br>
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