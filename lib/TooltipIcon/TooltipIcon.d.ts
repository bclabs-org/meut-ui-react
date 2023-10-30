import React from 'react';

export interface TooltipIconProps {
  className?: string;
  tooltipClassName?: string;
  iconSize?: 'small' | 'medium';
  tooltipText?: string;
  disabled?: boolean;
  width?: number | 'auto';
}
declare const TooltipIcon: ({
  className,
  tooltipClassName,
  iconSize,
  tooltipText,
  disabled,
  width,
}: TooltipIconProps) => React.FC<TooltipIconProps>;
export default TooltipIcon;
