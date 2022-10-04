import layout from '@/layout'
export default {
  path: '/report/index',
  name: 'report',
  component: layout,
  children: [
    {
      path: '',
      component: () => import('@/views/report'),
      meta: { title: '对账统计', icon: 'el-icon-s-finance' }
    }
  ]
}
