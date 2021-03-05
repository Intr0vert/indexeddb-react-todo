import { TYPES } from 'common';
import { CategoryContent, ItemContent } from 'containers';

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
