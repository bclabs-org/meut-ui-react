import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Stat from '../components/Stat';

export default {
  title: 'Components/Stat',
  component: Stat,
} as ComponentMeta<typeof Stat>;

const Template: ComponentStory<typeof Stat> = (args) => (
  <div className={`ml-4 my-24`}>
    <Stat {...args} />
  </div>
);

export const Default = Template.bind({});

Default.args = {
  size: 'medium',
  label: 'Label',
  ticker: 'USDT',
  data: '100000',
  tooltipText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  type: 'positive',
  suffix: '%',
  prefix: '$',
};
