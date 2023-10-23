<template>
  <div style="padding: 0px">
    <el-alert :closable="false" title="公告管理-新增" class="el-alert">
      <el-button
        v-debounce
        type="primary"
        size="mini"
        @click="$router.go(-1)"
      >返回<i class="el-icon-arrow-right el-icon--right" /></el-button></el-alert>
    <el-container>
      <el-header>
        <div class="heard">
          <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="公告标题:">
              <el-input v-model="formInline.Name" placeholder="" />
            </el-form-item>
            <el-form-item label="公告类型:">
              <el-select
                v-model="formInline.optionValue"
                placeholder="请选择公告类型"
              >
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-form-item>
            <el-form-item label="有效期:">
              <el-date-picker
                v-model="formInline.date"
                type="date"
                placeholder="请选择日期"
              />
              <el-form-item />
              <el-form-item label="是否有效:">
                <el-select
                  v-model="formInline.optionValue"
                  placeholder="请选择"
                >
                  <el-option
                    v-for="item in yesORno"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select>
              </el-form-item>
              <el-form-item label="发布机构:">
                <el-input v-model="formInline.gsName" placeholder="" />
              </el-form-item> </el-form-item></el-form>
        </div>
      </el-header>
      <el-main :style="{ height: heightAuto }">
        <div>
          <quill-editor
            ref="myQuillEditor"
            v-model="content"
            class="ql-editor"
            :options="editorOption"
            @blur="onEditorBlur($event)"
            @focus="onEditorFocus($event)"
            @change="onEditorChange($event)"
          />
        </div>
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="">
            <el-button
              v-debounce
              type="warning"
              size="mini"
              @click="addBtn('1')"
            >保存</el-button>
          </el-form-item>
          <el-form-item label="">
            <el-button
              v-debounce
              type="primary"
              size="mini"
              @click="addBtn('2')"
            >保存并返回</el-button>
          </el-form-item>
          <el-form-item label="">
            <el-button
              v-debounce
              type="success"
              size="mini"
              @click="addBtn('3')"
            >保存并新增</el-button>
          </el-form-item>
        </el-form>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import { titleConfig, editorOption } from './comm.js'
import $_getMain from '@/utils/mixin/comm.js'
export default {
  name: 'AddManagement',
  mixins: [$_getMain],
  data() {
    return {
      formInline: {
        optionValue: '',
        Name: '',
        date: '',
        gsName: ''
      },
      yesORno: [
        {
          value: '1',
          label: '是'
        },
        {
          value: '2',
          label: '否'
        }
      ],
      options: [
        {
          value: '1',
          label: '黄金糕'
        },
        {
          value: '2',
          label: '双皮奶'
        },
        {
          value: '3',
          label: '蚵仔煎'
        },
        {
          value: '4',
          label: '龙须面'
        },
        {
          value: '5',
          label: '北京烤鸭'
        }
      ],
      content: '',
      // 富文本编辑器配置
      editorOption
    }
  },
  created() {
  },
  mounted() {
    this.showQuillTitle(titleConfig)
  },

  methods: {
    addBtn(type) {
      console.log('add', type)
    },
    async onUploadHandler(e) {
      const imageUrl = ''
      // 获取光标所在位置
      const quill = this.$refs.myQuillEditor.quill
      const length = quill.getSelection().index
      // 插入图片
      quill.insertEmbed(length, 'image', imageUrl)
      // 调整光标到最后
      quill.setSelection(length + 1)
      // this.content += url
    },
    // Quill-title
    showQuillTitle(arrList) {
      for (const item of arrList) {
        const tip = document.querySelector(item.Choice)
        if (!tip) continue
        tip.setAttribute('title', item.title)
      }
    },
    // 失去焦点事件
    onEditorBlur(quill) {
    },
    // 获得焦点事件
    onEditorFocus(quill) {
    },
    onEditorReady(quill) {
    },
    // 内容改变事件
    onEditorChange({ quill, html, text }) {
      console.log('editor change!', quill, html, text)
      this.content = html
      console.log(html, 'this.content')
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
}
.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  padding: 0px;
}
</style>
