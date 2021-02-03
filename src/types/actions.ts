import { Category, Item } from './common';

type Action<T> = {
  type: string;
  payload: T;
};

export type AddItemAction = Action<Item>;

export type RemoveItemAction = Action<Item>;

export type AddCategoryAction = Action<Category>;

export type ChangeIsTaskAction = Action<boolean>;

export type RemoveCategoryAction = Action<Category>;

export type ShowModal = Action<string>;
