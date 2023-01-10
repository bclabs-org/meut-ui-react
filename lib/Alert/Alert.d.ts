import React from 'react';
type AlertProps = {
    text: string;
    subText?: string;
    color?: 'error' | 'attention';
    setIsAlertOpen: React.Dispatch<React.SetStateAction<boolean>>;
    closeBtn?: boolean;
    animation?: 'fromTop';
    className?: string;
};
declare const Alert: React.FC<AlertProps>;
export default Alert;
