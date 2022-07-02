/* eslint-disable @typescript-eslint/no-var-requires */
import 'reflect-metadata';
import { coreDataSource } from '../../.ormconfig';
import { validate } from 'class-validator';
import { AdminJSOptions } from 'adminjs';
import { AdminUserModule } from './user.module';
import { AdminSystemModule } from './system.module';
import { AdminDocumentModule, AdminTenantModule } from './tenant.module';
import { AdminPaymentModule } from './payment.module';
import { Database, Resource } from '@adminjs/typeorm';

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
      ...AdminUserModule,
      ...AdminDocumentModule,
      ...AdminPaymentModule,
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
