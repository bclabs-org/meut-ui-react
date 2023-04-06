import React from 'react';

type ChipProps = {
  label: string;
  selected: boolean;
  count?: number;
  handleClick?: () => void;
  className?: string;
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
};

const Chip: React.FC<ChipProps> = ({
  label,
  selected,
  count,
  handleClick,
  className,
  size = 'medium',
  disabled = false,
}) => {
  let chipSize;
  let countSize = 'px-3 py-0.5';
  switch (size) {
    case 'small':
      chipSize = 'px-4 py-1 h-7 text-xs';
      countSize = 'px-3';
      break;
    case 'medium':
      chipSize = 'px-4 py-2 h-10 text-sm';
      break;
    case 'large':
      chipSize = 'px-4 py-2 h-10';
      break;
    default:
      throw Error('invalid size value');
  }

  return (
    <button
      onClick={handleClick}
      className={`${disabled ? 'opacity-40 cursor-default' : 'cursor-pointer'} ${chipSize} ${
        selected
          ? 'bg-primary text-onPrimary'
          : `bg-tertiary text-onTertiary ${disabled ? '' : 'hover:bg-secondary'}`
      } ${className || ''} group inline-flex items-center rounded-full font-medium`}
    >
      <span>{label}</span>
      {!!count || count === 0 ? (
        <span
          className={`${countSize} ml-1 rounded-[10px] text-gray-600 text-xs font-medium ${
            selected ? 'bg-white' : 'bg-tertiary group-focus:bg-white'
          }`}
        >
          {count}
        </span>
      ) : null}
    </button>
  );
};
export default Chip;
