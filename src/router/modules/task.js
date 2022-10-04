import layout from '@/layout'
export default {
  path: '/task',
  name: 'task',
  component: layout,
  meta: { title: '工单管理', icon: 'el-icon-s-claim' },
  children: [
    {
      path: '/task/business',
      component: () => import('@/views/task/business'),
      meta: { title: '运营管理' }
    },
    {
      path: '/task/operation',
      component: () => import('@/views/task/operation'),
      meta: { title: '运维管理' }
    }
  ]
}
