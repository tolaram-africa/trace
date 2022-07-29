import { Database, Resource } from '@adminjs/typeorm';
import { Module } from '@nestjs/common';
import AdminJS, { AdminJSOptions } from 'adminjs';
import { AdminModule as AdminJsModule } from '@adminjs/nestjs';
import { validate } from 'class-validator';
import { dataSource } from '@@/data/connection';
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
import { SessionOptions } from 'express-session';

Resource.validate = validate;
AdminJS.registerAdapter({ Database, Resource });
dataSource.setOptions({ synchronize: false });
dataSource.initialize();
@Module({
  imports: [
    AdminJsModule.createAdminAsync({
      useFactory: () => ({
        adminJsOptions: <AdminJSOptions>{
          rootPath: '/data-admin',
          loginPath: '/data-admin/auth/login',
          branding: {
            logo: false,
            companyName: 'Data Admin',
            softwareBrothers: false,
          },
          databases: [],
          dashboard: {
            handler: async () => ({}),
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
        },
        auth: {
          authenticate: async (email: string, password: string) => {
            const auth = email === 'trace' && password === 'trace';
            if (auth) return Promise.resolve({ email: 'trace@local.host' });
            else return null;
          },
          cookieName: 'trace',
          cookiePassword: 'trace',
          sessionOptions: <SessionOptions>{
            secret: 'trace',
            resave: false,
            saveUninitialized: true,
            cookie: {
              maxAge: 1000 * 60 * 100,
            },
          },
        },
      }),
    }),
  ],
})
export class AdminModule {}
