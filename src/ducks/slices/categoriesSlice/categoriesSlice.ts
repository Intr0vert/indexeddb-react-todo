import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { addCategory, getCategories, removeCategory, updateCategory } from 'db';
import { CategoriesState, Category, Id, ModalData } from 'types';

export const createCategory = createAsyncThunk(
  'categoriesSlice/createCategory',
  async (categoryData: ModalData & { id: Id }) => {
    const response: Category[] = await addCategory(categoryData);

    return response;
  }
);

export const editCategory = createAsyncThunk(
  'categoriesSlice/editCategory',
  async (categoryData: ModalData & { id: Id }) => {
    const response: Category[] = await updateCategory(categoryData);

    return response;
  }
);

export const fetchCategories = createAsyncThunk(
  'categoriesSlice/getCategories',
  async () => {
    const response: Category[] = await getCategories();

    return response;
  }
);

export const deleteCategory = createAsyncThunk(
  'categoriesSlice/deleteCategory',
  async (id: Id) => {
    const response: Category[] = await removeCategory(id);

    return response;
  }
);

export const categoriesSlice = createSlice({
  name: 'categoriesSlice',
  initialState: { categories: [] },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      createCategory.fulfilled,
      (state: CategoriesState, action) => {
        state.categories = action.payload;
      }
    );
    builder.addCase(
      editCategory.fulfilled,
      (state: CategoriesState, action) => {
        state.categories = action.payload;
      }
    );
    builder.addCase(
      fetchCategories.fulfilled,
      (state: CategoriesState, action) => {
        state.categories = action.payload;
      }
    );
    builder.addCase(
      deleteCategory.fulfilled,
      (state: CategoriesState, action) => {
        state.categories = action.payload;
      }
    );
  },
});
