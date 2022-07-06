<template>
	<div class="Left_container">
		<el-menu default-active="2"
						 class="el-menu-vertical-demo"
						 background-color="#d3dce6"
						 :collapse="isCollapse">
			<el-menu-item index="2"
										@click="toOtherviews('./index')">
				<i class="el-icon-house"></i>
				<span slot="title">主页</span>
			</el-menu-item>
			<el-submenu index="1">
				<template slot="title">
					<i class="el-icon-reading"></i>
					<span>学生功能</span>
				</template>
				<el-menu-item-group>
					<el-menu-item index="1-1"
												@click="toStudent('./cselection')">选课</el-menu-item>
					<el-menu-item index="1-2"
												@click="toStudent('./cdrop')">退课</el-menu-item>
					<el-menu-item index="1-3"
												@click="toStudent('./exam')">考试安排</el-menu-item>

				</el-menu-item-group>

			</el-submenu>
			<el-submenu index="2">
				<template slot="title">
					<i class="el-icon-school"></i>
					<span>教师功能</span>
				</template>
				<el-menu-item-group>
					<el-menu-item index="2-1"
												@click="toTeacher('./addcourse')">添加课程</el-menu-item>
					<el-menu-item index="2-2"
												@click="toTeacher('./deletecourse')">删除课程</el-menu-item>
					<el-menu-item index="2-3"
												@click="toTeacher('./releaseexam')">发布考试</el-menu-item>
					<el-menu-item index="2-4"
												@click="toTeacher('./releasenotice')">发布通告</el-menu-item>

				</el-menu-item-group>

			</el-submenu>

			<el-menu-item index="3"
										@click="toOtherviews('./news')">
				<i class="el-icon-news"></i>
				<span slot="title">新闻资讯</span>
			</el-menu-item>
			<el-menu-item index="4"
										@click="logOut">
				<i class="el-icon-switch-button"></i>
				<span slot="title">退出</span>
			</el-menu-item>
		</el-menu>
	</div>
</template>

<script>
import axios from 'axios'

export default {
	name: 'Left',
	methods: {
		toOtherviews (url) {
			this.$router.push(url)
		},
		toStudent (url) {
			// if (this.$store.state.identify === 0) {
			// 	this.$router.push(url)
			// } else (
			// 	this.$router.push('./notastudent')
			// )
			this.$router.push(url)

		},
		toTeacher (url) {
			// if (this.$store.state.identify === 1) {
			// 	this.$router.push(url)
			// } else (
			// 	this.$router.push('./notateacher')
			// )
			this.$router.push(url)

		},
		logOut () {
			console.log('退出登录')
			axios.get('/api/user/logout').then(() => {
				this.$store.commit('del_token')
				window.sessionStorage.removeItem('token')
				this.$router.push('./login')

			})

		}
	},
	computed: {
		isCollapse () {
			return this.$store.state.isCollapse
		}
	}


}
</script>
<style lang="less" scoped>
.icon {
	margin-top: 5px;
}
.el-header {
	background-color: #b3c0d1;
	color: #333;
	text-align: center;
	line-height: 60px;
	display: flex;
	justify-content: space-between;
}
.el-aside {
	background-color: #d3dce6;
	color: #333;
	text-align: center;
	line-height: 200px;
}
.el-main {
	background-color: #e9eef3;
	color: #333;
	text-align: center;
	line-height: 160px;
}
body > .el-container {
	margin-bottom: 40px;
}
.el-container {
	height: 100vh;
}
</style>