import React from 'react';

type StatProps = {
  type?: 'default' | 'negative' | 'positive';
  size: 'small' | 'medium' | 'large' | 'x-large' | '2x-large';
  label?: string;
  data: string;
  className?: string;
  labelClassName?: string;
  isDataFirst?: boolean;
  ticker?: string;
  suffix?: string;
  tooltipText?: string;
  tooltipDisabled?: boolean;
  prefix?: string;
};
declare const Stat: ({
  type,
  size,
  label,
  data,
  className,
  labelClassName,
  isDataFirst,
  ticker,
  suffix,
  prefix,
  tooltipText,
  tooltipDisabled,
}: StatProps) => React.FC<StatProps>;
export default Stat;
