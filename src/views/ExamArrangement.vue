<template>
	<div>
		<!--卡片视图区域-->
		<el-card>
			<div class="title">
				<h1>考试安排页面</h1>
			</div>
			<!-- table表格区域 -->

			<el-table border
								stripe
								:data="examLists">

				<el-table-column label="课程编号"
												 prop="examCourseNumber"
												 width="250px"></el-table-column>
				<el-table-column label="课程名称"
												 prop="examCourseName"></el-table-column>

				<el-table-column label="考试时间"
												 prop="examTime"
												 width="300px"></el-table-column>
				<el-table-column width="300px"
												 prop="examAddress"
												 label="考试地点"></el-table-column>

			</el-table>
		</el-card>
	</div>

</template>

<script>
import axios from 'axios';

export default {
	data () {
		return {
			examLists: []
		}
	},
	created () {
		axios.get('/api/exam/student',
			{
				headers: {
					'Content-Type': 'multipart/form-data',
					'token': this.$store.getters.getToken,

				}
			}).then(res => {
				console.log(res);
				this.examLists = res.data
			})
	}
}
</script>
<style lang="less" scoped>
</style>