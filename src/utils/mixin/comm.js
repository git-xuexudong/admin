export default {
  data() {
    return {
      windowHeight: document.body.clientHeight,
      multipleSelection: [],
      page: {
        currentPage: 1,
        pageSizes: [10, 20, 50, 100],
        page_Size: 10,
        total: 1000
      },
      heightAuto: '750px',
      appMain: '',
      tabHeight: '590px'
    }
  },
  watch: {
    windowHeight(val) {
      if (val) {
        this.$_getMain()
      }
    }
  },
  beforeMount() {
  },
  mounted() {
    window.onresize = () => {
      return (() => {
        this.windowHeight = document.body.clientHeight
      })()
    }
    this.$_getMain()
  },
  methods: {
    // 多选按钮
    handleSelectionChange(val) {
      this.multipleSelection = val
    },
    // 检查选择按钮
    CheckSelection(info = 'edit') {
      info = info === 'edit' ? '修改' : '删除'
      if (!this.multipleSelection.length) {
        return this.$message({
          message: `请选择将要${info}的数据`,
          type: 'warning'
        })
      }
      console.log(this.multipleSelection)
    },
    // 动态高度
    $_getMain() {
      // footer
      const el_footer = document.getElementsByClassName('el-footer')[0] ? document.getElementsByClassName('el-footer')[0].offsetHeight : 0
      // main高度
      const main_height = document.querySelector('section') ? document.querySelector('section').offsetHeight : 0
      // 标题menu
      const alert_height = document.getElementsByClassName('el-alert')[0] ? document.getElementsByClassName('el-alert')[0].offsetHeight : 0
      // 标题
      const el_header = document.getElementsByClassName('el-header')[0] ? document.getElementsByClassName('el-header')[0].offsetHeight : 0
      // 按钮组
      const el_buttons = document.getElementById('buttons') ? document.getElementById('buttons').offsetHeight : 0

      if (alert_height || el_header || el_buttons || el_footer) {
        const height_main = main_height - (alert_height + el_header + el_footer)
        this.$nextTick(() => {
          this.heightAuto = height_main + 'px'
          this.tabHeight = (height_main - 60 - el_buttons) + 'px'
        })
      }
    }

  }
}

