import React from 'react';

type TwoColumnTableProps = {
  children: React.ReactNode;
  className?: string;
};

const TwoColumnTable = ({ children, className = '' }: TwoColumnTableProps) => {
  return <table className={`min-w-full ${className}`}>{children}</table>;
};

const Body = ({ children, className = '' }: TwoColumnTableProps) => {
  return <tbody className={className}>{children}</tbody>;
};

const tr = ({ children, className = '' }: TwoColumnTableProps) => {
  return <tr className={`border-b border-gray-200 ${className}`}>{children}</tr>;
};

const tdLeft = ({ children, className = '' }: TwoColumnTableProps) => {
  return <td className={`font-medium py-4 text-sm text-neutral ${className}`}>{children}</td>;
};

const tdRight = ({ children, className = '' }: TwoColumnTableProps) => {
  return <td className={`font-medium py-4 text-sm text-right ${className}`}>{children}</td>;
};

TwoColumnTable.Body = Body;
TwoColumnTable.tr = tr;
TwoColumnTable.tdLeft = tdLeft;
TwoColumnTable.tdRight = tdRight;

export default TwoColumnTable;
