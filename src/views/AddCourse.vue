<template>
	<div class="form_container">
		<div class="card_container">
			<el-card>
				<div class="title">
					<h1>课程添加页面</h1>
				</div>
				<el-form ref="formRef"
								 :model="addForm"
								 label-width="300px"
								 :rules="addRules"
								 size="mini">
					<!-- <el-form-item label="课程编号"
												prop="classNumber">
						<el-col :span="10">
							<el-input v-model="addForm.classNumber"></el-input>
						</el-col>
					</el-form-item> -->
					<el-form-item label="课程名称"
												prop="className">

						<el-col :span="10">
							<el-input v-model="addForm.className"></el-input>
						</el-col>
					</el-form-item>
					<el-form-item label="授课老师"
												prop="teacherName">
						<el-col :span="6">
							<el-input v-model="addForm.teacherName"></el-input>
						</el-col>
					</el-form-item>
					<el-form-item label="人数限制"
												prop="peopleLimit">
						<el-col :span="5">
							<el-input v-model.number="addForm.peopleLimit"></el-input>
						</el-col>
					</el-form-item>

					<el-form-item size="large">
						<el-button type="primary"
											 @click="onSubmit">立即创建</el-button>
						<el-button @click="resetForm">取消</el-button>
					</el-form-item>
				</el-form>
			</el-card>
		</div>

	</div>
</template>
<script>
import axios from 'axios';
export default {
	data () {
		return {
			addForm: {
				// classNumber: '',
				className: '',
				teacherName: '',
				peopleLimit: null,

			},
			addRules: {
				// classNumber: [
				// 	{ required: true, message: '请输入课程编号', trigger: 'blur' }
				// ],
				className: [
					{ required: true, message: '请输入课程名称', trigger: 'blur' }
				],
				teacherName: [
					{ required: true, message: '请输入教师名字', trigger: 'blur' }
				],
				peopleLimit: [
					{ type: 'number', min: 0, max: 50, required: true, message: '请输入学生人数,0-50人之间', trigger: 'blur' },

				]

			}
		};
	},
	methods: {
		resetForm () {
			this.$refs.formRef.resetFields()

		},
		onSubmit () {
			this.$refs.formRef.validate(valid => {
				if (!valid) return
				axios.post('/api/course',

					{
						courseName: this.addForm.className,
						courseTeacherName: this.addForm.teacherName,
						coursePersonLimit: this.addForm.peopleLimit
					}


				).then(res => {
					console.log(res)
					this.$message.success('添加成功')
					window.location.reload()
				}).catch()


			})

		}
	}


}
</script>
<style lang="less" scoped>
.form_container {
	position: relative;
	// top: 50%;
	// left: 50%;
	// transform: translateX(-50%, -50%);
}
.card_container {
	width: 800px;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%);
}
.title {
	height: 100px;
}
</style>