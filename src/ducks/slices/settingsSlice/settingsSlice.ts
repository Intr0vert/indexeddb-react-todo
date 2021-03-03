import { createSlice } from '@reduxjs/toolkit';
import { TYPES } from 'common';
import { ChangeTypeAction, SettingsState } from 'types';

const initialState: any = {
  type: TYPES.ITEM,
};

export const settingsSlice = createSlice({
  name: 'settingsSlice',
  initialState: initialState,
  reducers: {
    changeType: (state: SettingsState, action: ChangeTypeAction) => {
      state.type = action.payload;
    },
  },
});
