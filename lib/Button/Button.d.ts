import React from 'react';
type ButtonProps = {
    children: React.ReactNode;
    color: string;
    size: string;
};
declare const Button: ({ children, color, size }: ButtonProps) => JSX.Element;
export default Button;
