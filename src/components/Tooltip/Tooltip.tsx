import React from 'react';
import classNames from "classnames";

type TooltipProps = {
  tooltipText: string;
  containerClassName?: string;
};

const Tooltip: React.FC<TooltipProps> = ({ tooltipText, containerClassName }: TooltipProps) => (
  <div className={`inline-block will-change-[filter] drop-shadow-lg ${containerClassName || ''}`}>
    <div
      className={
        classNames(
        'w-[343px] px-4 py-3 rounded-[8px] bg-gray-700 text-xs font-medium leading-5 text-gray-200',
            'after:w-0 after:h-0 after:absolute after:top-[100%] after:left-[26px]',
            'after:border-l-[10px] after:border-l-transparent',
            'after:border-r-[10px] after:border-r-transparent',
            'after:border-t-[13px] after:border-t-gray-700'
        )
      }
    >경
      {tooltipText}
    </div>
  </div>
);

export default Tooltip;
