import { Category, Todo } from './common';

export type AddItemAction = {
  type: string;
  payload: Todo;
};

export type RemoveItemAction = {
  type: string;
  payload: Todo;
};

export type AddCategoryAction = {
  type: string;
  payload: Category;
};

export type RemoveCategoryAction = {
  type: string;
  payload: Category;
};
