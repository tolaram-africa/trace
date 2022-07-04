/* eslint-disable @typescript-eslint/no-var-requires */
import 'reflect-metadata';
import { coreDataSource } from '../../.ormconfig';
import { validate } from 'class-validator';
import AdminJS, { AdminJSOptions } from 'adminjs';
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
  AdminWarehouseModule,
  AdminSupplierModule,
  AdminTemplateModule,
  AdminSubscriptionModule,
  AdminShipmentModule,
  AdminRatingModule,
  AdminNetworkModule,
  AdminShortageModule,
  AdminRouteModule,
  AdminStockModule,
  AdminFormModule,
  AdminIsuranceModule,
  AdminDriverModule,
  AdminMaintenanceModule,
  AdminAssetModule,
  AdminBeaconModule,
  AdminEventModule,
  AdminTaskModule,
  AdminOrderModule,
  AdminTicketModule,
} from './module.resources';

const AdminJSExpress = require('@adminjs/express');
const express = require('express');

const main = async () => {
  Resource.validate = validate;
  AdminJS.registerAdapter({ Database, Resource });

  const adminJs = new AdminJS({
    rootPath: '/',
    loginPath: '/auth/login',
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
      ...AdminTaskModule,
      ...AdminOrderModule,
      ...AdminCustomerModule,
      ...AdminTicketModule,
      ...AdminDriverModule,
      ...AdminAssetModule,
      ...AdminBeaconModule,
      ...AdminSupplierModule,
      ...AdminSubscriptionModule,
      ...AdminTemplateModule,
      ...AdminFormModule,
      ...AdminDashboardModule,
      ...AdminPaymentModule,
      ...AdminScheduleModule,
      ...AdminLocationModule,
      ...AdminRouteModule,
      ...AdminProductModule,
      ...AdminWarehouseModule,
      ...AdminShipmentModule,
      ...AdminRatingModule,
      ...AdminNetworkModule,
      ...AdminShortageModule,
      ...AdminMaintenanceModule,
      ...AdminIsuranceModule,
      ...AdminStockModule,
      ...AdminEventModule,
    ],
  } as AdminJSOptions);

  const appPort = 3002;

  let router = express.Router();
  router = AdminJSExpress.buildAuthenticatedRouter(
    adminJs,
    {
      authenticate: async (email: string, password: string) => {
        const auth = email === 'trace' && password === 'trace';
        if (auth) return { email: 'trace@local.host' };
        else return null;
      },
      cookieName: 'trace',
      cookiePassword: 'trace',
    },
    null,
    {
      resave: false,
      saveUninitialized: true,
    },
  );
  const app = express();
  app.use(adminJs.options.rootPath, router);
  app.listen(appPort, () => console.log(`Trace Admin localhost:${appPort}/`));
};

coreDataSource
  .initialize()
  .then(main)
  .catch((error) => console.log(error));
