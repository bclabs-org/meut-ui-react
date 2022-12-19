import React from 'react';
type ButtonProps = {
    children: React.ReactNode;
    size: string;
    disabled?: boolean;
    color?: string;
    [key: string]: any;
};
declare const Button: React.FC<ButtonProps>;
export default Button;
