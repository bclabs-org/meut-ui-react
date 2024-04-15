import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Dropdown } from '../components/Dropdown/Dropdown';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => {
  const [selected, setSelected] = React.useState<string>('BTC');

  const handleClick = (item: string) => {
    setSelected(item);
  };

  return <Dropdown {...args} selected={selected} onChange={handleClick} />;
};

export const Default = Template.bind({});
Default.args = {
  contents: [
    { label: 'Bitcoin', value: 'BTC' },
    { label: 'Ethereum', value: 'ETH' },
    { label: 'Tether', value: 'USDT' },
  ],
  label: 'Select a coin',
  selected: 'BTC',
};
