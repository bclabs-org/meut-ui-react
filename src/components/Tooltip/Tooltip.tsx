import React from 'react';
import './style.css';

type Content = {
  title: string;
  description: string;
};

type TextInputProps = {
  content: Content[];
  children?: React.ReactNode;
};

const Tooltip: React.FC<TextInputProps> = ({ content, children }: TextInputProps) => {
  return (
    <div className="relative max-w-[405px] w-max bg-gray-50 rounded-lg shadow-md break-all">
      {/* 툴팁은 제일 최상위 div만 쓰이고 보여줄 내용은 children으로 받아서 아래 주석풀어서 쓰시면됩니다. 현재 아래에 작성된 내용은 퀀트카드에 쓰일 툴팁을 만들어 놓을 곳 이 없어서 여기에 만들어놨습니다. */}
      {/* {children} */}
      {content.map(({ title, description }, index) => (
        <div className="py-4 px-6 flex gap-x-4 relative">
          {index !== content.length - 1 && (
            <div
              className={`absolute top-4 left-[43.5px] mt-0.5 h-full w-0.5 bg-emerald-500`}
              aria-hidden="true"
            />
          )}
          <div className="flex h-10 w-10 z-10 items-center justify-center rounded-full bg-emerald-500">
            <span className="text-gray-50 text-sm font-medium">0{index + 1}</span>
          </div>
          <div className="max-w-[301px]">
            <p className="text-xs font-semibold text-emerald-500">{title}</p>
            <p className="text-sm font-medium text-neutral">{description}</p>
          </div>
        </div>
      ))}
      <div className="absolute -bottom-5 left-6 bg-gray-50 triangle" />
    </div>
  );
};

export default Tooltip;
