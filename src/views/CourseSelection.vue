<template>
	<div>
		<!--卡片视图区域-->
		<el-card>
			<h1>学生选课页面</h1>
			<!-- 搜索栏 -->
			<!-- <el-row :gutter="20">
				<el-col :span="8">
					<el-input placeholder="请输入内容"
										clearable>
						<el-button slot="append"
											 icon="el-icon-search"></el-button>
					</el-input>
				</el-col>
			</el-row> -->
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

				<el-table-column label="加入课程"
												 width="150px"
												 prop="courseId">
					<template slot-scope="scope">
						<el-button type="primary"
											 icon="el-icon-plus"
											 size="mini"
											 v-show="showButton"
											 @click="Select(scope.row.courseId)"></el-button>

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
			showButton: true,
		}
	},
	methods: {
		Select (value) {
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
			axios.post('/api/courseSelection', {
				courseSelectionCourseId: value,
			}, {
				headers: {
					'Content-Type': 'multipart/form-data',
					'token': this.$store.getters.getToken,

				}
			}).then(
				res => {
					console.log(res);
					if (res.data == '已经选择过该课程') {
						this.$message.error('已经选择过该课程')
					}
					if (res.data.courseSelectionCourseId !== null) {
						this.$message.success('课程选择成功')
					}
					window.location.reload()
				}
			)
			// .catch(
			// 	// this.$message.error('请确认是否为学生登录')
			// )
		}
	},

	created () {
		console.log()
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
h1 {
	height: 10px;
}
</style>