
import { productApi } from './product-api';
import { categoryApi } from './category-api';
import { orderApi } from './order-api';
import { translationApi } from './translation-api';

// Re-export all API functions as a unified API object
export const api = {
  ...productApi,
  ...categoryApi,
  ...orderApi,
  ...translationApi
};
