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
    (e: React.ChangeEvent<HTMLInputElement>): void,
    <T = string | React.ChangeEvent<HTMLInputElement>>(field: T):
      T extends React.ChangeEvent<HTMLInputElement> ? void :
        ((e: (string | React.ChangeEvent<HTMLInputElement>)) => void)
  };
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  value?: string;
  verificationTime?: number;
  handleSendVerificationEmail: () => void;
  isResendCode: boolean;
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
  isResendCode,
  handleSendVerificationEmail,
  ...rest
}: TextInputProps) => (
  <div className={'font-montserrat'}>
    <div className="flex justify-between">
      <label htmlFor={name}>
        {label}
      </label>
      <span>{verificationTime}</span>
    </div>
    <div className="my-1">
      <input
        type={type}
        maxLength={maxLength}
        name={name}
        id={name}
        className={`w-full h-[50px] rounded-100 focus:ring-0 ${errorMessage ? 'border-2 border-danger focus:border-danger' : 'border border-gray-300 hover:text-input-border-hover focus:text-input-border-focus'}`}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        value={value}
        autoComplete="off"
        {...rest}
      />
    </div>
    {errorMessage || extraMessage ? (
      <div className="flex items-center">
        {errorMessage
          && <>
          <div>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd"
                    d="M0.333008 7C0.333008 10.682 3.31767 13.6667 6.99967 13.6667C10.6817 13.6667 13.6663 10.682 13.6663 7C13.6663 3.318 10.6817 0.333333 6.99967 0.333333C3.31767 0.333333 0.333008 3.318 0.333008 7ZM12.333 7C12.333 9.94552 9.94519 12.3333 6.99967 12.3333C4.05416 12.3333 1.66634 9.94552 1.66634 7C1.66634 4.05448 4.05416 1.66667 6.99967 1.66667C9.94519 1.66667 12.333 4.05448 12.333 7ZM7.66634 9V10.3333H6.33301V9H7.66634ZM7.66634 7.66667V3.66667H6.33301V7.66667H7.66634Z"
                    fill="#D63384"/>
            </svg>
          </div>
          <p className="text-sm ml-2 text-gray-500" id={name}>
            {errorMessage}.&nbsp;
          </p>
        </>}
          <p className="text-sm text-gray-500">
            {isResendCode ? <span className="cursor-pointer text-green-500" onClick={handleSendVerificationEmail}>{extraMessage}</span> : extraMessage}
          </p>
      </div>
    ) : (
      <p className="text-sm text-gray-500" id={name}>
        {helperMessage}
      </p>
    )}
  </div>
);

export default TextInput;
