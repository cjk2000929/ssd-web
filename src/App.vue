<template>
	<div id='app'>
		<el-container v-if="$route.meta.keepAlive">
			<el-header>
				<keep-alive>
					<!-- 头部栏 -->
					<Topbar></Topbar>
				</keep-alive>

			</el-header>
			<el-container>
				<el-aside width="asidewidth">
					<keep-alive>
						<!-- 侧边栏 -->
						<Left></Left>
					</keep-alive>

				</el-aside>
				<el-main>
					<router-view></router-view>
				</el-main>
			</el-container>
		</el-container>
		<!-- 登录页 -->
		<router-view v-if="!$route.meta.keepAlive"></router-view>
	</div>
</template>
<script>
import Topbar from '@/components/Topbar'
import Left from '@/components/Left'
import Login from '@/components/Login'
export default {
	data () {
		return {
			isCollapse: true

		}
	},
	name: 'app',
	components: {
		Topbar,
		Left,
		Login
	},

	methods: {

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
}
body > .el-container {
	margin-bottom: 40px;
}
.el-container {
	height: 100vh;
}
</style>
