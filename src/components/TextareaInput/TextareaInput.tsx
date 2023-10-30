import React from 'react';
import { CameraIcon, GifIcon } from '@heroicons/react/24/solid';
import Button from '../Button';

type TextareaInputProps = {
  label?: string;
  name?: string;
  value?: string;
  enableByteCount?: boolean;
  maxByteSize?: number;
  byteSize?: number;
  placeholder?: string;
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  enableSaveButton?: boolean;
  handleSaveButtonClick?: () => void;
  error?: boolean;
  enableImageUpload?: boolean;
  handleImageUpload?: () => void;
  handleGifUpload?: () => void;
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
  enableByteCount,
  maxByteSize,
  byteSize,
  enableSaveButton,
  handleSaveButtonClick,
  enableImageUpload,
  handleImageUpload,
  handleGifUpload,
  ...rest
}: TextareaInputProps) => {
  const getTextareaInputClass = () => {
    const defaultClass =
      'block w-full h-[105px] border border-gray-300 rounded-md text-sm text-gray-900 font-medium py-2 px-3';

    if (disabled) {
      return `${defaultClass}`;
    }

    if (error) {
      return `${defaultClass} border-pink-600 ring-1 ring-pink-600 focus:ring-pink-600 focus:border-pink-600`;
    }

    return `${defaultClass} hover:ring-[3px] hover:ring-emerald-100 focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500`;
  };

  const ByteCounter = () => (
    <p className="text-sm">
      {`${value?.length} Word(s) / ${byteSize} Byte(s) (Total ${maxByteSize} Bytes)`}
    </p>
  );

  const TextareaFooter = () => {
    if (enableByteCount && enableSaveButton && enableImageUpload) {
      return (
        <div className="flex justify-between items-center mt-2">
          <div className={`flex gap-x-3`}>
            <button type="button" onClick={handleImageUpload} className="w-6 h-6">
              <CameraIcon className="text-gray-400" />
            </button>
            <button type="button" onClick={handleGifUpload} className="w-6 h-6">
              <GifIcon className="text-gray-400" />
            </button>
          </div>
          <div className="flex items-center gap-x-2">
            <ByteCounter />
            <Button size={'small'} color={'tertiary'} onClick={handleSaveButtonClick}>
              Save
            </Button>
          </div>
        </div>
      );
    }

    if (enableByteCount && enableSaveButton) {
      return (
        <div className="flex justify-between items-center mt-2">
          <ByteCounter />
          <Button size={'small'} color={'tertiary'} onClick={handleSaveButtonClick}>
            Save
          </Button>
        </div>
      );
    }

    if (enableByteCount) {
      return (
        <div className="mt-1">
          <ByteCounter />
        </div>
      );
    }

    return null;
  };

  return (
    <div className={`${disabled ? 'opacity-40 grayscale' : ''}`}>
      <label htmlFor={name} className="block text-sm font-medium text-neutral mb-1">
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
      <TextareaFooter />
    </div>
  );
};

export default TextareaInput;
