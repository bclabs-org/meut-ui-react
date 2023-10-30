import React from 'react';
type ButtonProps = {
    text: string;
    disabled?: boolean;
    color?: 'default' | 'emerald-500' | 'emerald-600' | 'emerald-700' | 'emerald-900' | 'pink-600' | 'pink-700' | 'pink-900' | 'blue-700' | 'blue-800' | 'blue-900' | 'gray-700' | 'gray-800' | 'gray-900';
    onClick?: () => void;
    underline?: boolean;
    size?: 'small' | 'large';
    icon?: 'right-arrow' | 'left-arrow' | 'top-right-square';
};
declare const TextButton: React.FC<ButtonProps>;
export default TextButton;
