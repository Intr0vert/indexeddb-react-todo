import { createSlice } from '@reduxjs/toolkit';
import { AddItemAction, RemoveItemAction, ItemState } from 'types';

export const itemSlice = createSlice({
  name: 'todoSlice',
  initialState: { items: [] },
  reducers: {
    createItem: (state: ItemState, action: AddItemAction) => {
      state.items.push(action.payload);
    },
    removeItem: (state: ItemState, action: RemoveItemAction) => {
      state.items.splice(state.items.indexOf(action.payload), 1);
    },
  },
});
