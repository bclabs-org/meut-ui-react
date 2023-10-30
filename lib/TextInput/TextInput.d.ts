import React, { ChangeEvent } from 'react';
import { DropdownProps } from '../Dropdown/Dropdown';

type TextInputProps = {
    type?: string;
    name?: string;
    label?: string;
    disabled?: boolean;
    placeholder?: string;
    helperMessage?: string;
    errorMessage?: string;
    extraMessage?: string;
    maxLength?: number;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    onBlur?: React.FocusEventHandler<HTMLInputElement>;
    onFocus?: React.FocusEventHandler<HTMLInputElement>;
    value?: string;
    verificationTime?: string;
    handleClickOnExtraMessage?: () => void;
    flag?: boolean;
    miniButton?: string;
    handleMiniButtonClick?: () => void;
    [key: string]: any;
    currency?: string;
    dropdownProps?: DropdownProps;
};
declare const TextInput: React.FC<TextInputProps>;
export default TextInput;
