<template>
  <div style="padding: 0px">
    <el-alert :closable="false" title="调度管理-新增" class="el-alert">
      <el-button
        v-debounce
        type="primary"
        size="mini"
        @click="$router.go(-1)"
      >返回<i class="el-icon-arrow-right el-icon--right" /></el-button></el-alert>
    <el-container>
      <el-main :style="{ height: heightAuto }">
        <el-form ref="form" :model="form" label-width="150px" label-position="right">
          <el-form-item label="调度名称：">
            <el-input v-model="form.name" />
          </el-form-item>
          <el-form-item label="作业：">
            <el-select v-model="form.region" placeholder="请选择">
              <el-option label="区域一" value="shanghai" />
              <el-option label="区域二" value="beijing" />
            </el-select>
          </el-form-item>
          <el-form-item label="触发器：">
            <el-select v-model="form.region" placeholder="请选择">
              <el-option label="区域一" value="shanghai" />
              <el-option label="区域二" value="beijing" />
            </el-select>
          </el-form-item>
          <el-form-item label="调度状态：">
            <el-radio-group v-model="form.resource">
              <el-radio label="开始" />
              <el-radio label="停止" />
            </el-radio-group>
          </el-form-item>
          <el-form-item label="说明：">
            <el-input v-model="form.desc" type="textarea" />
          </el-form-item>
        </el-form>
      </el-main>
      <el-footer>
        <el-button
          v-debounce
          type="warning"
          size="mini"
          @click="addBtn('1')"
        >保存</el-button>
        <el-button
          v-debounce
          type="primary"
          size="mini"
          @click="addBtn('2')"
        >保存并返回</el-button>
        <el-button
          v-debounce
          type="success"
          size="mini"
          @click="addBtn('3')"
        >保存并新增</el-button>

      </el-footer>
    </el-container>
  </div>
</template>

<script>
import $_getMain from '@/utils/mixin/comm.js'
export default {
  name: 'Addtemplate',
  mixins: [$_getMain],
  data() {
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
  created() {
  },
  mounted() {
  },

  methods: {
    addBtn(type) {
      console.log('add', type)
    }
  }
}
</script>

<style lang="scss" scoped>
.el-alert {
  display: flex;
  color: #333;
  align-items: center;
  text-align: center;
}
.el-form{
  width: 40%;
  padding-left: 15px;
}
::v-deep .el-alert__content {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
::v-deep .el-alert__title.is-bold {
  margin-right: 15px;
}
.el-header {
  display: flex;
  margin: 5px 0;
  background: #e2e5e9;
  color: #333;
  text-align: left;
  padding: 10px;
  // padding: 20px;
}
.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  padding: 0px;
}
.el-footer{
  display: flex;
  padding: 15px;
  background-color: #f4f4f5;
}
</style>
