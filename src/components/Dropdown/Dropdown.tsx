import React, { Fragment } from 'react';

import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/20/solid';
import classNames from 'classnames';

export type DropdownProps = {
  content: string[];
  label: string;
  disabled?: boolean;
  placeholder: string;
  selected: string;
  onChange: Function;
  buttonStyle?: 'default' | 'borderless' | 'mixed';
  fontSize?: 'text-xs' | 'text-sm' | 'text-base';
  menuWidth?: 'full' | 'medium' | 'small';
};

export const Dropdown: React.FC<DropdownProps> = ({
  content,
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
    <p className="font-medium text-onTertiary">{label}</p>
    <Menu as="div" className={`relative w-full text-left ${disabled && 'opacity-40'} ${fontSize}`}>
      {({ open }) => (
        <>
          <div>
            <Menu.Button
              className={classNames(
                'dropdown bg-white flex items-center transition-all',
                'font-medium',
                buttonStyle === 'default' || buttonStyle === 'mixed'
                  ? 'w-full justify-between border border-gray-300 rounded p-3 hover:ring-[3px] ring-emerald-100 active:ring-emerald-500'
                  : '',
                (buttonStyle === 'default' || buttonStyle === 'mixed') && open
                  ? 'ring-2 ring-emerald-500 hover:ring-[2px] active:ring-emerald-100'
                  : '',
                buttonStyle === 'borderless' ? 'border-0 p-1 bg-transparent' : '',
                buttonStyle === 'mixed' ? 'border-transparent bg-transparent' : ''
              )}
              disabled={disabled}
            >
              <span className={`pr-2 ${!selected && 'text-neutral'}`}>
                {selected || placeholder}
              </span>
              {open ? (
                <ChevronUpIcon className="h-5 w-5" aria-hidden="true" />
              ) : (
                <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
              )}
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items
              className={classNames(
                'absolute mt-2 py-1 rounded bg-white ring-1 ring-black ring-opacity-5 shadow-lg',
                menuWidth === 'full' ? `w-full [&>div]:px-3 [&>div]:py-[14px]` : '',
                menuWidth === 'medium' ? 'w-[309px] [&>div]:p-3' : '',
                menuWidth === 'small' ? 'w-[218px] [&>div]:px-2 [&>div]:py-3' : ''
              )}
            >
              {content.map((item) => (
                <Menu.Item key={item}>
                  <div
                    className={`block cursor-pointer px-3 py-2.5 font-medium ${
                      item === selected
                        ? 'text-gray-900 bg-gray-200'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900 focus:bg-gray-200'
                    }`}
                    onClick={() => {
                      onChange(item);
                    }}
                  >
                    {item}
                  </div>
                </Menu.Item>
              ))}
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  </>
);
