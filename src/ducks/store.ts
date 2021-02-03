import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { categoriesSlice, itemSlice } from './slices';
import { modalSlice } from './slices/modalSlice';
import { settingsSlice } from './slices/settingsSlice';

const middleware = getDefaultMiddleware({
  immutableCheck: false,
  serializableCheck: false,
  thunk: true,
});

const { actions: itemActions, reducer: itemReducer } = itemSlice;
const { actions: categoryActions, reducer: categoryReducer } = categoriesSlice;
const { actions: modalActions, reducer: modalReducer } = modalSlice;
const { actions: settingsActions, reducer: settingsReducer } = settingsSlice;

const actions = {
  ...categoryActions,
  ...itemActions,
  ...modalActions,
  ...settingsActions,
};

export { actions };

export const store = configureStore({
  reducer: { categoryReducer, itemReducer, modalReducer, settingsReducer },
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
});
