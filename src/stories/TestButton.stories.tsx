import React from 'react';
import { TestButton } from '../components/test/TestButton';

export default {
  component: TestButton,
  title: 'Test/TestButton',
};

const Template = (args) => <TestButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'assadasd',
};
