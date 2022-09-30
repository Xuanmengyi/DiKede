import Home from '@/Home'
export default {
  path: '/policy',
  name: 'policy',
  component: Home,
  children: [
    {
      path: '',
      component: () => import('@/views/policy'),
      meta: { title: '策略管理', icon: 'el-icon-s-opportunity' }
    }
  ]
}
