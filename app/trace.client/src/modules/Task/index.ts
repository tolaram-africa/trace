export default {
  path: 'task',
  component: () => import('./ModLayout.vue'),
  children: [
    {
      path: '',
      name: 'task',
      redirect: { name: 'task.activities' },
    },
    {
      path: 'activities',
      name: 'task.activities',
      component: () => import('./pages/ActivityPage.vue'),
    },
    {
      path: 'timeline',
      name: 'task.timeline',
      component: () => import('./pages/TimelinePage.vue'),
    },
  ],
};
