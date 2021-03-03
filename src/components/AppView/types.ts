import { ChangeTypeAction, SettingsState } from 'types';

export type AppViewProps = {
  changeIsTask: (state: SettingsState, action: ChangeTypeAction) => void;
};
