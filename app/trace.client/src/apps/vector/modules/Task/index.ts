import vectorPaths from '@/vector/paths';

export default {
  path: vectorPaths.task.root.path,
  component: () => import('./ModLayout.vue'),
  children: [
    {
      path: '',
      name: vectorPaths.task.root.name,
      redirect: { name: vectorPaths.task.activities.name },
    },
    {
      path: vectorPaths.task.activities.path,
      name: vectorPaths.task.activities.name,
      component: () => import('./pages/ActivityPage.vue'),
      children: [
        {
          path: 'sample',
          name: 'vec.task.activities.sample',
          component: () => import('./pages/SamplePage.vue'),
        },
      ],
    },
    {
      path: vectorPaths.task.timeline.path,
      name: vectorPaths.task.timeline.name,
      component: () => import('./pages/TimelinePage.vue'),
    },
  ],
};
