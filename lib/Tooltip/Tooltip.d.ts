import React from 'react';
import './style.css';
type Content = {
    title: string;
    description: string;
};
type TextInputProps = {
    content: Content[];
    children?: React.ReactNode;
};
declare const Tooltip: React.FC<TextInputProps>;
export default Tooltip;
