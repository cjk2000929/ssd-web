<template>
	<div>
		<!--卡片视图区域-->
		<el-card>
			<div class="title">
				<h1>学生退课页面 </h1>
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

				<el-table-column label="退出课程"
												 width="150px"
												 prop="courseId">
					<template slot-scope="scope">
						<el-button type="danger"
											 icon="el-icon-minus"
											 size="mini"
											 v-show="showButton"
											 @click="Drop(scope.row.courseId)"></el-button>

					</template>
				</el-table-column>
			</el-table>
		</el-card>
	</div>

</template>


<script>
import axios from 'axios'
export default {
	data () {
		return {
			courseLists: [],
			showButton: true
		}
	},
	methods: {
		Drop (value) {
			console.log(value);
			console.log(this.$store.getters.getToken);
			// axios({
			// 	url: '/api/courseSelection',
			// 	method: 'POST',
			// 	headers: {
			// 		'Content-Type': 'multipart/form-data',
			// 		token: this.$store.getters.getToken,
			// 	},
			// 	data: {
			// 		courseSelectionCourseId: value,
			// 	}

			// }).then(res => {
			// 	console.log(res)
			// })
			axios.delete('/api/courseSelection', {
				params: { id: value },
				headers: {
					'Content-Type': 'multipart/form-data',
					'token': this.$store.getters.getToken,

				}
			}).then(
				res => {
					console.log(res);
					this.$message.success('退课成功')
					window.location.reload()
				}
			)
			// .catch(
			// 	// this.$message.error('请确认是否为学生登录')
			// )
		}
	},

	created () {
		axios({
			url: '/api/course/choosed',
			method: 'GET',
			headers: {
				'Content-Type': 'multipart/form-data',
				'token': this.$store.getters.getToken,

			}
		}).then(
			res => {
				console.log(res);
				this.courseLists = res.data
			}
		)
	},

}

</script>

<style lang="less" scoped>
.title {
	height: 100px;
}
</style>