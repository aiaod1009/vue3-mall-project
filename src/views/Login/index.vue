<script setup>


// 表单检验(账号名+密码)

import { onMounted, ref } from 'vue'
import 'element-plus/theme-chalk/el-message.css'
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'

import { useUserStore } from '@/stores/userStore'

const userStore = useUserStore()

// 1. 准备表单对象
const form = ref({
  account: '',
  password: '',
  agree: true
})

// 页面挂载时从 store 回填账号和密码（如果有）
onMounted(() => {
  form.value.account = userStore.userInfo.account || ''
  form.value.password = userStore.userInfo.password || ''
})

// 2.准备规则对象
const rules = {
  account: [
    { required: true, message: '用户名不能为空', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '密码不能为空', trigger: 'blur' },
    { min: 6, max: 14, message: '密码长度在6-14位之间', trigger: 'blur' },
  ],
  agree: [
    {
      validator: (rule, value, callback) => {
        // 自定义校验逻辑
        // 勾选就通过 不勾选就不通过
        if (value) {
          callback()
        } else {
          callback(new Error('请勾选协议'))
        }
      }
    }
  ]
}

// 3. 获取form实例做统一校验
const formRef = ref(null)
const router = useRouter()
const doLogin = () => {
  // 调用实例方法
  formRef.value.validate(async (valid) => {
    const { account, password } = form.value
    // valid: 所有表单都通过校验 才为ture
    console.log(valid)
    // 以valid作为判断条件 如果通过校验才执行登录逻辑
    if (valid) {
      // TODO LOGIN
      await userStore.getUserInfo({ account, password })
      // 1. 提示用户
      ElMessage({ type: 'success', message: '登陆成功' })
      // 2. 跳转首页
      router.replace({ path: '/' })
    }
  })

}

// 1. 用户名与密码 只需要通过简单的配置(看文档的方式 - 复杂功能通过不同组件拆解)
// 2. 同意协议 自定义规则 validator:(rule,value,callback)=>{}
// 3. 统一校验 通过调用form实例的方法 validate => true
</script>


<template>
  <div>
    <header class="login-header">
      <div class="container m-top-20">
        <h1 class="logo">
          <RouterLink to="/">小兔鲜</RouterLink>
        </h1>
        <RouterLink class="entry" to="/">
          进入网站首页
          <i class="iconfont icon-angle-right"></i>
          <i class="iconfont icon-angle-right"></i>
        </RouterLink>
      </div>
    </header>
    <section class="login-section">
      <div class="wrapper">
        <nav>
          <a href="javascript:;">账户登录</a>
        </nav>
        <div class="account-box">
          <div class="form">
            <el-form ref="formRef" :model="form" :rules="rules" label-position="right" label-width="60px" status-icon>
              <el-form-item prop="account" label="账户">
                <el-input v-model="form.account" />
              </el-form-item>
              <el-form-item prop="password" label="密码">
                <el-input v-model="form.password" />
              </el-form-item>
              <el-form-item prop="agree" label-width="22px">
                <el-checkbox size="large" v-model="form.agree">
                  我已同意隐私条款和服务条款
                </el-checkbox>
              </el-form-item>
              <el-button size="large" class="subBtn" @click="doLogin">点击登录</el-button>
            </el-form>
          </div>
        </div>
      </div>
    </section>

    <footer class="login-footer">
      <div class="container">
        <p>
          <a href="javascript:;">关于我们</a>
          <a href="javascript:;">帮助中心</a>
          <a href="javascript:;">售后服务</a>
          <a href="javascript:;">配送与验收</a>
          <a href="javascript:;">商务合作</a>
          <a href="javascript:;">搜索推荐</a>
          <a href="javascript:;">友情链接</a>
        </p>
        <p>CopyRight &copy; 小兔鲜儿</p>
      </div>
    </footer>
  </div>
</template>

<style scoped lang='scss'>
@import '@/styles/var.scss';

