import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Card from '../components/Card/index';

export default {
  title: 'Components/Card',
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: <>
    <p>Lorem Ipsum</p>
    <p>is simply dummy text of the printing and typesetting industry.</p>
    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
    <p>when an unknown printer took a galley of type and scrambled</p>
    <p>it to make a type specimen book.</p>
    <p>It has survived not only five centuries,</p>
    <p>but also the leap into electronic typesetting,</p>
  </>,
};

export const Fill = Template.bind({});
Fill.args = {
  children: <>
    <div>
      <div className="flex items-center mt-[25px]">
        <div className="mr-[16px] ml-[25px]">
        </div>
        <div>
          <p className="font-bold text-[20px]">Next Trend of Cryptocurrency</p>
          <p className="text-[14px]">Crypto Trader</p>
        </div>
      </div>
      <div className="w-[90px] bg-rose-400 mt-[16px] mx-[15px]">
        코인
      </div>
      <div className="h-[60px] bg-emerald-100 mb-[16px] mx-[15px]">
        차트
      </div>
      <div className="grid grid-cols-3 text-right mx-[42px]">
        <span className="text-[#6CD28A] font-bold">+82</span>
        <span className="font-bold">10,235</span>
        <span className="text-[#D63384] font-bold">-20.00</span>
        <span className="text-[12px]">30D ROI</span>
        <span className="text-[12px]">Asset(USDT)</span>
        <span className="text-[12px]">MDD</span>
      </div>
    </div>
  </>
};
