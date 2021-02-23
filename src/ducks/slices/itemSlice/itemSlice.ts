import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  addItem,
  getItems,
  removeAllConnectedItems,
  removeItem,
  updateItem,
} from 'db';
import { ItemState, Item, ModalData, Id } from 'types';

export const createItem = createAsyncThunk(
  'categoriesSlice/createItem',
  async (categoryData: ModalData & { id: Id }) => {
    const response: Item[] = await addItem(categoryData);

    return response;
  }
);

export const editItem = createAsyncThunk(
  'categoriesSlice/editItem',
  async (categoryData: ModalData & { id: Id }) => {
    const response: Item[] = await updateItem(categoryData);

    return response;
  }
);

export const fetchItems = createAsyncThunk(
  'categoriesSlice/getItems',
  async () => {
    const response: Item[] = await getItems();

    return response;
  }
);

export const deleteItem = createAsyncThunk(
  'categoriesSlice/deleteItem',
  async (id: Id) => {
    const response: Item[] = await removeItem(id);

    return response;
  }
);

export const deleteAllConections = createAsyncThunk(
  'categoriesSlice/deleteAllConections',
  async (id: Id) => {
    const response: Item[] = await removeAllConnectedItems(id);

    return response;
  }
);

export const itemSlice = createSlice({
  name: 'todoSlice',
  initialState: { items: [] },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createItem.fulfilled, (state: ItemState, action) => {
      state.items = action.payload;
    });
    builder.addCase(editItem.fulfilled, (state: ItemState, action) => {
      state.items = action.payload;
    });
    builder.addCase(fetchItems.fulfilled, (state: ItemState, action) => {
      state.items = action.payload;
    });
    builder.addCase(deleteItem.fulfilled, (state: ItemState, action) => {
      state.items = action.payload;
    });
    builder.addCase(
      deleteAllConections.fulfilled,
      (state: ItemState, action) => {
        state.items = action.payload;
      }
    );
  },
});
