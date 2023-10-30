import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TooltipIcon from '../components/TooltipIcon';

export default {
  title: 'Components/TooltipIcon',
  component: TooltipIcon,
} as ComponentMeta<typeof TooltipIcon>;

const Template: ComponentStory<typeof TooltipIcon> = (args) => (
  <div className={`ml-4 my-24`}>
    <TooltipIcon {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  tooltipText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
};
