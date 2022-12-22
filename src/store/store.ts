import { configureStore } from '@reduxjs/toolkit';
import { productPageReducer } from '../pages/ProductsPage/ProductPageSlice';
import { currentUserReducer } from './currentUser.slice';

export const store = configureStore({
  reducer: {
    productPage: productPageReducer,
    currentUser:currentUserReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
