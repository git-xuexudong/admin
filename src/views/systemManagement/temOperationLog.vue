<template>
  <div style="padding: 0px">
    <el-alert :closable="false" :title="title" class="el-alert" />
    <el-container>
      <el-header>
        <div class="heard">
          <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="模板ID:">
              <el-input v-model="formInline.Name" placeholder="" @keyup.enter.native="onSubmit" />
            </el-form-item>
            <el-form-item>
              <el-button v-debounce type="primary" size="mini" @click="onSubmit">搜索</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-header>
      <el-main :style="{ height: heightAuto }">
        <!-- <el-main> -->
        <el-table ref="table" :data="tableArray" stripe style="width: 100%" :height="tabHeight" :max-height="tabHeight">
          <!-- <el-table-column
            type="selection"
            width="55"
          /> -->
          <el-table-column
            v-for="item in tableData"
            :key="item.ID"
            :label="item.label"
            :prop="item.prop"
            :align="item.align || 'center'"
            :min-width="item.minWidth"
          >
            <template slot-scope="scope">
              <render-column v-if="item.render" :render="item.render" :scope="scope" />
              <span v-else>{{ scope.row[item.prop] }}</span>
            </template>
          </el-table-column>
          <el-table-column label="操作" align="center">
            <template slot-scope="scope">
              <el-button v-debounce size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
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
import $lodash from 'lodash'
import $_getMain from '@/utils/mixin/comm.js'
export default {
  name: 'TemOperationLog',
  mixins: [$_getMain],
  data() {
    return {
      title: '模板操作日志-列表(共14,387条)',
      page: {
        total: 1000,
        currentPage: 10,
        pageSize: 10
      },
      formInline: {
        Name: ''
      },
      tableData: [
        {
          label: 'ID',
          prop: 'ID',
          align: 'center'
        },
        {
          label: '名称',
          prop: 'name',
          align: 'center'

        },
        {
          label: '描述',
          prop: 'address',
          align: 'center'

        },
        {
          label: '操作人',
          prop: 'operator',
          align: 'center'

        },
        {
          label: '操作时间',
          prop: 'operatorTime',
          align: 'center'

        },
        {
          label: '类型',
          prop: 'type',
          align: 'center'
        }
      ],
      tableArray: [
        {
          ID: '01',
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          operator: '王小虎',
          operatorTime: '2021-10-02',
          type: '登录日志'
        },
        {
          ID: '02',
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          operator: '王小虎',
          operatorTime: '2021-10-02',
          type: '登录日志'
        },
        {
          ID: '03',
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          operator: '王小虎',
          operatorTime: '2021-10-02',
          type: '登录日志'
        },
        {
          ID: '04',
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          operator: '王小虎',
          operatorTime: '2021-10-02',
          type: '登录日志'
        },
        {
          ID: '05',
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          operator: '王小虎',
          operatorTime: '2021-10-02',
          type: '登录日志'
        },
        {
          ID: '06',
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          operator: '王小虎',
          operatorTime: '2021-10-02',
          type: '登录日志'
        }
      ]
    }
  },

  mounted() {

  },

  methods: {
    onSubmit: $lodash.debounce(function() {
      console.log(this.$lodash.debounce)
    }, 3000),
    handleDelete(index, row) {
      console.log(index, row)
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
  display: flex;
  background: #e2e5e9;
  color: #333;
  text-align: left;
  padding: 10px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  padding: 0px;
}
</style>
