import React from 'react';

type Content = {
    title: string;
    description: string;
};
type TooltipProps = {
    content?: Content[];
    containerClassName?: string;
};
declare const TooltipWithSteps: React.FC<TooltipProps>;
export default TooltipWithSteps;
