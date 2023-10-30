import React from 'react';

type ButtonProps = {
    children: React.ReactNode;
    size: 'small' | 'medium' | 'large';
    full?: boolean;
    disabled?: boolean;
    color?: 'primary' | 'secondary' | 'tertiary' | 'primary-error' | 'secondary-error';
    onClick?: () => void;
    isProcessing?: boolean;
    [key: string]: any;
};
declare const Button: React.FC<ButtonProps>;
export default Button;
