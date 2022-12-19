import React from 'react';
type ButtonProps = {
    children: React.ReactNode;
    color: string;
    size: string;
    disabled?: boolean;
    [key: string]: any;
};
declare const Button: React.FC<ButtonProps>;
export default Button;
