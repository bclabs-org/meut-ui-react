import React from 'react';

type TableProps = {
  children: React.ReactNode;
  className?: string;
};

const Table = ({ children, className = '' }: TableProps) => {
  return <table className={`min-w-full divide-y divide-gray-300 ${className}`}>{children}</table>;
};

const Head = ({ children, className = '' }: TableProps) => {
  return <thead className={`bg-gray-50 ${className}`}>{children}</thead>;
};

const Body = ({ children, className = '' }: TableProps) => {
  return <tbody className={`divide-y divide-gray-200 bg-white ${className}`}>{children}</tbody>;
};

const tr = ({ children, className = '' }: TableProps) => {
  return <tr className={className}>{children}</tr>;
};

const th = ({ children, className = '' }: TableProps) => {
  return <th className={`px-4 py-3 text-left text-sm font-semibold ${className}`}>{children}</th>;
};

const td = ({ children, className = '' }: TableProps) => {
  return (
    <td className={`whitespace-nowrap p-4 text-sm font-medium text-neutral ${className}`}>
      {children}
    </td>
  );
};

Table.Head = Head;
Table.Body = Body;
Table.tr = tr;
Table.th = th;
Table.td = td;

export default Table;