.login-header {
  background: $bgCard;
  border-bottom: 1px solid $borderColor;

  .container {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
  }

  .logo {
    width: 200px;

    a {
      display: block;
      height: 132px;
      width: 100%;
      text-indent: -9999px;
      background: url("@/assets/images/logo.png") no-repeat center 18px / contain;
    }
  }

  .sub {
    flex: 1;
    font-size: 24px;
    font-weight: normal;
    margin-bottom: 38px;
    margin-left: 20px;
    color: $textSecondary;
  }

  .entry {
    width: 120px;
    margin-bottom: 38px;
    font-size: 16px;
    color: $textSecondary;

    i {
      font-size: 14px;
      color: $xtxColor;
      letter-spacing: -5px;
    }
  }
}

.login-section {
  background: linear-gradient(135deg, $bgDark 0%, $bgCard 100%);
  height: 488px;
  position: relative;

  .wrapper {
    width: 380px;
    background: $bgCard;
    position: absolute;
    left: 50%;
    top: 54px;
    transform: translate3d(100px, 0, 0);
    box-shadow: 0 0 20px rgba(0, 217, 165, 0.15);
    border-radius: 12px;
    border: 1px solid $borderColor;

    nav {
      font-size: 14px;
      height: 55px;
      margin-bottom: 20px;
      border-bottom: 1px solid $borderColor;
      display: flex;
      padding: 0 40px;
      text-align: right;
      align-items: center;

      a {
        flex: 1;
        line-height: 1;
        display: inline-block;
        font-size: 18px;
        position: relative;
        text-align: center;
        color: $textPrimary;
      }
    }
  }
}

.login-footer {
  padding: 30px 0 50px;
  background: $bgCard;

  p {
    text-align: center;
    color: $textMuted;
    padding-top: 20px;

    a {
      line-height: 1;
      padding: 0 10px;
      color: $textSecondary;
      display: inline-block;
      transition: color 0.3s ease;

      &:hover {
        color: $xtxColor;
      }

      ~a {
        border-left: 1px solid $borderColor;
      }
    }
  }
}

.account-box {
  .toggle {
    padding: 15px 40px;
    text-align: right;

    a {
      color: $xtxColor;

      i {
        font-size: 14px;
      }
    }
  }

  .form {
    padding: 0 20px 20px 20px;

    &-item {
      margin-bottom: 28px;

      .input {
        position: relative;
        height: 36px;

        >i {
          width: 34px;
          height: 34px;
          background: $bgHover;
          color: $textMuted;
          position: absolute;
          left: 1px;
          top: 1px;
          text-align: center;
          line-height: 34px;
          font-size: 18px;
        }

        input {
          padding-left: 44px;
          border: 1px solid $borderColor;
          height: 36px;
          line-height: 36px;
          width: 100%;
          background: $bgDark;
          color: $textPrimary;

          &.error {
            border-color: $priceColor;
          }

          &.active,
          &:focus {
            border-color: $xtxColor;
          }
        }

        .code {
          position: absolute;
          right: 1px;
          top: 1px;
          text-align: center;
          line-height: 34px;
          font-size: 14px;
          background: $bgHover;
          color: $textSecondary;
          width: 90px;
          height: 34px;
          cursor: pointer;
        }
      }

      >.error {
        position: absolute;
        font-size: 12px;
        line-height: 28px;
        color: $priceColor;

        i {
          font-size: 14px;
          margin-right: 2px;
        }
      }
    }

    .agree {
      a {
        color: $xtxColor;
      }
    }

    .btn {
      display: block;
      width: 100%;
      height: 40px;
      color: $bgDark;
      text-align: center;
      line-height: 40px;
      background: $xtxColor;
      font-weight: 600;

      &.disabled {
        background: $bgHover;
      }
    }
  }

  .action {
    padding: 20px 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .url {
      a {
        color: $textMuted;

        &:hover {
          color: $xtxColor;
        }
      }
    }
  }
}

.subBtn {
  background: $gradientPrimary;
  width: 100%;
  color: $bgDark;
  font-weight: 600;
  border: none;

  &:hover {
    box-shadow: $shadowGlow;
  }
}
</style>
