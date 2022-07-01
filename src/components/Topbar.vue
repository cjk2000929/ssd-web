<template>
	<div class="header_container">
		<i class="icon"
			 @click="handleMenu"><img src="../assets/icon/box.png"
					 alt=""></i>
		<span>高校智慧门户系统</span>
		<i class="icon"><img src="../assets/icon/user.png"
					 alt=""></i>
	</div>
</template>
<script>

export default {
	methods: {
		handleMenu () {
			this.$store.commit('collapseMenu')
			console.log("菜单收放")
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
.header_container {
	display: flex;
	justify-content: space-between;
}
</style>