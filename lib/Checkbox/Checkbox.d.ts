import React from 'react';

type CheckboxProps = {
    label?: string;
    isDisabled?: boolean;
    isComplete?: boolean;
    disabled?: boolean;
    checked?: boolean;
    onChange?: () => void;
};
declare const Checkbox: React.FC<CheckboxProps>;
export default Checkbox;
