import React from 'react';
type TextInputProps = {
    type?: string;
    name?: string;
    label?: string;
    placeholder?: string;
    helperMessage?: string;
    errorMessage?: string;
    maxLength?: number;
    handleChange?: {
        (e: React.ChangeEvent<HTMLInputElement>): void;
        <T = string | React.ChangeEvent<HTMLInputElement>>(field: T): T extends React.ChangeEvent<HTMLInputElement> ? void : ((e: (string | React.ChangeEvent<HTMLInputElement>)) => void);
    };
    handleBlur?: React.FocusEventHandler<HTMLInputElement>;
    handleFocus?: React.FocusEventHandler<HTMLInputElement>;
    value?: string;
};
declare const TextInput: React.FC<TextInputProps>;
export default TextInput;
