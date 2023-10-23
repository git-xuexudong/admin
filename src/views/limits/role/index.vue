<template>
    <div style="padding: 0px">
      <el-alert :closable="false" :title="title" class="el-alert" />
      <el-container>
        <el-header>
          <div class="heard">
            <el-form :inline="true" :model="formInline" class="demo-form-inline">
              <el-form-item label="名称:" >
                <el-input
                  v-model="formInline.Name"
                  placeholder=""
                  @keyup.enter.native="onSubmit"
                />
              </el-form-item>
              <el-form-item>
                <el-button
                  v-debounce
                  type="primary"
                  size="mini"
                  @click="onSubmit"
                >搜索</el-button>
              </el-form-item>
            </el-form>
          </div>
  
        </el-header>
        <el-main :style="{ height: heightAuto }">
          <div id="buttons">
            <el-button
              v-debounce
              type="primary"
              size="mini"
              icon="el-icon-circle-plus-outline"
              @click="addBtn"
            >新增</el-button>
          </div>
          <el-table
            ref="table"
            :data="tableArray"
            stripe
            style="width: 100%"
            :height="tabHeight"
            :max-height="tabHeight"
          >
            <el-table-column
              type="selection"
              width="55"
            />
            <el-table-column
              v-for="item in tableData"
              :key="item.ID"
              :label="item.label"
              :prop="item.prop"
              :align="item.align || 'center'"
              :min-width="item.minWidth"
            >
              <template slot-scope="scope">
                <render-column
                  v-if="item.render"
                  :render="item.render"
                  :scope="scope"
                />
                <span v-else>{{ scope.row[item.prop] }}</span>
              </template>
            </el-table-column>
            <el-table-column label="操作" align="center">
              <template slot-scope="scope">
                <el-button
                    v-debounce
                    size="mini"
                    type="danger"
                    @click="handleDelete(scope.$index, scope.row)"
                >修改</el-button>
                <el-button
                  v-debounce
                  size="mini"
                  type="danger"
                  @click="handleDelete(scope.$index, scope.row)"
                >删除</el-button>
              </template>
            </el-table-column>
          </el-table>
          <Pagination
            :total="page.total"
            :page.sync="page.currentPage"
            :pagesize.sync="page.pageSize"
            @handleSizeChange="handleSizeChange"
            @handleCurrentChange="handleCurrentChange"
          />
        </el-main>
      </el-container>
    </div>
  </template>
  
  <script>
  import $_getMain from '@/utils/mixin/comm.js'
  export default {
    name: 'role',
    mixins: [$_getMain],
    data() {
      return {
        title: '人员管理-列表(共14,387条)',
        page: {
          total: 1000,
          currentPage: 10,
          pageSize: 10
        },
        formInline: {
          optionValue: '',
          Name: ''
        },
       
        tableData: [
          {
            label: 'ID',
            prop: 'ID',
            align: 'center',
            minWidth:50,
          },
          {
            label: '名称',
            prop: 'name',
            align: 'center',
            minWidth:50,
          },
          {
            label: '描述',
            prop: 'address',
            align: 'center'
          }
        ],
        tableArray: [
          {
            ID: '01',
            date: '2016-05-02',
            name: '王小虎',
            address: '小明',
            operator: '王小虎',
            operatorTime: '2021-10-02',
            type: '登录日志'
          },
          {
            ID: '02',
            date: '2016-05-02',
            name: '王小虎',
            address: '小明',
            operator: '王小虎',
            operatorTime: '2021-10-02',
            type: '登录日志'
          },
          {
            ID: '03',
            date: '2016-05-02',
            name: '王小虎',
            address: '小明',
            operator: '王小虎',
            operatorTime: '2021-10-02',
            type: '登录日志'
          },
          {
            ID: '04',
            date: '2016-05-02',
            name: '王小虎',
            address: '小明',
            operator: '王小虎',
            operatorTime: '2021-10-02',
            type: '登录日志'
          }
        ]
      }
    },
  
    mounted() {},
  
    methods: {
      onSubmit() {
        console.log(this.formInline)
      },
      handleDelete(index, row) {
        console.log(index, row)
      },
      addBtn() {
        this.$router.push('/systemManagement/addManagement')
      },
      // 分页--当每页显示的条数发生改变的时候触发这个事件函数
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`)
      },
      // 当前页发生改变的时候会触发这个事件函数
      handleCurrentChange(val) {
        console.log(`第 ${val} 页`)
      }
    }
  }
  </script>
  
  <style lang="scss" scoped>
  .el-alert {
    color: #333;
  }
  .el-header {
    margin: 5px 0;
    background: #e2e5e9;
    color: #333;
    text-align: left;
    padding: 10px;
  }
  .el-main {
     #buttons{
      height: 35px;
      display: flex;
      justify-content: flex-start;
      padding: 5px 15px;
  
    }
    background-color: #e9eef3;
    color: #333;
    text-align: center;
    padding: 0px;
  }
  </style>
  