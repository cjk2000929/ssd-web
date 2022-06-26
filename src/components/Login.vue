<template>
	<div class="login_container">
		<div class="login_box">
			<!-- 登录表单 -->
			<el-form ref="loginFormRef"
							 :model="loginForm"
							 :rules="loginFormRules"
							 label-width="0px"
							 class="login_form">
				<div class="login_title">
					<h3>登录页面</h3>
				</div>
				<!-- 用户名 -->
				<el-form-item prop="username">
					<el-input v-model="loginForm.username"
										prefix-icon="el-icon-user-solid">账号</el-input>
				</el-form-item>
				<!-- 密码 -->
				<el-form-item prop="password">
					<el-input type="password"
										v-model="loginForm.password"
										prefix-icon="el-icon-lock"
										show-password>密码</el-input>
				</el-form-item>

				<el-form-item class="btns">
					<el-button type="primary"
										 @click="login">登录</el-button>
					<el-button type="info"
										 @click="resetLoginForm">重置</el-button>
				</el-form-item>

			</el-form>

		</div>
	</div>
</template>

<script>
export default {
	data () {
		return {
			loginForm: {
				username: '',
				password: '',
			},
			loginFormRules: {
				username: [
					{ required: true, message: '请输入登录账号', trigger: 'blur' },
					{ min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
				],
				password: [
					{ required: true, message: '请输入登录密码', trigger: 'blur' },
					{ min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }
				]
			}
		}
	},
	methods: {
		resetLoginForm () {
			this.$refs.loginFormRef.resetFields()

		},
		login () {
			this.$refs.loginFormRef.validate((valid) => {
				console.log(valid)
			})
			this.$router.push('/home')
		}
	}

}
</script>
<style lang="less" scoped="scoped">
.login_container {
	background-color: #2b4b6b;
	height: 100vh;
}
.login_box {
	background: white;
	width: 450px;
	height: 250px;
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
}
.login_form {
	position: absolute;
	bottom: 0;
	width: 100%;
	padding: 0 20px;
	box-sizing: border-box;
}
.btns {
	display: flex;
	justify-content: center;
}
.login_title {
	display: flex;
	justify-content: center;
}
</style>