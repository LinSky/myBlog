<template>
	<el-row class="container">
		<el-col :span="24" class="header">
				<span>管理后台</span>
		</el-col>
		<el-col :span="24" class="main">
			<aside>
        <el-menu class="el-menu-vertical-demo" theme="dark" default-active="write" v-bind:router="true">
          <el-menu-item index="write"><i class="el-icon-edit"></i>写文章</el-menu-item>
          <el-menu-item index="uploadimg"><i class="el-icon-upload2"></i>上传图片</el-menu-item>
          <el-menu-item index="uploadimg"><i class="el-icon-setting"></i>文章管理</el-menu-item>
        </el-menu>
      </aside>
			<section class="content-container">
        <router-view></router-view>
			</section>
		</el-col>
	</el-row>
</template>

<script>
import { mapState } from 'vuex'
export default {
	data () {
		return {
		}
	},
	computed: mapState({ user: state => state.user }),
	methods: {
  },
	created () {
		if (!this.user.id) {
      this.$router.push('/login')
    }
	},
	mounted () {
	}
}
</script>

<style scoped lang="less">
	.container {
		position: absolute;
		top: 0px;
		bottom: 0px;
		width: 100%;
		.header {
			height: 60px;
			line-height: 60px;
			background: #1F2D3D;
			color: #c0ccda;
      span{
        font-size: 24px; padding: 0 10px; color: #FFF;
      }
		}
		.main {
			background: #324057;
			position: absolute;
			top: 60px;
			bottom: 0px;
			overflow: hidden;
			aside {
				width: 230px;
			}
			.content-container {
				background: #f1f2f7;
				position: absolute;
				right: 0px;
				top: 0px;
				bottom: 0px;
				left: 230px;
				overflow-y: scroll;
				padding: 20px;
				.breadcrumb-container {
					margin-bottom: 15px;
					.title {
						width: 200px;
						float: left;
						color: #475669;
					}
					.breadcrumb-inner {
						float: right;
					}
				}
				.content-wrapper {
					background-color: #fff;
					box-sizing: border-box;
				}
			}
		}
	}
</style>
