import layout from '@/layout'
export default {
  path: '/policy/index',
  name: 'policy',
  component: layout,
  children: [
    {
      path: '',
      component: () => import('@/views/policy'),
      meta: { title: '策略管理', icon: 'el-icon-s-opportunity' }
    }
  ]
}
