import React, { ChangeEvent } from 'react';

type TextInputProps = {
  type?: string;
  name?: string;
  label?: string;
  placeholder?: string;
  helperMessage?: string;
  errorMessage?: string;
  extraMessage?: string;
  maxLength?: number;
  onChange?: {
    (e: React.ChangeEvent<HTMLInputElement>): void;
    <T = string | React.ChangeEvent<HTMLInputElement>>(
      field: T
    ): T extends React.ChangeEvent<HTMLInputElement>
      ? void
      : (e: string | React.ChangeEvent<HTMLInputElement>) => void;
  };
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  value?: string;
  verificationTime?: string;
  handleClickOnExtraMessage: () => void;
  flag: boolean;
  [key: string]: any;
};

const TextInput: React.FC<TextInputProps> = ({
  type,
  name,
  label,
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
  handleClickOnExtraMessage,
  ...rest
}: TextInputProps) => (
  <div className="font-medium">
    <div className="flex justify-between text-onTertiary mb-1">
      <label htmlFor={name}>{label}</label>
      <span className={`${verificationTime === '0:00' && 'text-warning'}`}>{verificationTime}</span>
    </div>
    <div>
      <input
        type={type}
        maxLength={maxLength}
        name={name}
        id={name}
        className={`w-full h-12 p-3 rounded-100 focus:ring-0 placeholder:text-gray-300 ${
          errorMessage
            ? 'border-2 border-warning focus:border-warning'
            : 'border border-gray-300 hover:outline-[3px] hover:outline-secondary-hover focus:outline-0 focus:border-2 focus:border-primary'
        }`}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        value={value}
        autoComplete="off"
        {...rest}
      />
    </div>
    {(errorMessage || extraMessage || helperMessage) && (
      <div className="text-sm mt-1">
        {errorMessage && (
          <div className="flex">
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
        {extraMessage && flag && (
          <span className="cursor-pointer text-onSecondary" onClick={handleClickOnExtraMessage}>
            {extraMessage}
          </span>
        )}
        {extraMessage && !flag && (
          <span className="text-onSecondary opacity-40">{extraMessage}</span>
        )}
        {!errorMessage && helperMessage && (
          <span className="text-neutral" id={name}>
            {helperMessage}
          </span>
        )}
      </div>
    )}
  </div>
);

export default TextInput;
