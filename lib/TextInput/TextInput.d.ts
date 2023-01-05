import React from 'react';
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
        (e: React.ChangeEvent<HTMLInputElement>): void;
        <T = string | React.ChangeEvent<HTMLInputElement>>(field: T): T extends React.ChangeEvent<HTMLInputElement> ? void : (e: string | React.ChangeEvent<HTMLInputElement>) => void;
    };
    onBlur?: React.FocusEventHandler<HTMLInputElement>;
    onFocus?: React.FocusEventHandler<HTMLInputElement>;
    value?: string;
    verificationTime?: string;
    handleClickOnExtraMessage: () => void;
    flag: boolean;
    [key: string]: any;
};
declare const TextInput: React.FC<TextInputProps>;
export default TextInput;
