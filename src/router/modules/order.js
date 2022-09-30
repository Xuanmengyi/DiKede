import Home from '@/Home'
export default {
  path: '/order',
  name: 'order',
  component: Home,
  children: [
    {
      path: '',
      component: () => import('@/views/order'),
      meta: { title: '订单管理', icon: 'el-icon-s-order' }
    }
  ]
}
