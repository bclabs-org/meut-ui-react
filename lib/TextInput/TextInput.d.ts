import React from 'react';
type TextInputProps = {
    type?: string;
    name?: string;
    label?: string;
    placeholder?: string;
    helperMessage?: string;
    errorMessage?: string;
    onChange?: {
        (e: React.ChangeEvent<any>): void;
        <T = string | React.ChangeEvent<any>>(field: T): T extends React.ChangeEvent<any> ? void : ((e: (string | React.ChangeEvent<any>)) => void);
    };
    value?: string;
};
declare const TextInput: ({ type, name, label, placeholder, helperMessage, errorMessage, onChange, value }: TextInputProps) => JSX.Element;
export default TextInput;
