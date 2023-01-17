import React from 'react';
type AlertProps = {
    text: string;
    subText?: string;
    color?: 'error' | 'attention';
    isAlertOpen: boolean;
    setIsAlertOpen: React.Dispatch<React.SetStateAction<boolean>>;
    closeBtn?: boolean;
    className?: string;
};
declare const Alert: React.FC<AlertProps>;
export default Alert;
