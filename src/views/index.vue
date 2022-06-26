<template>
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
		<div class="bottom_container">
			<!-- 新闻栏 -->

			<div class="news_container">
				<el-row class="content_row">
					<el-col :xs="12"
									:sm="12"
									:md="12"
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
							<el-tab-pane label="校园快讯"
													 name="quick">
								<ul>
									<li></li>
								</ul>
							</el-tab-pane>
							<el-tab-pane label="媒体白云"
													 name="media">
								<ul>
									<li></li>
								</ul>
							</el-tab-pane>
							<el-tab-pane label="学校通知"
													 name="notic">
								<ul>
									<li></li>
								</ul>
							</el-tab-pane>
						</el-tabs>
					</el-col>
				</el-row>
			</div>
			<!-- 应用栏 -->
			<div class="calendar_container">

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
	width: 1000px;
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
	justify-content: space-between;
	flex-wrap: wrap;
}
.content_row {
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
}
</style>