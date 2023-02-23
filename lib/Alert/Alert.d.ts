import React from 'react';
type AlertProps = {
    text: string;
    subText?: string;
    color?: 'error' | 'attention' | 'completion' | 'information';
    isAlertOpen: boolean;
    setIsAlertOpen: React.Dispatch<React.SetStateAction<boolean>>;
    closeBtn?: boolean;
    className?: string;
    isBackgroundShow?: boolean;
    textSmaller?: boolean;
    subTextSmaller?: boolean;
    timer?: string;
};
declare const Alert: React.FC<AlertProps>;
export default Alert;
