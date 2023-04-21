import React from 'react';

type Content = {
  title: string;
  description: string;
};

type TooltipProps = {
  content?: Content[];
  containerClassName?: string;
};

const TooltipWithSteps: React.FC<TooltipProps> = ({
  content,
  containerClassName,
}: TooltipProps) => (
  <div className={`absolute drop-shadow-lg ${containerClassName}`}>
    <div
      className="w-max rounded-[8px] bg-gray-700 text-xs text-gray-200"
    >
      {content &&
        content.length > 0 &&
        content.map(({ title, description }, index) => (
          <>
            <div key={`step_${title}`} className="py-4 px-6 flex gap-x-4 relative">
              {index !== content.length - 1 && (
                <div
                  className={`absolute top-4 left-[43.5px] mt-0.5 h-full w-0.5 bg-emerald-500`}
                  aria-hidden="true"
                />
              )}
              <div className="flex h-10 w-10 z-10 items-center justify-center rounded-full bg-emerald-500">
                <span className="text-gray-50 text-sm font-medium">0{index + 1}</span>
              </div>
              <div className="max-w-[301px]">
                <p className="text-xs font-semibold text-emerald-500">{title}</p>
                <p className="text-sm font-medium text-neutral">{description}</p>
              </div>
            </div>
          </>
        ))}
    </div>
    <div
      className="relative bottom-[23px] left-6 bg-gray-700 w-6 h-9"
      style={{ clipPath: 'polygon(50% 50%, 100% 50%, 50% 100%, 0 50%)' }}
    />
  </div>
);

export default TooltipWithSteps;
