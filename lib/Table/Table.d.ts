import React from 'react';

type TableProps = {
  children: React.ReactNode;
  customClassName?: string;
  additionalClassName?: string;
  isBgGray?: boolean;
};
declare const Table: {
  ({ children, customClassName }: TableProps): JSX.Element;
  Head: ({ children, isBgGray, additionalClassName }: TableProps) => JSX.Element;
  Body: ({ children, additionalClassName }: TableProps) => JSX.Element;
  tr: ({ children, isBgGray, customClassName }: TableProps) => JSX.Element;
  th: ({ children, customClassName, additionalClassName }: TableProps) => JSX.Element;
  td: ({ children, isBgGray, customClassName, additionalClassName }: TableProps) => JSX.Element;
};
export default Table;
