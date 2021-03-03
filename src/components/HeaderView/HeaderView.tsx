import React from 'react';
import { Types } from 'types';
import { addTypeMapper } from './constants';
import { HeaderRow } from './HeaderRow';
import './styles.sass';

type Props = {
  onChangeType: Function;
  onOpenModal: () => void;
  tabs: Types[];
  type: Types;
};

export const HeaderView = ({
  onChangeType,
  onOpenModal,
  tabs,
  type,
}: Props) => (
  <div className={'header'}>
    <div className={'header--left'}>
      <div className={'header--name'}>ToDo List</div>
      <div className={'header--tabs'}>
        {tabs.map((el, i) => (
          <React.Fragment key={el}>
            <HeaderRow
              key={el}
              active={type === el}
              name={el}
              onClick={() => onChangeType(el)}
            />
            {i < tabs.length - 1 && <span>|</span>}
          </React.Fragment>
        ))}
      </div>
    </div>
    <div className={'header--right'} onClick={onOpenModal}>
      Добавить {addTypeMapper[type]}
    </div>
  </div>
);
