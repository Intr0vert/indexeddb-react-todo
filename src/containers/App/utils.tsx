import { TYPES } from 'common';
import { CategoryContent } from 'containers/CategoryContent';
import { ItemContent } from 'containers/ItemContent';

export const getView = (type: string) => {
  switch (type) {
    case TYPES.ITEM:
      return ItemContent;
    case TYPES.CATEGORY:
      return CategoryContent;
    default:
      return () => <></>;
  }
};
