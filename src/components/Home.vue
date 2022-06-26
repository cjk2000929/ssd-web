<template>
	<div class="home_container">
		<el-container>
			<el-header>
				<i class="icon"
					 @click="Collapse"><img src="../assets/icon/box.png"
							 alt=""></i>
				<span>高校智慧门户系统</span>
				<i class="icon"><img src="../assets/icon/user.png"
							 alt=""></i>
			</el-header>
			<el-container>
				<el-aside width="asidewidth">
					<el-menu default-active="2"
									 class="el-menu-vertical-demo"
									 background-color="#d3dce6"
									 :collapse="isCollapse">
						<el-menu-item index="2">
							<i class="el-icon-menu"></i>
							<span slot="title">主页</span>
						</el-menu-item>
						<el-submenu index="1">
							<template slot="title">
								<i class="el-icon-location"></i>
								<span>选课系统</span>
							</template>
							<el-menu-item-group>
								<template slot="title">课程</template>
								<el-menu-item index="1-1">专业课</el-menu-item>
								<el-menu-item index="1-2">选修课</el-menu-item>
								<el-menu-item index="1-3">交叉通识课</el-menu-item>
							</el-menu-item-group>
							<el-menu-item-group title="个人">
								<el-menu-item index="1-4">学分</el-menu-item>
							</el-menu-item-group>

						</el-submenu>

						<el-menu-item index="3">
							<i class="el-icon-document"></i>
							<span slot="title">导航三</span>
						</el-menu-item>
						<el-menu-item index="4">
							<i class="el-icon-setting"></i>
							<span slot="title">导航四</span>
						</el-menu-item>
					</el-menu>
				</el-aside>
				<el-main>
					<router-view></router-view>
				</el-main>
			</el-container>
		</el-container>

	</div>
</template>
<script>
export default {
	data () {
		return {
			isCollapse: true
		}
	},
	components: {

	},
	methods: {
		Collapse () {
			this.isCollapse = !this.isCollapse
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