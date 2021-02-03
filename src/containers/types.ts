import { ChangeIsTaskAction, SettingsState } from 'types';

export type AppViewProps = {
  changeIsTask: (state: SettingsState, action: ChangeIsTaskAction) => void;
};
