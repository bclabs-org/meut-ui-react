import React, {ChangeEvent} from 'react';

type TextInputProps = {
  type?: string;
  name?: string;
  label?: string;
  placeholder?: string;
  helperMessage?: string;
  onChange?: {(e: React.ChangeEvent<any>): void, <T=string | React.ChangeEvent<any>>(field: T): T extends React.ChangeEvent<any> ? void : ((e: (string | React.ChangeEvent<any>)) => void)};
  onBlur?: {(e: React.FocusEvent<any, Element>): void, <T=any>(fieldOrEvent: T): T extends string ? ((e: any) => void) : void};
  value?: string;
};

const TextInput = ({ type, name, label, placeholder, helperMessage, onChange, onBlur, value }: TextInputProps) => {

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
          className="w-[432px] h-[50px] border border-gray-300 rounded-100"
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
        />
      </div>
      <p className="text-sm" id={name}>
        {helperMessage}
      </p>
    </div>
  )
};

export default TextInput;