import React from 'react';

type ChipProps = {
  label: string;
  selected: boolean;
  count?: number;
  handleClick?: () => void;
};

const Chip: React.FC<ChipProps> = ({ label, selected, count, handleClick }) => (
  <button
    onClick={handleClick}
    className={`group inline-flex items-center rounded-full px-4 py-2 cursor-pointer ${
      selected
        ? 'bg-primary text-onPrimary font-semibold'
        : 'bg-tertiary text-base font-medium text-onTertiary hover:bg-secondary focus:bg-primary focus:text-onPrimary focus:font-semibold'
    }`}
  >
    {label}
    {count ? (
      <span
        className={`px-3 py-1 ml-1 rounded-[10px] text-onTertiary text-xs font-medium ${
          selected ? 'bg-white' : 'bg-tertiary group-focus:bg-white'
        }`}
      >
        {count}
      </span>
    ) : null}
  </button>
);

export default Chip;
