import React, { useState } from 'react';

import { InformationCircleIcon } from '@heroicons/react/24/outline';

import Tooltip from '../Tooltip';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import TOOLTIP_ICON_SMALL from './icon_tooltip.png';

export interface TooltipIconProps {
  className?: string;
  tooltipClassName?: string;
  iconSize?: 'small' | 'medium';
  tooltipText?: string;
  disabled?: boolean;
  width?: number | 'auto';
}

const TooltipIcon = ({
  className,
  tooltipClassName = '',
  iconSize = 'medium',
  tooltipText,
  disabled = false,
  width = 'auto',
}: TooltipIconProps) => {
  const [position, setPosition] = useState<{ x: number; y: number } | null>(null);

  let icoSize;

  switch (iconSize) {
    case 'small':
      icoSize = 16;
      break;
    case 'medium':
      icoSize = 20;
      break;
    default:
      icoSize = 16;
  }

  const handleMouseOver = (e: React.MouseEvent<HTMLImageElement | SVGSVGElement>): void => {
    const rect = e.currentTarget.getBoundingClientRect();
    const scrollOffsetX = window.scrollX;
    const scrollOffsetY = window.scrollY;
    const offsetX = iconSize === 'medium' ? -26 : -28;
    setPosition({ x: rect.x + scrollOffsetX + offsetX, y: rect.y + scrollOffsetY });
  };

  const handleMouseOut = (): void => {
    setPosition(null);
  };

  return (
    <div className={className || ''}>
      <div className={`relative`}>
        {!disabled && position && (
          <div className={`absolute -top-16  ${iconSize === 'small' ? '-left-7' : '-left-[26px]'}`}>
            <Tooltip tooltipText={tooltipText || ''} containerClassName={tooltipClassName} />
          </div>
        )}
        {/* // TODO: Retina display 에서는 Image 컴포넌트를 사용하면 이미지가 흐려지는 문제가 있음. */}
        {iconSize === 'small' && (
          <img
            src={TOOLTIP_ICON_SMALL}
            alt={'tooltip'}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            width={icoSize}
            height={icoSize}
          />
        )}
        {iconSize !== 'small' && (
          <InformationCircleIcon
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            className="text-gray-400"
            width={icoSize}
            height={icoSize}
          />
        )}
      </div>
    </div>
  );
};

export default TooltipIcon;
