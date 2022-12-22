import { configureStore } from '@reduxjs/toolkit';
import { productDetailReducer } from '../pages/ProductDetail/ProductDetailSlice';
import { productPageReducer } from '../pages/ProductsPage/ProductPageSlice';
import { currentUserReducer } from './currentUser.slice';

export const store = configureStore({
  reducer: {
    productPage: productPageReducer,
    currentUser:currentUserReducer,
    productDetailPage: productDetailReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
