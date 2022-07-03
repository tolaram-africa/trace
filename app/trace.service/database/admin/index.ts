/* eslint-disable @typescript-eslint/no-var-requires */
import 'reflect-metadata';
import { coreDataSource } from '../../.ormconfig';
import { validate } from 'class-validator';
import { AdminJSOptions } from 'adminjs';
import { Database, Resource } from '@adminjs/typeorm';
import {
  AdminTenantModule,
  AdminSystemModule,
  AdminFileModule,
  AdminUserModule,
  AdminPaymentModule,
  AdminTagModule,
  AdminLocationModule,
  AdminScheduleModule,
  AdminDashboardModule,
  AdminCustomerModule,
  AdminProductModule,
} from './module.resources';

const AdminJS = require('adminjs');
const AdminJSExpress = require('@adminjs/express');
const express = require('express');
const app = express();

const main = async () => {
  Resource.validate = validate;
  AdminJS.registerAdapter({ Database, Resource });

  const adminJs = new AdminJS({
    rootPath: '/',
    loginPath: '/login',
    branding: {
      logo: false,
      companyName: 'Trace Admin',
      softwareBrothers: false,
    },
    databases: [],
    dashboard: {
      handler: async () => {},
      component: AdminJS.bundle('./dashboard'),
    },
    resources: [
      ...AdminSystemModule,
      ...AdminTenantModule,
      ...AdminTagModule,
      ...AdminFileModule,
      ...AdminUserModule,
      ...AdminCustomerModule,
      ...AdminDashboardModule,
      ...AdminPaymentModule,
      ...AdminScheduleModule,
      ...AdminLocationModule,
      ...AdminProductModule,
    ],
    auth: {
      authenticate: async (email, password) =>
        Promise.resolve({ email: 'test' }),
      cookieName: 'test',
      cookiePassword: 'testPass',
    },
  } as AdminJSOptions);

  const appPort = 3002;
  const router = AdminJSExpress.buildRouter(adminJs);
  app.use(adminJs.options.rootPath, router);
  app.listen(appPort, () => console.log(`Trace Admin localhost:${appPort}/`));
};

coreDataSource
  .initialize()
  .then(main)
  .catch((error) => console.log(error));
