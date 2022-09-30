import Home from '@/Home'
export default {
  path: '/vm',
  name: 'vm',
  component: Home,
  meta: { title: '设备管理', icon: 'el-icon-s-grid' },
  children: [
    {
      path: '/vm/index',
      component: () => import('@/views/vm/index'),
      meta: { title: '设备管理' }
    },
    {
      path: '/vm/status',
      component: () => import('@/views/vm/status'),
      meta: { title: '设备状态' }
    },
    {
      path: '/vm/type',
      component: () => import('@/views/vm/type'),
      meta: { title: '设备类型管理' }
    }
  ]
}
