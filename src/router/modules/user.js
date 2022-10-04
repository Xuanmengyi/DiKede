import layout from '@/layout'
export default {
  path: '/user',
  name: 'user',
  component: layout,
  meta: { title: '人员管理', icon: 'el-icon-user-solid' },
  children: [
    {
      path: '/user/index',
      component: () => import('@/views/user/index'),
      meta: { title: '人员列表' }
    },
    {
      path: '/user/user-task-stats',
      component: () => import('@/views/user/user-task-stats'),
      meta: { title: '人效统计' }
    },
    {
      path: '/user/user-work',
      component: () => import('@/views/user/user-work'),
      meta: { title: '工作量列表' }
    }
  ]
}
