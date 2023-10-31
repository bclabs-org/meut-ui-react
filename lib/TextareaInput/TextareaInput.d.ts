import React from 'react';

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
declare const TextareaInput: ({
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
}: TextareaInputProps) => React.FC<TextareaInputProps>;
export default TextareaInput;
