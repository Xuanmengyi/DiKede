import Home from '@/Home'
export default {
  path: '/report',
  name: 'report',
  component: Home,
  children: [
    {
      path: '',
      component: () => import('@/views/report'),
      meta: { title: '订单管理', icon: 'el-icon-s-finance' }
    }
  ]
}
