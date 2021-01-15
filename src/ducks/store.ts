import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { categoriesSlice, itemSlice } from './slices';

const middleware = getDefaultMiddleware({
  immutableCheck: false,
  serializableCheck: false,
  thunk: true,
});

const { actions: itemActions, reducer: itemReducer } = itemSlice;
const { actions: categoryActions, reducer: categoryReducer } = categoriesSlice;

const actions = { ...categoryActions, ...itemActions };

export { actions };

export const store = configureStore({
  reducer: { categoryReducer, itemReducer },
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
});
