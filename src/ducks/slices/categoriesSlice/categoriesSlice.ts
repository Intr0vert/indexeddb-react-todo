import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getCategories } from 'db';
import {
  AddCategoryAction,
  CategoriesState,
  Category,
  RemoveCategoryAction,
} from 'types';

export const fetchCategories = createAsyncThunk(
  'categoriesSlice/getCategories',
  async () => {
    const response: Category[] = await getCategories();

    return response;
  }
);

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
  extraReducers: (builder) => {
    builder.addCase(
      fetchCategories.fulfilled,
      (state: CategoriesState, action) => {
        state.categories = action.payload;
      }
    );
  },
});
