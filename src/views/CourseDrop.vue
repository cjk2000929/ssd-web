<template>
	<div>
		<!--卡片视图区域-->
		<el-card>
			<div class="title">
				<h1>学生退课页面 </h1>
			</div>
			<!-- table表格区域 -->

			<el-table :data="coursesList"
								border
								stripe>
				<el-table-column width="150px"
												 prop="courses_id"
												 label="课程ID"></el-table-column>
				<el-table-column label="课程编号"
												 prop="courses_number"
												 width="150px"></el-table-column>
				<el-table-column label="课程名"
												 prop="courses_name"></el-table-column>
				<el-table-column label="授课老师"
												 prop="teachers_name"
												 width="150px">
					<template slot-scope="{}">

					</template>
				</el-table-column>
				<el-table-column label="人数限制"
												 prop="students_limit"
												 width="150px"></el-table-column>

				<el-table-column label="退出课程"
												 width="150px">
					<template slot-scope="{}">
						<el-button type="info"
											 icon="el-icon-edit"
											 size="mini"></el-button>

					</template>
				</el-table-column>
			</el-table>
		</el-card>
	</div>

</template>


<script>
export default {
	data () {
		return {
			//查询参数对象
			queryInfo: {
				query: '',
				pagenum: 1,
				pagesize: 10
			},
			// 商品列表
			goodsList: [],
			// 总数据条数
			total: 0
		}
	},

	created () {
		this.getGoodsList()
	},
	methods: {
		// 根据id删除对应的商品
		async removeById (id) {
			const confirmResult = await this.$confirm('此操作将永久删除该商品，是否继续？', '提示', {
				confirmButtonText: '确定',
				cancelButtonText: '取消',
				type: 'warning'
			}).catch(err => err)
			// 用户取消了删除操作
			if (confirmResult !== 'confirm') return this.$message.info('已取消删除！')
			// 删除的业务逻辑
			const { data: res } = await this.$http.delete('goods/' + id)
			if (res.meta.status !== 200) return this.$message.error('删除商品失败！')
			// 删除成功就关闭对话框并重新刷新列表数据
			this.$message.success('删除商品成功!')
			this.getGoodsList()
		},
	},
}

</script>

<style lang="less" scoped>
.title {
	height: 100px;
}
</style>