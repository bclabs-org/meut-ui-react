import React, { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/20/solid';

export type DropdownProps = {
  content: string[];
  label: string;
  disabled?: boolean;
  placeholder: string;
  selected: string;
  handleChange: Function;
  borderStyle?: string;
};

export const Dropdown: React.FC<DropdownProps> = ({
  content,
  label,
  disabled,
  placeholder,
  selected,
  handleChange,
  borderStyle,
}) => (
  <>
    <p className="font-medium text-onTertiary">{label}</p>
    <Menu as="div" className={`relative w-full inline-block text-left ${disabled && 'opacity-40'}`}>
      {({ open }) => (
        <>
          <div>
            <Menu.Button
              className={`inline-flex w-full h-12 justify-between items-center rounded px-3 py-2 font-medium
                ${!open && borderStyle ? borderStyle : 'bg-white'}
                 ${
                   open
                     ? 'border-2 border-primary'
                     : 'border border-gray-300 hover:outline hover:outline-[3px] hover:outline-secondary-hover active:outline-0 active:border-2 active:border-primary ' +
                       'disabled:cursor-default disabled:outline-0 disabled:border disabled:border-gray-300'
                 } 
                `}
              disabled={disabled}
            >
              <span className={`py-1 ${!selected && 'text-neutral'}`}>
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
            <Menu.Items className="absolute z-20 w-full mt-2 overflow-hidden rounded bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              {content.map((item) => (
                <Menu.Item key={item}>
                  <div
                    className={`block cursor-pointer px-3 py-2.5 font-medium ${
                      item === selected
                        ? 'text-gray-900 bg-gray-200'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900 focus:bg-gray-200'
                    }`}
                    onClick={() => {
                      handleChange(item);
                    }}
                  >
                    <p className="my-1">{item}</p>
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
