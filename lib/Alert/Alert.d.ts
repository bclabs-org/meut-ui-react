import React from 'react';

type AlertProps = {
    text: string;
    color?: string;
    shadow?: boolean;
    closeBtn?: boolean;
};
declare const Alert: React.FC<AlertProps>;
export default Alert;
