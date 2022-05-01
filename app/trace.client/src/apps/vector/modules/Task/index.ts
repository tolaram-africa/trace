export default {
  path: 'task',
  component: () => import('./ModLayout.vue'),
  children: [
    {
      path: '',
      name: 'vec.task',
      redirect: { name: 'vec.task.activities' },
    },
    {
      path: 'activities',
      name: 'vec.task.activities',
      component: () => import('./pages/ActivityPage.vue'),
    },
    {
      path: 'timeline',
      name: 'vec.task.timeline',
      component: () => import('./pages/TimelinePage.vue'),
    },
  ],
};
