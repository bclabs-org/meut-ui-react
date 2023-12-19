import React from 'react';

import { CheckCircleIcon } from '@heroicons/react/20/solid';
import classNames from 'classnames';

type CheckboxProps = {
  label?: string;
  isDisabled?: boolean;
  isComplete?: boolean;
  disabled?: boolean;
  checked?: boolean;
  indeterminate?: boolean;
  onChange?: () => void;
};

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  isDisabled = false,
  disabled = false,
  isComplete,
  checked = false,
  indeterminate = false,
  onChange,
}: CheckboxProps) => (
  <>
    {isDisabled ? (
      <div>
        <nav className="flex" aria-label="Progress">
          {isComplete ? (
            <span className="flex items-start">
              <span className="relative flex h-5 w-5 flex-shrink-0 items-center justify-center">
                <CheckCircleIcon className="h-full w-full text-emerald-600" aria-hidden="true" />
              </span>
              <span className="ml-3 text-sm font-medium text-neutral">{label}</span>
            </span>
          ) : (
            <div className="flex items-start">
              <div
                className="relative flex h-5 w-5 flex-shrink-0 items-center justify-center"
                aria-hidden="true"
              >
                <div className="h-2 w-2 rounded-full bg-gray-300" />
              </div>
              <p className="ml-3 text-sm font-medium text-neutral">{label}</p>
            </div>
          )}
        </nav>
      </div>
    ) : (
      <fieldset>
        <div className="flex items-start">
          <div className="flex h-5 items-center">
            <input
              id="comments"
              aria-describedby="comments-description"
              name="comments"
              type="checkbox"
              disabled={disabled}
              checked={checked}
              className={classNames(
                'h-4 w-4 border-2 border-gray-300 text-primary rounded-[1px]',
                'hover:ring-[7px] hover:ring-emerald-100 hover:bg-emerald-100',
                'active:ring-[7px] active:ring-offset-0 active:ring-emerald-200 active:outline-8 active:bg-emerald-200',
                'focus:ring-[7px] focus:ring-offset-0 focus:ring-emerald-200 focus:outline-8 focus:bg-emerald-200',
                'disabled:ring-0 disabled:bg-transparent disabled:opacity-40'
              )}
              onChange={onChange}
              ref={(el): void => {
                const checkbox = el;
                if (checkbox) checkbox.indeterminate = indeterminate;
              }}
            />
          </div>
          <div
            className={`ml-2 text-sm font-medium text-onTertiary ${
              disabled ? 'opacity-40' : 'opacity-100'
            }`}
          >
            <label htmlFor="comments">{label}</label>
          </div>
        </div>
      </fieldset>
    )}
  </>
);

export default Checkbox;
