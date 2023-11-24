import React, { Fragment } from 'react';

import { Listbox, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import classNames from 'classnames';

export type DropdownProps = {
  contents: { value: string; label: string }[];
  label?: string;
  disabled?: boolean;
  placeholder?: string;
  selected: string;
  onChange: (value: string) => void;
  buttonStyle?: 'default' | 'borderless' | 'mixed';
  fontSize?: 'text-xs' | 'text-sm' | 'text-base';
  menuWidth?: 'full' | 'medium' | 'small';
};

export const Dropdown: React.FC<DropdownProps> = ({
  contents,
  label,
  disabled,
  placeholder,
  selected,
  onChange,
  buttonStyle = 'default',
  fontSize = 'text-base',
  menuWidth = 'full',
}) => (
  <>
    <Listbox
      as="div"
      className={classNames(
        'relative text-left font-medium font-sans',
        fontSize,
        disabled ? 'opacity-40' : ''
      )}
      onChange={onChange}
      disabled={disabled}
      value={selected}
    >
      {({ open }) => (
        <>
          {label && (
            <Listbox.Label className="block font-medium text-onTertiary mb-1">
              {label}
            </Listbox.Label>
          )}
          <Listbox.Button
            className={classNames(
              'flex items-center transition-all',
              buttonStyle === 'default' || buttonStyle === 'mixed'
                ? 'w-full justify-between border border-gray-300 rounded p-3 hover:ring-[3px] ring-emerald-100 active:ring-emerald-500'
                : '',
              (buttonStyle === 'default' || buttonStyle === 'mixed') && open
                ? 'ring-2 ring-emerald-500 hover:ring-[2px] active:ring-emerald-100'
                : '',
              buttonStyle === 'borderless' ? 'border-0 p-1' : '',
              buttonStyle === 'mixed' ? 'border-0' : ''
            )}
          >
            <span className={`pr-2 ${!selected && 'text-neutral'}`}>
              {contents?.find((item) => item.value === selected)?.label || placeholder}
            </span>
            <ChevronDownIcon
              className={classNames('h-5 w-5', open ? 'rotate-180' : '')}
              aria-hidden="true"
            />
          </Listbox.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Listbox.Options
              className={classNames(
                'absolute mt-2 py-1 rounded bg-white ring-1 ring-black ring-opacity-5 shadow-lg z-10',
                menuWidth === 'full' ? `w-full [&>li]:px-3 [&>li]:py-[14px]` : '',
                menuWidth === 'medium' ? 'w-[309px] [&>li]:p-3' : '',
                menuWidth === 'small' ? 'w-[218px] [&>li]:px-2 [&>li]:py-3' : ''
              )}
            >
              {contents.map((item, index) => (
                <Listbox.Option
                  key={`${item.value}_${index}`}
                  value={item.value}
                  className={classNames(
                    'block cursor-pointer',
                    selected === item.value
                      ? 'text-gray-900 bg-gray-200'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900 focus:bg-gray-200'
                  )}
                >
                  {item.label}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </>
      )}
    </Listbox>
  </>
);
