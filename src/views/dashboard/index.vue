<!-- <template>
  <div class="dashboard-container">
    <div class="dashboard-text">欢迎使用高管驾驶舱管理系统</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters([
      'name'
    ])
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  // &-container {
  //   margin: 30px;
  // }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style> -->
<!-- <template>
  <div class="dashboard-container">
    <div class="dashboard-text">name: {{ name }}</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters([
      'name'
    ])
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style> -->
<template>
  <div class="app-container">
    <el-row>
      

      <el-col :span="24" class="card-box">
        <el-card>
          <div slot="header" class="card-title">
            <span><i class="el-icon-user" /> 您的资料</span>
          </div>
          <div class="el-table el-table--enable-row-hover el-table--medium">
            <table cellspacing="0" style="width: 100%;table-layout:fixed;">
              <tbody>
                <tr>
                  <td class="el-table__cell is-leaf"><div class="cell">当前版本</div></td>
                  <td class="el-table__cell is-leaf"><div class="cell" >高管驾驶舱v1.0</div></td>
                  <td class="el-table__cell is-leaf"><div class="cell">用户名</div></td>
                  <td class="el-table__cell is-leaf"><div class="cell" >admin</div></td>
                </tr>
                <tr>
                  <td class="el-table__cell is-leaf"><div class="cell">上次登陆时间</div></td>
                  <td class="el-table__cell is-leaf"><div class="cell" >1111</div></td>
                  <td class="el-table__cell is-leaf"><div class="cell">本次登录时间</div></td>
                  <td class="el-table__cell is-leaf"><div class="cell" >11111</div></td>
                </tr>
                <tr>
                  <td class="el-table__cell is-leaf"><div class="cell">上次登录ip</div></td>
                  <td class="el-table__cell is-leaf"><div class="cell" >10.203</div></td>
                  <td class="el-table__cell is-leaf"><div class="cell">本次登录ip</div></td>
                  <td class="el-table__cell is-leaf"><div class="cell" >11111</div></td>
                </tr>
                <tr>
                  <td class="el-table__cell is-leaf"><div class="cell">登录次数</div></td>
                  <td class="el-table__cell is-leaf"><div class="cell" >100000</div></td>
                </tr>
              </tbody>
            </table>
          </div>
        </el-card>
      </el-col>
      <el-col :span="24" class="card-box" style="margin-top: 20px;">
        <el-card>
          <div slot="header" class="card-title">
            <span><i class="el-icon-coffee-cup"></i> 系统信息</span>
          </div>
          <div class="el-table el-table--enable-row-hover el-table--medium">
            <table cellspacing="0" style="width: 100%;table-layout:fixed;">
              <tbody>
                <tr>
                  <td class="el-table__cell is-leaf"><div class="cell">操作系统</div></td>
                  <td class="el-table__cell is-leaf"><div class="cell" >高管驾驶舱v1.0</div></td>
                  <td class="el-table__cell is-leaf"><div class="cell">Java运行环境</div></td>
                  <td class="el-table__cell is-leaf"><div class="cell" >admin</div></td>
                  <td class="el-table__cell is-leaf"><div class="cell">Java虚拟机</div></td>
                  <td class="el-table__cell is-leaf"><div class="cell" >1111</div></td>
                </tr>
               
                <tr>
                  <td class="el-table__cell is-leaf"><div class="cell">最大内存</div></td>
                  <td class="el-table__cell is-leaf"><div class="cell" >100000</div></td>
                  <td class="el-table__cell is-leaf"><div class="cell">已用内存</div></td>
                  <td class="el-table__cell is-leaf"><div class="cell" >100000</div></td>
                  <td class="el-table__cell is-leaf"><div class="cell">可用内存</div></td>
                  <td class="el-table__cell is-leaf"><div class="cell" >100000</div></td>
                </tr>
                <tr>
                  
                  <td colspan="1" class="el-table__cell is-leaf"><div class="cell">用户主目录</div></td>
                  <td colspan="5" class="el-table__cell is-leaf"><div class="cell" >11111</div></td>
                </tr>
                <tr>
                  <td colspan="1" class="el-table__cell is-leaf"><div class="cell">用户工作目录</div></td>
                  <td colspan="5" class="el-table__cell is-leaf"><div class="cell" >10.203</div></td>
                 
                </tr>
                <tr>
                  
                  <td colspan="1" class="el-table__cell is-leaf"><div class="cell">用户临时目录</div></td>
                  <td colspan="5" class="el-table__cell is-leaf"><div class="cell" >11111</div></td>
                </tr>
              </tbody>
            </table>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// import { getServer } from "@/api/monitor/server";

export default {
  name: "Dashboard",
  data() {
    return {
      // 服务器信息
      server: []
    };
  },
  created() {
    // this.getList();
    // this.openLoading();
  },
  methods: {
    /** 查询服务器信息 */
    getList() {
      getServer().then(response => {
        this.server = response.data;
        this.$modal.closeLoading();
      });
    },
    // 打开加载层
    openLoading() {
      this.$modal.loading("正在加载服务监控数据，请稍候！");
    }
  }
};
</script>
<style scoped>

.card-title{
  font-weight: bold;
  color: rgb(64, 158, 255);
}
</style>