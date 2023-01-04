import React from 'react';
type AlertProps = {
    text: string;
    color?: string;
    setIsAlertOpen: React.Dispatch<React.SetStateAction<boolean>>;
    closeBtn?: boolean;
    animation?: string;
    [key: string]: any;
};
declare const Alert: React.FC<AlertProps>;
export default Alert;
