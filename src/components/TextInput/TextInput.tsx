import React, { ChangeEvent } from 'react';

type TextInputProps = {
  type?: string;
  name?: string;
  label?: string;
  placeholder?: string;
  helperMessage?: string;
  errorMessage?: string;
  onChange?: {(e: React.ChangeEvent<any>): void, <T=string | React.ChangeEvent<any>>(field: T): T extends React.ChangeEvent<any> ? void : ((e: (string | React.ChangeEvent<any>)) => void)};
  value?: string;
};

const TextInput = ({ type, name, label, placeholder, helperMessage, errorMessage, onChange, value }: TextInputProps) => {

  return (
    <div>
      <label htmlFor={name}>
        {label}
      </label>
      <div className="my-1">
        <input
          type={type}
          name={name}
          id={name}
          className={`w-[432px] h-[50px] rounded-100 focus:ring-0 ${errorMessage ? 'border-2 border-danger focus:border-danger' : 'border border-gray-300 hover:text-input-border-hover focus:text-input-border-focus'}`}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        />
      </div>
      {errorMessage ? (
        <div className="flex items-center">
          <div className="pb-0.5">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M0.333008 7C0.333008 10.682 3.31767 13.6667 6.99967 13.6667C10.6817 13.6667 13.6663 10.682 13.6663 7C13.6663 3.318 10.6817 0.333333 6.99967 0.333333C3.31767 0.333333 0.333008 3.318 0.333008 7ZM12.333 7C12.333 9.94552 9.94519 12.3333 6.99967 12.3333C4.05416 12.3333 1.66634 9.94552 1.66634 7C1.66634 4.05448 4.05416 1.66667 6.99967 1.66667C9.94519 1.66667 12.333 4.05448 12.333 7ZM7.66634 9V10.3333H6.33301V9H7.66634ZM7.66634 7.66667V3.66667H6.33301V7.66667H7.66634Z" fill="#D63384"/>
            </svg>
          </div>
          <p className="text-sm ml-2 text-gray-500" id={name}>
            {errorMessage}
          </p>
        </div>
        ) : (
        <p className="text-sm text-gray-500" id={name}>
          {helperMessage}
        </p>
        )}
    </div>
  )
};

export default TextInput;