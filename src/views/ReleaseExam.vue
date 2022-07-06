<template>
	<div>
		<!--卡片视图区域-->
		<el-card>
			<div class="title">
				<h1>课程考试发布页面</h1>
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

				<el-table-column label="考试发布"
												 width="150px"
												 prop="courseId">
					<template slot-scope="scope">
						<el-button type="success"
											 icon="el-icon-upload2"
											 size="mini"
											 @click="Exam(scope.row.courseId)"></el-button>
						<el-dialog title="考试信息"
											 :visible.sync="dialogFormVisible"
											 :show-close="false">
							<el-form :model="form"
											 :rules="formRules"
											 ref="form">

								<el-form-item label="考试地点"
															label-width="200px"
															prop="examPlace">
									<el-input v-model="form.examPlace"
														autocomplete="off"
														style="width: 200px;"></el-input>
								</el-form-item>

								<!-- <el-form-item label="考试时间"
															required
															label-width="200px">
									<el-col :span="8">
										<el-form-item prop="examDate">
											<el-date-picker type="date"
																			placeholder="选择日期"
																			v-model="form.examDate"
																			value-format="yyyy-MM-dd"
																			style="width: 200px;"></el-date-picker>

										</el-form-item>
									</el-col>
									<el-col class="line"
													:span="2">-</el-col>
									<el-col :span="8">
										<el-form-item prop="examTime">

											<el-time-select v-model="form.examTime"
																			:picker-options="{
                                            start: '08:30',
                                            step: '00:15',
                                            end: '22:30'}"
																			placeholder="选择时间"
																			value-format='HH:mm:ss'>
											</el-time-select>
										</el-form-item>
									</el-col>
								</el-form-item> -->
								<el-form-item label="考试时间"
															label-width="200px"
															prop="examDate">
									<el-date-picker v-model="form.examDate"
																	type="datetime"
																	placeholder="选择日期时间"
																	value-format="yyyy-MM-dd HH:mm:ss">
									</el-date-picker>
								</el-form-item>
							</el-form>
							<div slot="footer"
									 class="dialog-footer">
								<el-button @click="Cancel">取 消</el-button>
								<el-button type="primary"
													 @click="Submit">确 定</el-button>
							</div>
						</el-dialog>

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
			id: 0,
			courseLists: [],
			dialogFormVisible: false,
			form: {
				examPlace: '',
				examDate: '',
			},
			formRules: {
				examPlace: [
					{ required: true, message: '请输入考试地点', trigger: 'blur' }
				],
				examDate: [
					{ required: true, message: '请选择时间', trigger: 'change' }
				],

			}

		}
	},
	methods: {
		Exam (value) {
			this.dialogFormVisible = true;
			this.id = value
		},
		Submit () {
			console.log(this.form.examDate);


			axios.post('/api/exam',
				{
					examCourseId: this.id,
					examTime: this.form.examDate,
					examAddress: this.form.examPlace
				},
				{
					headers: {
						'Content-Type': 'application/json',
					}
				}
			).then(
				res => {
					console.log(res);
					if (res.status == 200) {
						if (res.data == '抱歉,该课程已安排考试') {
							this.$message.error('抱歉,该课程已安排考试')
						}
						if (res.data.examCourseName != null)
							this.$message.success(res.data.examCourseName + '考试发布成功')

					}

					this.dialogFormVisible = false;
				})
			this.resetForm()

		},
		Cancel () {
			this.dialogFormVisible = false
			this.resetForm()
		},
		resetForm () {
			this.form.examDate = '',
				this.form.examPlace = ''
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

<!-- <template>
	<el-card>
		<div class="title">
			<h1>考试发布页面</h1>
		</div>
		<el-form ref="textRef"
						 :model="form"
						 :rules="formRules"
						 label-width="500px">
			<el-form-item label="课程编号"
										prop="number">
				<el-col :span="6">
					<el-input v-model="form.number"></el-input>
				</el-col>
			</el-form-item>
			<el-form-item label="课程名称"
										prop="className">
				<el-col :span="6">
					<el-input v-model="form.className"></el-input>
				</el-col>
			</el-form-item>

			<el-form-item label="授课老师"
										prop="teacherName">
				<el-col :span="4">
					<el-input v-model="form.teacherName"></el-input>
				</el-col>

			</el-form-item>
			<el-form-item label="考试时间"
										required>
				<el-col :span="8">
					<el-form-item prop="examDate">
						<el-date-picker type="date"
														placeholder="选择日期"
														v-model="form.examDate"
														style="width: 300px;"></el-date-picker>
					</el-form-item>
				</el-col>
				<el-col class="line"
								:span="2">-</el-col>
				<el-col :span="8">
					<el-form-item prop="examTime">
						<el-time-picker placeholder="选择时间"
														v-model="form.examTime"
														style="width: 300px;"></el-time-picker>
					</el-form-item>
				</el-col>
			</el-form-item>

			<el-form-item label="考试地点"
										prop="examPlace">
				<el-col :span="4">
					<el-input v-model="form.examPlace"></el-input>
				</el-col>

			</el-form-item>
			<el-form-item>
				<el-button type="primary"
									 @click="releaseExam">立即创建</el-button>
				<el-button type="info"
									 @click="resetForm">取消</el-button>

			</el-form-item>
		</el-form>
	</el-card>

</template>
<script>
import axios from 'axios'
export default {
	data () {
		return {
			form: {
				number: '',
				className: '',
				teacherName: '',
				examDate: '',
				examTime: '',
				examPlace: '',

			},
			formRules: {
				number: [
					{ required: true, message: '请输入课程编号', trigger: 'blur' }
				],
				className: [
					{ required: true, message: '请输入课程名称', trigger: 'blur' }
				],
				teacherName: [
					{ required: true, message: '请输入教师名字', trigger: 'blur' }
				],
				examDate: [
					{ type: 'date', required: true, message: '请选择日期', trigger: 'change' }
				],
				examTime: [
					{ type: 'date', required: true, message: '请选择时间', trigger: 'change' }
				],
				examPlace: [
					{ required: true, message: '请输入考试地点', trigger: 'blur' }
				],
			}
		}
	},
	methods: {
		resetForm () {
			this.$refs.textRef.resetFields()
			console.log(this.$refs.textRef)
		},
    releaseExam(){
      axios.post('/api/exam',{
        data:{
          examCourseId:this.
        }
      })
    }
	}
}
</script>
<style lang="less" scoped>
.title {
	padding: 0;
}
</style> -->
