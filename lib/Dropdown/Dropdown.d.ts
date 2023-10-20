import React from 'react';
export type DropdownProps = {
    content: string[];
    label: string;
    disabled?: boolean;
    placeholder: string;
    selected: string;
    onChange: Function;
    borderStyle?: string;
};
export declare const Dropdown: React.FC<DropdownProps>;
