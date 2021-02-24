import { createSlice } from '@reduxjs/toolkit';
import { TYPES } from 'commonConstants';
import { ChangeTypeAction, SettingsState } from 'types';

export const settingsSlice = createSlice({
  name: 'settingsSlice',
  initialState: { type: TYPES.ITEM },
  reducers: {
    changeType: (state: SettingsState, action: ChangeTypeAction) => {
      state.type = action.payload;
    },
  },
});
