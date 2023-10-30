import React from 'react';

export type BadgeColor = 'yellow' | 'pink' | 'indigo' | 'gray' | 'emerald' | 'white';
type BadgeProps = {
  text?: string;
  color: BadgeColor;
  type?: 'default' | 'increase';
  customClassName?: string;
};
declare const Badge: ({
  text,
  color,
  type,
  customClassName,
}: BadgeProps) => React.FC<BadgeProps> | null;
export default Badge;
