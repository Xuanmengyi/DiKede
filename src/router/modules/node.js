import Home from '@/Home'
export default {
  path: '/node',
  name: 'node',
  component: Home,
  meta: { title: '点位管理', icon: 'el-icon-s-promotion' },
  children: [
    {
      path: '/node/node',
      component: () => import('@/views/node/node'),
      meta: { title: '区域管理' }
    },
    {
      path: '/node/partner',
      component: () => import('@/views/node/partner'),
      meta: { title: '点位管理' }
    },
    {
      path: '/node/region',
      component: () => import('@/views/node/region'),
      meta: { title: '合作商管理' }
    }
  ]
}
