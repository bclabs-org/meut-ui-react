import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import DropdownContext from './DropdownV2Context';

type DropdownV2Props = {
  activeItem: string;
  activeItemLabel?: string;
  titleLabel?: string;
  fontSize?: 'text-xs' | 'text-sm' | 'text-base';
  variants?: 'primary' | 'secondary' | 'tertiary';
  placeholder?: string;
  children?: React.ReactNode;
};

const DropdownV2: React.FC<DropdownV2Props> = ({
  activeItem,
  activeItemLabel = '',
  titleLabel = '',
  fontSize = 'text-base',
  variants = 'primary',
  placeholder = 'Select an item',
  children,
}) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const outsideClickHandler = (e: MouseEvent): void => {
      if (e.target instanceof HTMLElement && !e.target.closest('.dropdown')) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener('click', outsideClickHandler);
    }

    return () => {
      document.removeEventListener('click', outsideClickHandler);
    };
  }, [open]);

  return (
    <DropdownContext.Provider value={{ activeItem, fontSize }}>
      <span className={`block mb-1 text-gray-700 font-medium ${fontSize}`}>{titleLabel}</span>
      <button
        className={classNames(
          'dropdown bg-white flex items-center transition-all',
          fontSize,
          'font-medium',
          variants === 'primary'
            ? 'w-full justify-between border border-gray-300 rounded p-3 hover:ring-[3px] ring-emerald-100 active:ring-emerald-500'
            : '',
          variants === 'primary' && open
            ? 'ring-2 ring-emerald-500 hover:ring-[2px] active:ring-emerald-100'
            : '',
          variants === 'secondary' || variants === 'tertiary' ? 'border-0 p-1' : ''
        )}
        onClick={(): void => setOpen((prev) => !prev)}
      >
        <span className={classNames(!activeItemLabel ? 'text-gray-500' : '')}>
          {activeItemLabel || placeholder}
        </span>
        <ChevronDownIcon
          className={classNames('ml-2 h-5 w-5', open ? 'rotate-180' : '')}
          aria-hidden="true"
        />
      </button>
      {open && (
        <ul
          className={classNames(
            'mt-2 py-1 rounded ring-1 ring-black ring-opacity-5 shadow-lg',
            variants === 'secondary' ? 'w-[309px]' : '',
            variants === 'secondary' && fontSize === 'text-xs' ? 'w-[218px]' : '',
            fontSize,
            'font-medium text-gray-600'
          )}
        >
          {children}
        </ul>
      )}
    </DropdownContext.Provider>
  );
};

export default DropdownV2;
