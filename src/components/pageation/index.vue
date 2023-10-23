<template>
  <div :class="{ hidden: hidden }" class="pagination-container">
    <el-pagination
      :background="background"
      :current-page.sync="currentPage"
      :page-sizes="pagesizes"
      :page-size.sync="pageSize"
      :pager-count="pagerCount"
      :layout="layout"
      :total="total"
      v-bind="$attrs"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    /**
     * 总页数
     */
    total: {
      required: true,
      type: Number
    },
    /**
     * 默认当前页
     */
    page: {
      default: 1,
      type: Number
    },
    /**
     * 默认分页大小
     */
    pagesize: {
      type: Number,
      default: 5
    },
    /**
     * 分页大小
     */
    pagesizes: {
      type: Array,
      default() {
        return [5, 10, 20, 30, 50, 100]
      }
    },
    /**
     * app页码5  pc页码7
     */
    pagerCount: {
      type: Number,
      default: document.body.clientWidth < 992 ? 5 : 7
    },

    /**
     * 布局方式
     */
    layout: {
      type: String,
      default: 'total, sizes, prev, pager, next, jumper'
    },

    /**
     *是否显示背景
     */
    background: {
      type: Boolean,
      default: true
    },

    /**
     * 是否隐藏
     */
    hidden: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {}
  },
  computed: {
    /**
     * 当前页
     */
    currentPage: {
      get() {
        return this.page
      },
      set(val) {
        this.$emit('update:page', val)
      }
    },
    /**
     * 分页大小
     */
    pageSize: {
      get() {
        return this.pagesize
      },
      set(val) {
        this.$emit('update:pagesize', val)
      }
    }
  },
  methods: {
    handleSizeChange(val) {
      if (this.currentPage * val > this.total) {
        this.currentPage = 1
      }
      this.$emit('handleSizeChange', val)
    },
    handleCurrentChange(val) {
      this.$emit('handleCurrentChange', val)
    }
  }
}
</script>
<style scoped>
.pagination-container {
  height: 60px;
  padding: 15px;
  background: #fff;
}
.pagination-container.hidden {
  display: none;
}
</style>
