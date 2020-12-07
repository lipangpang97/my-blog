<template>
  <div class="login_container">
    <div class="login_box">
      <!-- 头像区域 -->
      <div class="avater_box">
        <div class="border_box">
          <img src="../assets/logo1.png" alt="" />
        </div>
      </div>
      <!-- 登录表单区域 -->
      <el-form
        class="login_form"
        ref="loginFormRef"
        :model="loginForm"
        label-width="0"
        :rules="loginFormRules"
      >
        <!-- 用户名区域 -->
        <el-form-item prop="username">
          <el-input
            v-model="loginForm.username"
            prefix-icon="el-icon-mobile-phone"
            placeholder="请输入手机号"
          ></el-input>
        </el-form-item>
        <!-- 密码区域 -->
        <el-form-item prop="password">
          <el-input
            v-model="loginForm.password"
            prefix-icon="el-icon-unlock"
            placeholder="请输入验证码"
            ></el-input>
            
        </el-form-item>
        <!-- 按钮区域 -->
        <el-form-item class="btns">
          <el-button type="primary" @click="login">登录</el-button>
          <el-button type="info" @click="loginFormRef">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //  这是登录表单的数据绑定对象
      loginForm: {
        username: 'lipangpang',
        password: '123456',
      },
      //  这是表单的验证规则对象
      loginFormRules: {
        // 验证用户名是否合法
        username: [
          { required: true, message: '请输入登录名称', trigger: 'blur' },
          { min: 5, max: 12, message: '长度在 5到 10个字符', trigger: 'blur' },
        ],
        // 验证密码是否合法
        password: [
          { required: true, message: '请输入登录密码', trigger: 'blur' },
          { min: 6, max: 12, message: '长度在 6到 12个字符', trigger: 'blur' },
        ],
      },
    }
  },
  methods: {
    //  点击重置按钮，重置登录表单
    loginFormRef() {
      this.$refs.loginFormRef.resetFields()
    },
    login() {
      this.$refs.loginFormRef.validate(valid=>{
if (!valid) {
          return
        }
      
       this.$http.post('/api/login',
       this.$qs.stringify({
          username:this.loginForm.username,
      password:this.loginForm.password
       })
       ).then(res=>{
         console.log(res);
          if (res.data.status !== 0) {
          return this.$message.error('登录失败')
        }
        this.$message.success('登录成功')
        // 将登录成功之后的token保存到客户端的sessionStorage中
        window.sessionStorage.setItem('token', res.data.token)
        // 项目中除了登录之外的其他API接口，必须在登录之后才能访问
        // token只应在当前网站打开期间生效，所以将token保存在sessionStorage中
        // 通过编程式导航跳转到后台主页，路由地址是/home
        this.$router.push('/home')
      })
   
     })
//      
    },
  },
}
</script>
// scope指令--只在当前组件中生效
<style lang="less" scoped>
.login_container {
  height: 100%;
  background-color: #2b4b6b;
}

.login_box {
  width: 450px;
  height: 300px;
  background-color: #fff;
  border-radius: 3px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  .avater_box {
    width: 34%;
    height: 130px;
    position: absolute;
    left: 50%;
    top: -65px;
    transform: translateX(-50%);
    box-shadow: 0 0 10px #ddd;
    border: 1px solid #eee;
    border-radius: 50%;
    overflow: hidden;
    background-color: #fff;

    .border_box {
      width: 90%;
      height: 90%;
      position: absolute;
      left: 50%;
      transform: translate(-50%, 6.5%);
      border: 1px solid #eee;
      border-radius: 50%;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  .login_form {
    width: 90%;
    position: absolute;
    top: 35%;
    left: 5%;
  }
}

.btns {
  display: flex;
  justify-content: flex-end;
}
</style>