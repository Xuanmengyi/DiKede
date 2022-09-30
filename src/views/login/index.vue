<template>
  <div class="login-container">
    <el-form
      ref="loginForm"
      class="login-form"
      auto-complete="on"
      label-position="left"
    >
      <div class="title-container">
        <h3 class="title">
          <img src="@/assets/common/logo.png" alt="" class="login-logo" />
        </h3>
      </div>
      <el-form-item>
        <span class="svg-container el-icon-user-solid" />
        <el-input v-model="loginName" type="text" placeholder="请输入手机号码" />
      </el-form-item>
      <el-form-item>
        <span class="svg-container">
          <svg-icon icon-class="password" />
        </span>
        <el-input
        ref="pwd"
        v-model="password"
          :type="passwordType"
          placeholder="请输入密码"
        />
        <span class="svg-container" @click="showPwd">
          <svg-icon
            :icon-class="passwordType==='password'? 'eye':'eye-open'"
          />
        </span>
      </el-form-item>
      <el-form-item>
        <div class="el-col el-col-17">
          <span class="svg-container el-icon-circle-check" />
        <el-input v-model="code" placeholder="请输入验证码" />
        </div>
        <div class="el-col el-col-7">
          <img ref="yzm" :src="imgSrc" alt="" @click="getV">
        </div>
      </el-form-item>
      <el-button
      @click="onLogin"
        class="loginBtn"
        style="width: 100%; margin-bottom: 30px">登录</el-button>
    </el-form>
  </div>
</template>

<script>
import { login, vali } from '@/api'
export default {
  data() {
    return {
      mobile: '',
      password: '',
      loginName: '',
      passwordType: 'password',
      imgSrc: '',
      clientToken: '',
      code: '',
      data: {}
    }
  },
  created() {
    this.getV()
  },
  methods: {
    showPwd() {
      this.passwordType === 'password' ? this.passwordType = '' : this.passwordType = 'password'
      this.$nextTick(() => {
        this.$refs.pwd.focus()
      })
    },
    async getV() {
      this.clientToken = Math.random() * (10 - 0)
      const data = await vali(this.clientToken)
      this.imgSrc = window.URL.createObjectURL(data.data)
      // this.imgSrc.splite('/')
      console.log(data)
      // this.clientToken = this.imgSrc.split('/')[3]
    },
    async onLogin() {
      await this.fuzhi()
      try {
        const { data } = await login(this.data)
        console.log(data)
        if (data.token) {
          this.$router.push('/home')
        }
      } catch (error) {
        console.log(error)
      }
    },
    async fuzhi() {
      this.data = {
        loginName: this.loginName,
        password: this.password,
        code: this.code,
        clientToken: this.clientToken,
        loginType: 0
      }
    }
  }
}
</script>

<style lang="scss">
/* 修复input 背景不协调 和光标变色 */
/* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */

$bg: #283443;
$light_gray: #999; // 将输入框颜色改成蓝色
$cursor: #999;

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
  }
}

/* reset element-ui css */
.login-container {
  position: relative;
    height: 100%;
    width: 100%;
  background-image: url('../../assets/common/background.png'); // 设置背景图片
  background-position: center; // 将图片位置设置为充满整个屏幕
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;
    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
      caret-color: $cursor;

      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: $cursor !important;
      }
    }
  }
  .el-form-item {
        width: 100%;
    height: 52px;
    margin-bottom: 24px;
    background: #fff;
    border: 1px solid #e2e2e2;
    border-radius: 4px;
  }
  .login-form{
    position: absolute;
    width: 518px;
    height: 388px;
    top: 29%;
    margin-top: -194px;
    margin-left: -259px;
    padding: 76px 35px 0;
    background: #fff;
    -webkit-box-shadow: 0 3px 70px 0 rgb(30 111 72 / 35%);
    box-shadow: 0 3px 70px 0 rgb(30 111 72 / 35%);
    border-radius: 10px;
  }
}
</style>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #68b0fe;

.login-logo{
      position: absolute;
    width: 96px;
    height: 96px;
    top: -127px;
    left: 50%;
    margin-left: -48px;
}
.loginBtn {
  width: 100%;
    height: 52px;
    background: linear-gradient(262deg,#2e50e1,#6878f0);
    opacity: .91;
    border-radius: 8px;
    color: #fff;
    text-shadow: 0 7px 22px #cfcfcf;
}
.login-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;

  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 40px 35px 0;
    margin: 0 auto;
    // overflow: hidden;
  }

  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;

    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }

  .title-container {
    position: relative;

    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
}
</style>
