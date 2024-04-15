import React from 'react';
type DropdownProps = {
    content: string[];
    label: string;
    disabled?: boolean;
    placeholder: string;
    selected: string;
    setSelected: React.Dispatch<React.SetStateAction<string>>;
    handleChange?: () => any;
};
declare const Dropdown: React.FC<DropdownProps>;
export default Dropdown;
