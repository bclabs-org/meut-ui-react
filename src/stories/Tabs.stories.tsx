import { ComponentStory, ComponentMeta } from '@storybook/react';

import Tabs from '../components/Tabs/Tabs';

export default {
  title: 'Components/Tabs',
  component: Tabs,
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

export const Default = Template.bind({});
Default.args = {
  color: 'primary',
  tabNames: ['탭 이름1', '탭 이름2', '탭 이름3', '탭 이름4'],
};
