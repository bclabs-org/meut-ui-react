import React from 'react';
type ButtonProps = {
    children: React.ReactNode;
    size: string;
    full?: boolean;
    disabled?: boolean;
    color?: string;
    handleClick?: () => void;
    [key: string]: any;
};
declare const Button: React.FC<ButtonProps>;
export default Button;
