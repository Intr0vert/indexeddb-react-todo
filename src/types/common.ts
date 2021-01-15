type CommonTypes = {
  id: string;
  name: string;
  description: string;
};

export type Item = {
  categoryId: string;
} & CommonTypes;

export type Category = CommonTypes;

export type ItemState = { items: Array<Item> };
export type CategoriesState = { categories: Array<Category> };
export type State = {
  itemReducer: ItemState;
  categoryReducer: CategoriesState;
};
