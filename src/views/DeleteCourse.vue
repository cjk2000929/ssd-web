<template >
	<div>
		<!--卡片视图区域-->
		<el-card>
			<div class="title">
				<h1>课程删除页面</h1>
			</div>
			<!-- table表格区域 -->

			<el-table border
								stripe
								:data="courseLists">
				<el-table-column label="课程编号"
												 prop="courseNumber"
												 width="250px"></el-table-column>
				<el-table-column label="课程名称"
												 prop="courseName"></el-table-column>
				<el-table-column label="授课老师"
												 prop="courseTeacherName"
												 width="150px">
				</el-table-column>
				<el-table-column label="人数限制"
												 prop="coursePersonLimit"
												 width="150px"></el-table-column>
				<el-table-column width="150px"
												 prop="courseSelectNumber"
												 label="已选人数"></el-table-column>

				<el-table-column label="删除课程"
												 width="150px"
												 prop="courseId">
					<template slot-scope="scope">
						<el-button type="danger"
											 icon="el-icon-close"
											 size="mini"
											 @click="deleteCourse(scope.row.courseId)"></el-button>

					</template>
				</el-table-column>
			</el-table>
		</el-card>
	</div>

</template>
<script>
import axios from 'axios';
export default {
	data () {
		return {
			courseLists: [],
		}
	},
	methods: {
		deleteCourse (id) {
			axios.delete('/api/course', { params: { id: id } }).then(res => {
				console.log(res);
				this.$message.success('删除成功')
				window.location.reload()
			})

		}
	},
	created () {
		axios({
			url: '/api/course',
			method: 'GET'
		}).then(res => {
			// console.log(res);
			this.courseLists = res.data
		})
	},

}
</script>
<style lang="less" scoped>
.title {
	height: 100px;
}
</style>