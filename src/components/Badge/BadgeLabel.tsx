import React from 'react';

interface BadgeLabelProps {
  text: string;
  status: 'attention' | 'disabled' | 'warning' | 'information';
  className: string;
}

const BadgeLabel = ({ text, status, className }: BadgeLabelProps) => {
  let bgColor;
  let txtColor;

  switch (status) {
    case 'attention':
      bgColor = '#FEF3C7'; // 'bg-yellow-100'
      txtColor = '#92400E'; // 'text-yellow-800';
      break;
    case 'disabled':
      bgColor = '#F3F4F6'; // 'bg-gray-100';
      txtColor = '#1F2937'; // 'text-gray-800';
      break;
    case 'warning':
      bgColor = '#FEE2E2'; // 'bg-red-100';
      txtColor = '#991B1B'; // 'text-red-800';
      break;
    case 'information':
      bgColor = '#DBEAFE'; // 'bg-blue-100';
      txtColor = '#1E40AF'; // 'text-blue-800';
      break;
    default:
      bgColor = '#FEF3C7'; // 'bg-yellow-100'
      txtColor = '#92400E'; // 'text-yellow-800';
  }

  return (
    <svg
      width="146"
      height="144"
      viewBox="0 0 146 144"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_3050_42676)">
        <rect
          x="29.2842"
          y="-29"
          width="206"
          height="40"
          transform="rotate(45 29.2842 -29)"
          fill={bgColor}
        />
        <text
          x="92%"
          y="-6%"
          transform="rotate(45 29.2842 -29)"
          dominantBaseline="middle"
          textAnchor="middle"
          fill={txtColor}
          fontWeight="500"
        >
          {text}
        </text>
      </g>
      <defs>
        <clipPath id="clip0_3050_42676">
          <rect width="146" height="144" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default BadgeLabel;
