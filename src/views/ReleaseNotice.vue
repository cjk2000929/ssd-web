<template>
	<el-card>
		<div class="title">
			<h1>公告发布页面</h1>
		</div>
		<el-form ref="form"
						 :model="form"
						 label-width="500px">
			<el-form-item label="标题">
				<el-col :span="10">
					<el-input v-model="form.name"></el-input>
				</el-col>
			</el-form-item>
			<el-form-item label="作者">
				<el-col :span="4">
					<el-input v-model="form.name"></el-input>
				</el-col>
			</el-form-item>

			<el-form-item label="内容">
				<el-col :span="15">
					<el-input type="textarea"
										v-model="form.desc"
										:rows="7"></el-input>
				</el-col>
			</el-form-item>
			<el-form-item>
				<el-button type="primary"
									 @click="onSubmit">立即创建</el-button>
				<el-button>取消</el-button>
			</el-form-item>
		</el-form>
	</el-card>

</template>
<script>
export default {
	data () {
		return {
			form: {
				name: '',
				region: '',
				date1: '',
				date2: '',
				delivery: false,
				type: [],
				resource: '',
				desc: ''
			}
		}
	},
	methods: {
		onSubmit () {
			console.log('submit!');
		}
	}
}
</script>
<style lang="less" scoped>
.title {
	padding: 0;
}
</style>
