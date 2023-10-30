import React from 'react';

export interface TooltipIconProps {
  className?: string;
  tooltipClassName?: string;
  iconSize?: 'small' | 'medium';
  tooltipText?: string;
  disabled?: boolean;
}
declare const TooltipIcon: ({
  className,
  tooltipClassName,
  iconSize,
  tooltipText,
  disabled,
}: TooltipIconProps) => React.FC<TooltipIconProps>;
export default TooltipIcon;
