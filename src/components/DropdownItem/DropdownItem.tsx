import React from 'react';
import classNames from 'classnames';
import DropdownContext from '../DropdownV2/DropdownV2Context';

type DropdownItemProps = {
  value: string;
  children: React.ReactNode;
  onClick?: (evt: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
};

const DropdownItem = ({ value, children, onClick }: DropdownItemProps) => {
  const { activeItem, fontSize } = React.useContext(DropdownContext);

  return (
    <li
      key={value}
      className={classNames(
        'flex gap-x-3 items-center px-3 py-[14px]',
        'hover:bg-gray-50 active:bg-gray-100 cursor-pointer',
        fontSize === 'text-xs' ? 'px-2 py-3' : '',
        fontSize === 'text-sm' ? 'p-3' : '',
        activeItem === value ? 'bg-gray-200 hover:bg-gray-200' : ''
      )}
      onClick={onClick}
    >
      {children}
    </li>
  );
};

export default DropdownItem;
