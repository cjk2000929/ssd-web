<template>
	<div>
		<!--卡片视图区域-->
		<el-card>
			<div class="title">
				<h1>课程删除页面</h1>
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
				<el-table-column label="课程名称"
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
						<el-button type="primary"
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

}
</script>
<style lang="less" scoped>
.title {
	height: 100px;
}
</style>