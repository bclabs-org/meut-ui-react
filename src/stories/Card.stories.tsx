import { ComponentStory, ComponentMeta } from '@storybook/react';

import Card from '../components/Card/Card';

export default {
  title: 'Components/Card',
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: (
    <>
      <p>Lorem Ipsum</p>
      <p>is simply dummy text of the printing and typesetting industry.</p>
      <p>Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,</p>
      <p>when an unknown printer took a galley of type and scrambled</p>
      <p>it to make a type specimen book.</p>
      <p>It has survived not only five centuries,</p>
      <p>but also the leap into electronic typesetting,</p>
    </>
  ),
};

export const Fill = Template.bind({});
Fill.args = {
  children: (
    <>
      <div>
        <p className="font-bold">Next Trend of Cryptocurrency</p>
        <p className="text-xs">Crypto Trader</p>
      </div>
      <div className="w-full bg-rose-400">코인</div>
      <div className="h-[75px] bg-emerald-100">차트</div>
      <div className="grid grid-cols-4 text-xs">
        <span className="text-warning">+82</span>
        <span className="font-bold">10,235</span>
        <span className="text-warning">-20.00</span>
        <span>30D ROI</span>
        <span>Asset(USDT)</span>
        <span>MDD</span>
        <span>-20.00</span>
        <span>MDD</span>
      </div>
    </>
  ),
};
