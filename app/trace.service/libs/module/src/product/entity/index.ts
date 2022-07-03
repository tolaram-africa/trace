export * from './product.brand.entity';
export * from './product.cost.entity';
export * from './product.entity';
export * from './product.model.entity';
export * from './product.category.entity';

import {
  ProductBrand,
  ProductCategory,
  Product,
  ProductModel,
  ProductCost,
} from './';

export const ProductModuleEntity = [
  ProductBrand,
  ProductCategory,
  Product,
  ProductModel,
  ProductCost,
];
