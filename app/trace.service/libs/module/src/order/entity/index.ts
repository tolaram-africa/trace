export * from './order.entity';
export * from './order.freight.entity';
export * from './order.invoice.entity';
export * from './order.manifest.entity';
export * from './order.request.entity';
export * from './order.trip-pass.entity';
export * from './order.trip-pass.reason.entity';

import {
  Order,
  OrderRequest,
  OrderFreight,
  OrderInvoice,
  OrderManifest,
  OrderTripPass,
  TripPassReason,
} from './';

export const OrderModuleEntity = [
  Order,
  OrderRequest,
  OrderFreight,
  OrderInvoice,
  OrderManifest,
  OrderTripPass,
  TripPassReason,
];