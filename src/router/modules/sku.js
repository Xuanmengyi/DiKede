import layout from '@/layout'
export default {
  path: '/sku',
  name: 'sku',
  component: layout,
  meta: { title: '商品管理', icon: 'el-icon-s-help' },
  children: [
    {
      path: '/sku/sku-class',
      component: () => import('@/views/sku/sku-class'),
      meta: { title: '商品类型' }
    },
    {
      path: '/sku/sku',
      component: () => import('@/views/sku/sku'),
      meta: { title: '商品管理' }
    }
  ]
}
