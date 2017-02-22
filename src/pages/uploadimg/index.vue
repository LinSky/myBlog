<template>
  <div class="upload_page">
    <el-button type="primary" :loading="uploading" @click="selectPic">上传<i class="el-icon-upload el-icon--right"></i></el-button>
    <input type="file" id="fileLoad" @change="onFileChange" multiple style="display: none;">
    <el-table :data="tableData" border style="width: 100%" class="table">
    <el-table-column label="日期" width="160" prop="date"></el-table-column>
    <el-table-column label="上传者" width="160" prop="author"></el-table-column>
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
    <el-table-column label="操作" width="200" inline-template>
      <template>
        <el-button size="small" type="danger" @click="handleDelete($index, row)"><i class="el-icon-delete"></i> 删除</el-button>
        <el-button size="small" type="info"><i class="el-icon-picture"></i> 复制地址</el-button>
      </template>
    </el-table-column>
  </el-table>
  </div>
</template>

<script>
  import API from './../../../api.config.js'
	export default {
		data () {
			return {
        uploading: false,
        imgData: [],
        tableData: [{
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
      selectPic () {
        document.getElementById('fileLoad').click()
      },
      onFileChange (e) {
        var vm = this
        vm.uploading = true
        let files = e.target.files || e.dataTransfer.files
        if (!files.length) return
        let data = new window.FormData()
        data.append('image', files[0])
        data.append('author', window.sessionStorage.getItem('user'))
        this.$http.post(API.HOST + 'image-upload', data)
          .then((response) => {
            console.log(response.data)
            setTimeout(function () {
              vm.uploading = false
            }, 1000)
          })
      },
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
