<template>
	<el-card>
		<div class="title">
			<h1>公告发布页面</h1>
		</div>
		<el-form ref="textRef"
						 :model="form"
						 :rules="formRules"
						 label-width="500px">
			<el-form-item label="标题"
										prop="title">
				<el-col :span="10">
					<el-input v-model="form.title"></el-input>
				</el-col>
			</el-form-item>
			<el-form-item label="作者"
										prop="author">
				<el-col :span="4">
					<el-input v-model="form.author"></el-input>
				</el-col>
			</el-form-item>

			<el-form-item label="内容"
										prop="content">
				<el-col :span="15">
					<el-input type="textarea"
										v-model="form.content"
										:rows="7"></el-input>
				</el-col>
			</el-form-item>
			<el-form-item>
				<el-button type="primary"
									 @click="onSubmit">立即创建</el-button>
				<el-button type="info"
									 @click="resetForm">取消</el-button>

			</el-form-item>
		</el-form>
	</el-card>

</template>
<script>
import axios from 'axios';
export default {
	data () {
		return {
			form: {
				title: '',
				author: '',
				content: '',

			},
			formRules: {
				title: [
					{ required: true, message: '请输入标题', trigger: 'blur' }
				],
				author: [
					{ required: true, message: '请输入作者', trigger: 'blur' }
				],
				content: [
					{ required: true, message: '请输入内容', trigger: 'blur' }
				],
			}
		}
	},
	methods: {
		onSubmit () {
			console.log('submit!');
			this.$refs.textRef.validate(valid => {
				if (!valid) return;
				axios.post('/api/notice',
					{
						noticeDetailTitle: this.form.title,
						noticeDetailText: this.form.content
					}).then(
						res => {
							console.log(res);
							this.$message.success('添加成功')
							window.location.reload()
						}
					)
			})
		},
		resetForm () {
			this.$refs.textRef.resetFields()


		},
	}
}
</script>
<style lang="less" scoped>
.title {
	padding: 0;
}
</style>
