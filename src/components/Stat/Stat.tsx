import React from 'react';
import { NumericFormat } from 'react-number-format';

import classNames from 'classnames';
import TooltipIcon from '../TooltipIcon';

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

const Stat = ({
  type = 'default',
  size,
  label,
  data,
  className,
  labelClassName,
  isDataFirst = false,
  ticker,
  suffix,
  prefix,
  tooltipText = '',
  tooltipDisabled = false,
}: StatProps) => {
  let textColor;
  switch (type) {
    case 'negative':
      textColor = 'text-warning';
      break;
    case 'positive':
      textColor = 'text-primary';
      break;
    case 'default':
      textColor = 'text-gray-900';
      break;
    default:
      throw Error('invalid type value');
  }

  let dataSize;
  switch (size) {
    case 'small':
      dataSize = 'text-xs';
      break;
    case 'medium':
      dataSize = 'text-sm';
      break;
    case 'large':
      dataSize = 'text-base';
      break;
    case 'x-large':
      dataSize = 'text-xl';
      break;
    case '2x-large':
      dataSize = 'text-2xl';
      break;
    default:
      throw Error('invalid type value');
  }

  const labelTextClass = 'font-medium text-xs leading-5';

  const getPrefixFromType = (dataType?: 'positive' | 'negative' | 'default'): string => {
    if (dataType === 'positive') {
      return '+';
    }
    if (dataType === 'negative') {
      return '-';
    }
    return '';
  };

  return (
    <div className={`${className} text-neutral`}>
      {!isDataFirst && label && (
        <p className={classNames(labelTextClass, labelClassName || 'mb-1')}>{label}</p>
      )}
      <p className={`font-semibold ${textColor} ${dataSize}`}>
        {Number.isNaN(Number(data)) ? (
          data
        ) : (
          <NumericFormat
            value={classNames(data)}
            displayType="text"
            suffix={suffix}
            prefix={getPrefixFromType(type) || prefix}
          />
        )}
      </p>
      {isDataFirst && label && (
        <div className={`pt-1 flex items-center ${labelClassName || ''}`}>
          <p className={labelTextClass}>{label}</p>
          {tooltipText && (
            <TooltipIcon
              iconSize="small"
              tooltipText={tooltipText}
              disabled={tooltipDisabled}
              className="ml-1"
              width={408}
            />
          )}
        </div>
      )}
      {ticker && <p className={labelTextClass}>{ticker}</p>}
    </div>
  );
};

export default Stat;
