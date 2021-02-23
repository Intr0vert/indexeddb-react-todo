import { ModalData } from './common';

type Action<T> = {
  type: string;
  payload: T;
};

export type ChangeIsTaskAction = Action<boolean>;

export type ShowModal = Action<string>;

export type SetError = Action<boolean>;

type NewField = {
  field: 'categoryId' | 'description' | 'name';
  value: any;
};

export type ChangeField = Action<NewField>;

export type ChangeModalData = Action<ModalData>;
