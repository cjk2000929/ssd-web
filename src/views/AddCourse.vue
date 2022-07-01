<template>
	<div class="form_container">
		<div class="card_container">
			<el-card>
				<div class="title">
					<h1>课程添加页面</h1>
				</div>
				<el-form ref="form"
								 :model="addForm"
								 label-width="300px"
								 :rules="addRules"
								 size="mini">
					<el-form-item label="课程编号"
												prop="classNumber">
						<el-col :span="10">
							<el-input v-model="addForm.classNumber"></el-input>
						</el-col>
					</el-form-item>
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
						<el-col :span="3">
							<el-input v-model="addForm.peopleLimit"></el-input>
						</el-col>
					</el-form-item>

					<el-form-item size="large">
						<el-button type="primary"
											 @click="onSubmit">立即创建</el-button>
						<el-button>取消</el-button>
					</el-form-item>
				</el-form>
			</el-card>
		</div>

	</div>
</template>
<script>
export default {
	data () {
		return {
			addForm: {
				classNumber: '',
				className: '',
				teacherName: '',
				peopleLimit: 0,

			},
			addRules: {
				classNumber: [
					{ required: true, message: '请输入课程编号', trigger: 'blur' }
				],
				className: [
					{ required: true, message: '请输入课程名称', trigger: 'blur' }
				],
				teacherName: [
					{ required: true, message: '请输入教师名字', trigger: 'blur' }
				],
				peopleLimit: [
					{ type: 'number', max: 50, required: true, message: '请输入学生人数,不超过50个人', trigger: 'blur' },

				]

			}
		};
	},
	methods: {
		onSubmit () {
			console.log('submit!');
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