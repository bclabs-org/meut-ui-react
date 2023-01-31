import React from 'react';

type TextareaInputProps = {
  label: string;
  name: string;
  value: string;
  maxByteSize: number;
  byteSize: number;
  placeholder?: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  error?: boolean;
  [key: string]: any;
};

const TextareaInput = ({
  label,
  name,
  value,
  placeholder,
  onChange,
  ...props
}: TextareaInputProps) => {
  return (
    <div className="box-border">
      <label htmlFor={name} className="block text-sm font-medium">
        {label}
      </label>
      <textarea
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        className="block mt-1 w-[468px] h-[105px] border border-gray-300 rounded-md text-base text-gray-900 font-medium
hover:ring-[3px] hover:ring-emerald-100 focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500"
      />
    </div>
  );
};

export default TextareaInput;
