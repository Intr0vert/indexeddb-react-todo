import { Types } from 'types';
import { showTypeMapper } from './constants';

type Props = {
  active: boolean;
  name: Types;
  onClick: () => void;
};

export const HeaderRow = ({ active, onClick, name }: Props) => (
  <span
    className={`${active ? 'header--tabs-active' : ''} header--tab`}
    onClick={onClick}
  >
    {showTypeMapper[name]}
  </span>
);
