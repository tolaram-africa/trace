export default {
  // Overview
  overview: {
    root: {
      title: 'Overview',
      name: 'vec.overview',
      icon: 'bi-grid',
      path: 'overview',
    },
    dashboard: {
      title: 'Dashboard',
      name: 'vec.overview.dashboard',
      icon: 'bi-grid',
      path: 'dashboard',
    },
    trends: {
      title: 'Trends',
      name: 'vec.overview.trends',
      icon: 'bi-compass',
      path: 'trends',
    },
  },
  // Task
  task: {
    root: {
      name: 'vec.task',
      title: 'Task',
      icon: 'bi-list-check',
      path: 'task',
    },
    activities: {
      name: 'vec.task.activities',
      title: 'Activities',
      icon: 'bi-list-check',
      path: 'activities',
    },
    timeline: {
      name: 'vec.task.timeline',
      title: 'Timeline',
      icon: 'bi-list-check',
      path: 'timeline',
    },
    taskCreate: {
      name: 'vec.task.create',
      title: 'Task',
      icon: 'bi-check-circle',
      command: 'T',
    },
    taskEventCreate: {
      name: 'vec.task.event.create',
      title: 'Event',
      icon: 'bi-calendar2',
      command: 'H',
    },
  },
  // Track
  track: {
    root: {
      name: 'vec.track',
      title: 'Track',
      icon: 'bi-pin-map',
      path: 'track',
    },
    monitor: {
      name: 'vec.track.monitor',
      title: 'Monitor',
      icon: 'bi-pin-map',
      path: 'monitor',
    },
    monitorId: {
      name: 'vec.track.monitor.id',
      title: 'Monitor',
      icon: 'bi-pin-map',
      path: 'monitor/:id',
    },
    objects: {
      name: 'vec.track.objects',
      title: 'Monitor',
      icon: 'bi-pin-map',
      path: 'objects',
    },
  },
  // Billing
  billing: {
    root: {
      title: 'Billing',
      icon: 'bi-upc-scan',
      name: 'vec.billing',
      path: 'billing',
    },
    summary: {
      title: 'Summary',
      icon: 'bi-upc-scan',
      name: 'vec.billing.summary',
      path: 'summary',
    },
    recent: {
      title: 'Recent',
      icon: 'bi-upc-scan',
      name: 'vec.billing.recent',
      path: 'recent',
    },
    watchList: {
      title: 'Watch List',
      icon: 'bi-upc-scan',
      name: 'vec.billing.watch-list',
      path: 'watch-list',
    },
    billingDocumentCreate: {
      name: 'vec.billing.document.create',
      title: 'Document',
      icon: 'bi-file-earmark-text',
      path: 'document-create',
      command: 'D',
    },
  },
  // Invoice
  invoice: {
    root: {
      title: 'Invoice',
      icon: 'bi-upc-scan',
      name: 'vec.billing.invoce',
      path: 'invoice',
    },
    recent: {
      title: 'Recent',
      icon: 'bi-upc-scan',
      name: 'vec.billing.invoice.recent',
      path: 'recent',
    },
    history: {
      title: 'History',
      icon: 'bi-upc-scan',
      name: 'vec.billing.invoice.history',
      path: 'history',
    },
  },
  // Shortage
  shortage: {
    root: {
      title: 'Shortage',
      icon: 'bi-exclamation-square',
      name: 'vec.shortage',
      path: 'shortage',
    },
    summary: {
      title: 'Summary',
      icon: 'bi-exclamation-square',
      name: 'vec.shortage.summary',
      path: 'summary',
    },
    history: {
      title: 'History',
      icon: 'bi-exclamation-square',
      name: 'vec.shortage.history',
      path: 'history',
    },
  },
  // Payment
  payment: {
    root: {
      title: 'Payments',
      icon: 'bi-cash-stack',
      name: 'vec.payment',
      path: 'payment',
    },
    summary: {
      title: 'Summary',
      icon: 'bi-cash-stack',
      name: 'vec.payment.summary',
      path: 'summary',
    },
    history: {
      title: 'History',
      icon: 'bi-cash-stack',
      name: 'vec.payment.history',
      path: 'history',
    },
  },
  // Driver
  driver: {
    root: {
      title: 'Drivers',
      icon: 'bi-person-workspace',
      name: 'vec.driver',
      path: 'driver',
    },
    summary: {
      title: 'Summary',
      icon: 'bi-person-workspace',
      name: 'vec.driver.summary',
      path: 'summary',
    },
    trips: {
      title: 'Trips',
      icon: 'bi-person-workspace',
      name: 'vec.driver.trips',
      path: 'trips',
    },
  },
  // Resource
  resource: {
    root: {
      title: 'Resources',
      icon: 'bi-hdd-stack',
      name: 'vec.resource',
      path: 'resource',
    },
    summary: {
      title: 'Resources',
      icon: 'bi-hdd-stack',
      name: 'vec.resource.summary',
      path: 'summary',
    },
    resourceLocationCreate: {
      name: 'vec.resorce.location.create',
      title: 'Location',
      icon: 'bi-geo-alt',
      command: 'L',
    },
    resourceRouteCreate: {
      name: 'vec.resorce.route.create',
      title: 'Route',
      icon: 'bi-compass',
      command: 'R',
    },
  },
  // Settings
  settings: {
    root: {
      title: 'Settings',
      icon: 'bi-dash-circle',
      name: 'vec.settings',
      path: 'settings',
    },
    notification: {
      title: 'Notification',
      icon: 'bi-dash-circle',
      name: 'vec.settings.notification',
      path: 'notification',
    },
    interface: {
      title: 'Interface',
      icon: 'bi-dash-circle',
      name: 'vec.settings.interface',
      path: 'interface',
    },
    status: {
      title: 'Status',
      icon: 'bi-dash-circle',
      name: 'vec.settings.status',
      path: 'status',
    },
  },
};
