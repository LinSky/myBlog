<template>
  <div class="upload_page">
    <el-button type="primary">上传<i class="el-icon-upload el-icon--right"></i></el-button>
    <el-table :data="tableData" border style="width: 100%" class="table">
    <el-table-column label="日期" width="120" prop="date"></el-table-column>
    <el-table-column label="上传者" width="120" prop="author"></el-table-column>
    <el-table-column label="图片地址" inline-template>
      <template>
        <el-popover trigger="hover" placement="top">
          <div class="img_view"><img :src="row.imgUrl" alt=""></div>
          <div slot="reference" class="name-wrapper">
            <el-tag>{{ row.imgUrl }}</el-tag>
          </div>
        </el-popover>
      </template>
    </el-table-column>
    <el-table-column label="操作" width="160" inline-template>
      <template>
        <el-button size="small" type="danger" @click="handleDelete($index, row)"><i class="el-icon-delete"></i> 删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  </div>
</template>

<script>
	export default {
		data () {
			return {
        tableData: [{
          date: '2016-05-02',
          author: '王小虎',
          imgUrl: 'https://segmentfault.com/img/bVEgcn?w=1366&h=768'
        }, {
          date: '2016-05-02',
          author: '王小虎',
          imgUrl: 'https://pic4.zhimg.com/v2-6620a930ef6f9562e60fd3c4d751fd77_b.jpg'
        }, {
          date: '2016-05-02',
          author: '王小虎',
          imgUrl: 'https://segmentfault.com/img/bVEgcn?w=1366&h=768'
        }, {
          date: '2016-05-02',
          author: '王小虎',
          imgUrl: 'https://segmentfault.com/img/bVEgcn?w=1366&h=768'
        }, {
          date: '2016-05-02',
          author: '王小虎',
          imgUrl: 'https://segmentfault.com/img/bVEgcn?w=1366&h=768'
        }]
			}
		},
		methods: {
      handleEdit (index, row) {
        console.log(index, row)
      },
      handleDelete (index, row) {
        console.log(index, row)
      }
		}
	}
</script>

<style lang="less" scoped>
.upload_page{
  .table{
    margin-top: 20px;
  }
}

.img_view{
  width: 300px;
  img{
    width: 100%;
  }
}

</style>
