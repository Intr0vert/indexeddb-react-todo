type CommonTypes = {
  id: string;
  name: string;
  description: string;
};

export type Item = {
  categoryId?: string;
} & CommonTypes;

export type Category = CommonTypes;

export type SettingsState = { isTask: boolean };
export type ItemState = { items: Item[] };
export type CategoriesState = { categories: Category[] };
export type ModalState = {
  actualModal: string | null;
};
export type State = {
  itemReducer: ItemState;
  categoryReducer: CategoriesState;
  modalReducer: ModalState;
  settingsReducer: SettingsState;
};
