import React from 'react';
type ChipProps = {
    label: string;
    selected: boolean;
    count?: number;
    handleClick?: () => void;
    className?: string;
};
declare const Chip: React.FC<ChipProps>;
export default Chip;
