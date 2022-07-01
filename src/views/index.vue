<template>
	<div>
		<div class="banner_container">
			<el-carousel :interval="3000"
									 type="card"
									 height="250px"
									 indicator-position="none">
				<el-carousel-item v-for="(item,index) in imgList"
													:key="index">
					<el-image style="width:100%; height:100%"
										:src="item.idView"
										fit="fit"></el-image>
				</el-carousel-item>
			</el-carousel>
		</div>
		<div class="bottom_container">
			<!-- 新闻栏 -->

			<div class="news_container">
				<el-row class="content_row">
					<el-col :xs="24"
									:sm="24"
									:md="24"
									:lg="12"
									:xl="12"
									class="news">
						<el-tabs>
							<el-tab-pane label="热点新闻"
													 name="hot">
								<ul>
									<li></li>
								</ul>
							</el-tab-pane>
							<el-tab-pane label="学术热点"
													 name="study">
								<ul>
									<li></li>
								</ul>
							</el-tab-pane>
							<el-tab-pane label="校园快讯"
													 name="school">
								<ul>
									<li></li>
								</ul>
							</el-tab-pane>
						</el-tabs>
					</el-col>
				</el-row>
			</div>
			<!-- 应用栏 -->
			<div class="apps_container">
				<!-- 学习平台栏 -->

				<el-row :gutter="20">

					<el-col :span="8">
						<div class="grid-content"
								 @click="toOtherwebs('https://passport2.chaoxing.com/')">
							<img src="../assets/icon/study32.png"
									 alt="">
							学习通
						</div>
					</el-col>
					<el-col :span="8">
						<div class="grid-content"
								 @click="toOtherwebs('https://www.zhihuishu.com/')">
							<img src="../assets/icon/study2.png"
									 alt="">
							智慧树
						</div>
					</el-col>
					<el-col :span="8">
						<div class="grid-content"
								 @click="toOtherwebs('https://www.yuketang.cn/')">
							<img src="../assets/icon/study3.png"
									 alt="">
							雨课堂
						</div>
					</el-col>
				</el-row>
				<el-row :gutter="20">
					<el-col :span="8">
						<div class="grid-content"
								 @click="toOtherwebs('https://www.icourse163.org/')">
							<img src="../assets/icon/mooc.png"
									 alt="">
							Mooc
						</div>
					</el-col>
					<el-col :span="8">
						<div class="grid-content"
								 @click="toOtherwebs('https://www.bilibili.com/')">
							<img src="../assets/icon/bilibili.png"
									 alt="">
							bilibili
						</div>
					</el-col>
					<el-col :span="8">
						<div class="grid-content"
								 @click="toOtherwebs('https://mail.163.com/')">
							<img src="../assets/icon/Netmail.png"
									 alt="">
							网易邮箱
						</div>
					</el-col>
				</el-row>
				<el-row :gutter="20">
					<el-col :span="8">
						<div class="grid-content">
							<img src="../assets/icon/box.png"
									 alt="">
							应用1
						</div>
					</el-col>
					<el-col :span="8">
						<div class="grid-content">
							<img src="../assets/icon/box.png"
									 alt="">
							应用2
						</div>
					</el-col>
					<el-col :span="8">
						<div class="grid-content">
							<img src="../assets/icon/box.png"
									 alt="">
							应用3
						</div>
					</el-col>
				</el-row>

			</div>
		</div>
	</div>

</template>

<script>
export default {
	data () {
		return {
			imgList: [
				{ id: 0, idView: require('../assets/banner/banner.jpg') },
				{ id: 1, idView: require('../assets/banner/banner2.jpg') },
				{ id: 2, idView: require('../assets/banner/banner3.jpg') }]
		}
	},
	methods: {
		toOtherwebs (url) {
			window.open(url, '_blank')
		}
	}

}
</script>
<style lang="less" scoped>
.el-carousel__item {
	color: #475669;
	font-size: 14px;
	opacity: 0.95;
	line-height: 200px;
	margin: 0;
}
.news_container {
	height: 350px;
	width: 700px;
}
.news {
	/* width: 50%; */
	box-sizing: border-box;
}
.news li {
	margin-bottom: 10px;
	cursor: pointer;
	transition: 0.3s;
}
.bottom_container {
	display: flex;
	justify-content: flex-start;
	flex-wrap: wrap;
}
.content_row {
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	top: 0;
	margin: 0;
	padding: 0;
}
.apps_container {
	width: 450px;
}
.grid-content {
	height: 80px;
}
</style>