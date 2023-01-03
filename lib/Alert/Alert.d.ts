import React from "react";
type AlertProps = {
    text: string;
    color?: string;
    setIsAlertOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
declare const Alert: React.FC<AlertProps>;
export default Alert;
