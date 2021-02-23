export type Id = number;

type CommonTypes = {
  id: Id;
  name: string;
  description: string;
};

export type Item = {
  categoryId?: Id;
} & CommonTypes;

export type Category = CommonTypes;

export type SettingsState = { isTask: boolean };
export type ItemState = { items: Item[] };
export type CategoriesState = { categories: Category[] };
export type ModalData = {
  name: string;
  categoryId?: any;
  description: string;
  id?: Id;
};
export type ModalState = {
  actualModal: string | null;
  modalData: ModalData;
  isNameError?: boolean;
};
export type State = {
  itemReducer: ItemState;
  categoryReducer: CategoriesState;
  modalReducer: ModalState;
  settingsReducer: SettingsState;
};

export type GetState = () => State;
