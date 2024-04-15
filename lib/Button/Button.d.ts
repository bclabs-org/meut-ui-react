import React from 'react';
type ButtonProps = {
    children: React.ReactNode;
    size: 'small' | 'large';
    full?: boolean;
    disabled?: boolean;
    color?: 'primary' | 'secondary' | 'tertiary';
    handleClick?: () => void;
    isProcessing?: boolean;
    [key: string]: any;
};
declare const Button: React.FC<ButtonProps>;
export default Button;
