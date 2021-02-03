import { createSlice } from '@reduxjs/toolkit';
import { ChangeIsTaskAction, SettingsState } from 'types';

export const settingsSlice = createSlice({
  name: 'settingsSlice',
  initialState: { isTask: false },
  reducers: {
    changeIsTask: (state: SettingsState, action: ChangeIsTaskAction) => {
      state.isTask = action.payload;
    },
  },
});
