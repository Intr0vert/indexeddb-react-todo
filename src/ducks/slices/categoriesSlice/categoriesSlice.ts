import { createSlice } from '@reduxjs/toolkit';
import {
  AddCategoryAction,
  CategoriesState,
  RemoveCategoryAction,
} from 'types';

export const categoriesSlice = createSlice({
  name: 'categoriesSlice',
  initialState: { categories: [] },
  reducers: {
    createCategory: (state: CategoriesState, action: AddCategoryAction) => {
      state.categories.push(action.payload);
    },
    removeCategory: (state: CategoriesState, action: RemoveCategoryAction) => {
      state.categories.splice(state.categories.indexOf(action.payload), 1);
    },
  },
});
