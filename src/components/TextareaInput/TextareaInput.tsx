import React from 'react';
import Button from '../Button';

const ICON_GIF = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_2064_9830)">
      <path d="M13.667 8H11.667V16H13.667V8Z" fill="#9CA3AF" />
      <path
        d="M8.33333 8H4.33333C3.53333 8 3 8.66667 3 9.33333V14.6667C3 15.3333 3.53333 16 4.33333 16H8.33333C9.13333 16 9.66667 15.3333 9.66667 14.6667V12H7.66667V14H5V10H9.66667V9.33333C9.66667 8.66667 9.13333 8 8.33333 8Z"
        fill="#9CA3AF"
      />
      <path
        d="M21.667 10V8H15.667V16H17.667V13.3333H20.3337V11.3333H17.667V10H21.667Z"
        fill="#9CA3AF"
      />
    </g>
    <defs>
      <clipPath id="clip0_2064_9830">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const ICON_PICTURE = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_2064_9827)">
      <path
        d="M21 19V5C21 3.9 20.1 3 19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19ZM8.5 13.5L11 16.51L14.5 12L19 18H5L8.5 13.5Z"
        fill="#9CA3AF"
      />
    </g>
    <defs>
      <clipPath id="clip0_2064_9827">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

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

  const TextareaFooter = (): React.ReactNode => {
    if (enableByteCount && enableSaveButton && enableImageUpload) {
      return (
        <div className="flex justify-between items-center mt-2">
          <div className={`flex gap-x-1`}>
            <button type="button" onClick={handleImageUpload}>
              <ICON_PICTURE />
            </button>
            <button type="button" onClick={handleGifUpload}>
              <ICON_GIF />
            </button>
          </div>
          <div className="flex items-center gap-x-2">
            <ByteCounter />
            <Button size={'small'} color={'tertiary'} handleClick={handleSaveButtonClick}>
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
          <Button size={'small'} color={'tertiary'} handleClick={handleSaveButtonClick}>
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
