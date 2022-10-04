import layout from '@/layout'
export default {
  path: '/order/index',
  name: 'order',
  component: layout,
  children: [
    {
      path: '',
      component: () => import('@/views/order'),
      meta: { title: '订单管理', icon: 'el-icon-s-order' }
    }
  ]
}
