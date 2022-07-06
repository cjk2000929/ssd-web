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
					<h3>高校智慧门户</h3>
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
				<el-form-item prop="identify"
											class="identify_container">
					<el-radio-group v-model="loginForm.identify">

						<el-radio label="radio1"
											@change="valueChange(1)">教师</el-radio>
						<el-radio label="radio2"
											@change="valueChange(0)">学生</el-radio>
					</el-radio-group>
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
import axios from 'axios'
export default {
	data () {
		return {
			value: 1,
			loginForm: {
				username: '',
				password: '',
				identify: '',

			},
			loginFormRules: {
				username: [
					{ required: true, message: '请输入登录账号', trigger: 'blur' },
					{ min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
				],
				password: [
					{ required: true, message: '请输入登录密码', trigger: 'blur' },
					{ min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }
				],
				identify: [
					{
						required: true,
						message: "请选择身份",
						trigger: "change"
					}
				]
			}
		}
	},
	methods: {
		valueChange (number) {
			this.value = number
			console.log(this.value)
		},

		resetLoginForm () {
			this.$refs.loginFormRef.resetFields()

		},
		login () {
			this.$refs.loginFormRef.validate(valid => {
				if (!valid) return;

				axios.post('/api/user/login',
					{
						username: this.loginForm.username,
						password: this.loginForm.password,
						identify: this.value
					}
				).then(res => {
					console.log(res)


					this.$message.success('登录成功')
					this.$store.commit('set_token', res.data.token)
					this.$store.commit('identifySelect', this.value)
					window.sessionStorage.setItem('token', res.data.token)
					window.sessionStorage.setItem('identify', res.data.identify)
					if (this.$store.state.token) {

						this.$router.push('/index')
						if (res.data.identify == 1) {
							this.$message.success("教师:" + res.data.username + '登录成功')
						} else if (res.data.identify == 0) {
							this.$message.success("学生:" + res.data.username + '登录成功')
						}
						console.log(this.$store.state.token)

					} else {
						this.$router.replace('/login');

					}


				}).catch()


			})


		}
	}

}
</script>
<style lang="less" scoped="scoped">
.login_container {
	background-color: #2b4b6b;
	height: 100vh;
}
.identity_container {
	text-align: center;
}
.login_box {
	background: white;
	width: 450px;
	height: 350px;
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