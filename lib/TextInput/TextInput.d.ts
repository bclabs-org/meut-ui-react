import React from 'react';
type TextInputProps = {
    type?: string;
    name?: string;
    label?: string;
    placeholder?: string;
    helperMessage?: string;
    onChange?: {
        (e: React.ChangeEvent<any>): void;
        <T = string | React.ChangeEvent<any>>(field: T): T extends React.ChangeEvent<any> ? void : ((e: (string | React.ChangeEvent<any>)) => void);
    };
    onBlur?: {
        (e: React.FocusEvent<any, Element>): void;
        <T = any>(fieldOrEvent: T): T extends string ? ((e: any) => void) : void;
    };
    value?: string;
};
declare const TextInput: ({ type, name, label, placeholder, helperMessage, onChange, onBlur, value }: TextInputProps) => JSX.Element;
export default TextInput;
