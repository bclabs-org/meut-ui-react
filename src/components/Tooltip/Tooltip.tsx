import React from 'react';

type TooltipProps = {
  tooltipText: string;
  containerClassName?: string;
};

const Tooltip: React.FC<TooltipProps> = ({ tooltipText, containerClassName }: TooltipProps) => (
  <div className={`absolute -bottom-1 -left-7 will-change-[filter] drop-shadow-lg ${containerClassName || ''}`}>
    <div className="w-[343px] px-4 py-3 rounded-[8px] bg-gray-700 text-xs text-gray-200">
      {tooltipText}
    </div>
    <div
      className="relative bottom-[23px] left-6 bg-gray-700 w-6 h-9"
      style={{ clipPath: 'polygon(50% 50%, 100% 50%, 50% 100%, 0 50%)' }}
    />
  </div>
);

export default Tooltip;
