import { ModalData, Types } from './common';

type Action<T> = {
  type: string;
  payload: T;
};

export type ChangeTypeAction = Action<Types>;

export type SetError = Action<boolean>;

type NewField = {
  field: 'categoryId' | 'description' | 'name';
  value: any;
};

export type ChangeField = Action<NewField>;

export type ChangeModalData = Action<ModalData>;
