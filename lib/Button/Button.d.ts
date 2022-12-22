import React from 'react';
type ButtonProps = {
    children: React.ReactNode;
    size: string;
    disabled?: boolean;
    color?: string;
    onClick?: () => void;
    [key: string]: any;
};
declare const Button: React.FC<ButtonProps>;
export default Button;
