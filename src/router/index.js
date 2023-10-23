import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: '首页',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '首页', icon: 'dashboard' }
    }]
  },
  {
    path: '/example',
    component: Layout,
    redirect: '/example/table',
    name: 'Example',
    meta: { title: 'Example', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'table',
        name: 'Table',
        component: () => import('@/views/table/index'),
        meta: { title: 'Table', icon: 'table' }
      },
      {
        path: 'tree',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: 'Tree', icon: 'tree' }
      }
    ]
  },

  {
    path: '/form',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Form',
        component: () => import('@/views/form/index'),
        meta: { title: 'Form', icon: 'form' }
      }
    ]
  },

  {
    path: '/nested',
    component: Layout,
    redirect: '/nested/menu1',
    name: 'Nested',
    meta: {
      title: 'Nested',
      icon: 'nested'
    },
    children: [
      {
        path: 'menu1',
        component: () => import('@/views/nested/menu1/index'), // Parent router-view
        name: 'Menu1',
        meta: { title: 'Menu1' }
      },
      {
        path: 'menu2',
        component: () => import('@/views/nested/menu2/index'),
        name: 'Menu2',
        meta: { title: 'menu2' }
      }
    ]
  },

  {
    path: 'external-link',
    component: Layout,
    children: [
      {
        path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
        meta: { title: 'External Link', icon: 'link' }
      }
    ]
  },
  {
    path: '/limits',
    component: Layout,
    redirect: '/limits/personnel',
    name: '权限管理',
    meta: { title: '权限管理', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'personnel',
        name: 'Personnel',
        component: () => import('@/views/limits/personnel/index'),
        meta: { title: '人员管理', icon: 'table' }
      },
      {
        path: 'role',
        name: 'Role',
        component: () => import('@/views/limits/role/index'),
        meta: { title: '角色管理', icon: 'tree' }
      },
      {
        path: 'device',
        name: 'Device',
        component: () => import('@/views/limits/device/index'),
        meta: { title: '设备管理', icon: 'tree' }
      }
    ]
  },
  // 系统管理
  {
    path: '/systemManagement',
    component: Layout,
    redirect: '/systemManagement/operationLog',
    name: '系统管理',
    meta: {
      title: '系统管理',
      icon: 'nested'
    },
    children: [
      {
        path: 'operationLog',
        component: () => import('@/views/systemManagement/operationLog'), // Parent router-view
        name: 'operationLog',
        meta: { title: '系统操作日志' }
      },
      {
        path: 'temOperationLog',
        component: () => import('@/views/systemManagement/temOperationLog'),
        name: 'temOperationLog',
        meta: { title: '模板操作日志' }
      },
      {
        path: 'annManagement',
        component: () => import('@/views/systemManagement/annManagement'),
        name: 'annManagement',
        meta: { title: '公告管理' }
      },
      {
        path: 'addManagement',
        hidden: true,
        component: () => import('@/views/systemManagement/addManagement'),
        name: 'addManagement',
        meta: { title: '新增公告' }
      }
    ]
  },
  // 调度管理
  {
    path: '/SchedulingManagementTitle',
    component: Layout,
    redirect: '/SchedulingManagementTitle/SchedulingManagement',
    name: '调度管理',
    meta: {
      title: '调度管理',
      icon: 'nested'
    },
    children: [
    // 调度管理
      {
        path: 'SchedulingManagement',
        component: () => import('@/views/SchedulingManagementTitle/SchedulingManagement'),
        name: 'SchedulingManagement',
        meta: { title: '调度管理' }
      },
      {
        path: 'JobQuery',
        component: () => import('@/views/SchedulingManagementTitle/JobQuery'),
        name: 'JobQuery',
        meta: { title: '作业查询' }
      },
      {
        path: 'TriggerManagement',
        component: () => import('@/views/SchedulingManagementTitle/TriggerManagement'),
        name: 'TriggerManagement',
        meta: { title: '触发器管理' }
      },
      {
        path: 'dispatchingLog',
        component: () => import('@/views/SchedulingManagementTitle/dispatchingLog'),
        name: 'dispatchingLog',
        meta: { title: '调度日志' }
      },
      {
        path: 'addtemplate',
        hidden: true,
        component: () => import('@/views/SchedulingManagementTitle/addtemplate'),
        name: 'Addtemplate',
        meta: { title: '新增调度管理' }
      }

    ]
  },
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
