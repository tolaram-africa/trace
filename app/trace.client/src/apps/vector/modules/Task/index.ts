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
      redirect: { name: vectorPaths.task.activities.name + '.index' },
      component: () => import('./pages/LayoutDefault.vue'),
      children: [
        {
          path: '',
          name: vectorPaths.task.activities.name + '.index',
          component: () => import('./pages/Activities/IndexPage.vue'),
        },
      ],
    },
    {
      path: vectorPaths.task.history.path,
      name: vectorPaths.task.history.name,
      redirect: { name: vectorPaths.task.history.name + '.index' },
      component: () => import('./pages/History/LayoutDefault.vue'),
      children: [
        {
          path: '',
          name: vectorPaths.task.history.name + '.index',
          component: () => import('./pages/History/IndexPage.vue'),
        },
      ],
    },
    {
      path: vectorPaths.task.request.path,
      name: vectorPaths.task.request.name,
      redirect: { name: vectorPaths.task.request.name + '.index' },
      component: () => import('./pages/LayoutDefault.vue'),
      children: [
        {
          path: '',
          name: vectorPaths.task.request.name + '.index',
          component: () => import('./pages/Request/IndexPage.vue'),
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
