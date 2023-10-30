import React from 'react';

type TableProps = {
  children: React.ReactNode;
  customClassName?: string;
  additionalClassName?: string;
  isBgGray?: boolean;
};
declare const Table: {
  ({ children, customClassName }: TableProps): React.FC<TableProps>;
  Head: ({ children, isBgGray, additionalClassName }: TableProps) => React.FC<TableProps>;
  Body: ({ children, additionalClassName }: TableProps) => React.FC<TableProps>;
  tr: ({ children, isBgGray, customClassName }: TableProps) => React.FC<TableProps>;
  th: ({ children, customClassName, additionalClassName }: TableProps) => React.FC<TableProps>;
  td: ({
    children,
    isBgGray,
    customClassName,
    additionalClassName,
  }: TableProps) => React.FC<TableProps>;
};
export default Table;
