import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Modal from '../components/Modal/index';

export default {
  title: 'Components/Modal',
  component: Modal,
  argTypes: {
    isModalOpen: { control: { type: 'boolean' } },
    setIsModalOpen: { action: 'setIsModalOpen' },
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: '모달입니다',
  isModalOpen: true,
};
