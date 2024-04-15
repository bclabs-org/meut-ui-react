import React from 'react';
type ToggleProps = {
    enabled: boolean;
    setEnabled: React.Dispatch<React.SetStateAction<boolean>>;
    text: string;
    disabled?: boolean;
};
declare const Toggle: React.FC<ToggleProps>;
export default Toggle;
