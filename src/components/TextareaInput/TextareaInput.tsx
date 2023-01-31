import React from 'react';
import Button from '../Button';

type TextareaInputProps = {
  label: string;
  name: string;
  value: string;
  maxByteSize: number;
  byteSize: number;
  placeholder?: string;
  disabled?: boolean;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  saveButton?: boolean;
  handleSaveButtonClick?: () => void;
  error?: boolean;
  [key: string]: any;
};

const TextareaInput = ({
  label,
  name,
  value,
  placeholder,
  onChange,
  disabled,
  error,
  maxByteSize,
  byteSize,
  saveButton,
  handleSaveButtonClick,
  ...rest
}: TextareaInputProps) => {
  const getTextareaInputClass = () => {
    const defaultClass =
      'block mt-1 w-full h-[105px] border border-gray-300 rounded-md text-base text-gray-900 font-medium';

    if (disabled) {
      return `${defaultClass}`;
    }

    if (error) {
      return `${defaultClass} border-pink-600 ring-1 ring-pink-600 focus:ring-pink-600 focus:border-pink-600`;
    }

    return `${defaultClass} hover:ring-[3px] hover:ring-emerald-100 focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500`;
  };

  const renderTextareaFooter = () => {
    if (maxByteSize && saveButton) {
      return (
        <div className={`flex justify-between items-center mt-2`}>
          <p className="text-sm">
            {`${value?.length} Word(s) / ${byteSize} Byte(s) (Total ${maxByteSize} Bytes)`}
          </p>
          <Button size={'small'} color={'tertiary'} handleClick={handleSaveButtonClick}>
            Save
          </Button>
        </div>
      );
    }
    if (maxByteSize) {
      return (
        <p className="mt-1 text-sm m-0 p-0">
          {`${value?.length} Word(s) / ${byteSize} Byte(s) (Total ${maxByteSize} Bytes)`}
        </p>
      );
    }
  };

  return (
    <div className={`w-[468px] ${disabled ? `opacity-40 grayscale` : ``}`}>
      <label htmlFor={name} className="block text-sm font-medium">
        {label}
      </label>
      <textarea
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        className={getTextareaInputClass()}
        disabled={disabled}
        {...rest}
      />
      {renderTextareaFooter()}
    </div>
  );
};

export default TextareaInput;
