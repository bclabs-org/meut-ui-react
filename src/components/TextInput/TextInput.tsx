import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import Button from '../Button';

type TextInputProps = {
  type?: string;
  name?: string;
  label?: string;
  disabled?: boolean;
  placeholder?: string;
  helperMessage?: string;
  errorMessage?: string;
  extraMessage?: string;
  maxLength?: number;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  value?: string;
  verificationTime?: string;
  handleClickOnExtraMessage?: () => void;
  flag?: boolean;
  miniButton?: string;
  handleMiniButtonClick?: () => void;
  [key: string]: any;
  currency?: string;
};

const TextInput: React.FC<TextInputProps> = ({
  type,
  name,
  label,
  disabled,
  placeholder,
  helperMessage,
  errorMessage,
  extraMessage,
  maxLength,
  onChange,
  onBlur,
  onFocus,
  value,
  verificationTime,
  flag,
  miniButton,
  handleMiniButtonClick,
  handleClickOnExtraMessage,
  currency,
  ...rest
}: TextInputProps) => {
  const rightAddedRef = useRef<HTMLDivElement>(null);
  const [rightAddedWidth, setRightAddedWidth] = useState<number | null>(0);

  useEffect(() => {
    if (rightAddedRef.current) {
      setRightAddedWidth(rightAddedRef.current.clientWidth + 16);
    }
  }, [rightAddedRef.current?.clientWidth]);

  return (
    <div className={`font-medium ${disabled && 'opacity-40'}`}>
      <div className="flex justify-between text-onTertiary mb-1">
        <label htmlFor={name}>{label}</label>
        <span className={`${verificationTime === '0:00' && 'text-warning'}`}>
          {verificationTime}
        </span>
      </div>
      <div className="relative">
        <input
          type={type}
          maxLength={maxLength}
          name={name}
          id={name}
          className={`w-full h-12 p-3 rounded focus:ring-0 placeholder:text-neutral ${
            errorMessage
              ? 'border-2 border-warning focus:border-warning'
              : 'border border-gray-300 hover:outline hover:outline-[3px] hover:outline-secondary-hover hover:focus:outline-0 focus:border-2 focus:border-primary disabled:hover:outline-0'
          }`}
          style={{ paddingRight: (miniButton || currency) && `${rightAddedWidth}px` }}
          disabled={disabled}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
          value={value}
          autoComplete="off"
          {...rest}
        />
        {miniButton && (
          <div ref={rightAddedRef} className="absolute top-1.5 bottom-1.5 right-2.5">
            <Button
              type="button"
              color="secondary"
              size="small"
              handleClick={handleMiniButtonClick}
            >
              {miniButton}
            </Button>
          </div>
        )}
        {currency && (
          <div ref={rightAddedRef} className="absolute top-3.5 bottom-3.5 right-2.5">
            <span className="text-sm font-semibold text-onTertiary">{currency}</span>
          </div>
        )}
      </div>
      {(errorMessage || extraMessage || helperMessage) && (
        <div className="text-sm mt-1 flex justify-between">
          {errorMessage && (
            <div className="w-full flex">
              <div>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.25 10C0.25 4.61522 4.61522 0.25 10 0.25C15.3848 0.25 19.75 4.61522 19.75 10C19.75 15.3848 15.3848 19.75 10 19.75C4.61522 19.75 0.25 15.3848 0.25 10ZM10 6.25C10.4142 6.25 10.75 6.58579 10.75 7V10.75C10.75 11.1642 10.4142 11.5 10 11.5C9.58579 11.5 9.25 11.1642 9.25 10.75V7C9.25 6.58579 9.58579 6.25 10 6.25ZM10 14.5C10.4142 14.5 10.75 14.1642 10.75 13.75C10.75 13.3358 10.4142 13 10 13C9.58579 13 9.25 13.3358 9.25 13.75C9.25 14.1642 9.58579 14.5 10 14.5Z"
                    fill="#DB2777"
                  />
                </svg>
              </div>
              <span className="ml-2 text-warning" id={name}>
                {errorMessage}
              </span>
            </div>
          )}
          {!errorMessage && helperMessage && (
            <span className="w-full text-neutral" id={name}>
              {helperMessage}
            </span>
          )}
          <div className="w-full flex justify-end">
            {extraMessage && flag && (
              <span
                className="cursor-pointer text-onSecondary underline"
                onClick={handleClickOnExtraMessage}
              >
                {extraMessage}
              </span>
            )}
            {extraMessage && !flag && (
              <span className="text-onSecondary opacity-40 underline">{extraMessage}</span>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default TextInput;
