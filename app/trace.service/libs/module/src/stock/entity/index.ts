export * from './stock.change.entity';
export * from './stock.inventory.entity';
export * from './stock.out-request.entity';
export * from './stock.out.entity';
export * from './stock.purchase-item.entity';
export * from './stock.purchase-request.entity';
export * from './stock.purchase.entity';
export * from './stock.transfer.entity';
export * from './stock.warehouse.entity';

import {
  StockChange,
  StockInventory,
  StockOutRequest,
  StockOut,
  StockPurchaseItem,
  StockPurchaseRequest,
  StockPurchase,
  StockTransfer,
  StockWarehouse,
} from './';

export const StockModuleEntity = [
  StockChange,
  StockInventory,
  StockOutRequest,
  StockOut,
  StockPurchaseItem,
  StockPurchaseRequest,
  StockPurchase,
  StockTransfer,
  StockWarehouse,
];
