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
  error,
  maxByteSize,
  byteSize,
  ...rest
}: TextareaInputProps) => {
  return (
    <div className="box-border">
      <label htmlFor={name} className="block text-sm font-medium" {...rest}>
        {label}
      </label>
      <textarea
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        className={`block mt-1 w-[468px] h-[105px] border border-gray-300 rounded-md text-base text-gray-900 font-medium ${
          error
            ? `border-pink-600 ring-1 ring-pink-600 focus:ring-pink-600 focus:border-pink-600`
            : `hover:ring-[3px] hover:ring-emerald-100 focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500`
        } `}
        {...rest}
      />
      {maxByteSize ? (
        <p className="mt-1 text-sm m-0 p-0" {...rest}>
          {`${value?.length} Word(s) / ${byteSize} Byte(s) (Total ${maxByteSize} Bytes)`}
        </p>
      ) : null}
    </div>
  );
};

export default TextareaInput;
