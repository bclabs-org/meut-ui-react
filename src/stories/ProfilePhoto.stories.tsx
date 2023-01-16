import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ProfilePhoto from '../components/ProfilePhoto/ProfilePhoto';

export default {
  title: 'Components/ProfilePhoto',
  component: ProfilePhoto,
  argTypes: {
    size: {
      options: ['x-small', 'small', 'medium', 'large', 'x-large'],
      control: { type: 'select' },
    },
    imageFile: { control: { type: 'text' } },
  },
} as ComponentMeta<typeof ProfilePhoto>;

const Template: ComponentStory<typeof ProfilePhoto> = (args) => <ProfilePhoto {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 'large',
  imageFile: 'https://avatars.githubusercontent.com/u/67389821?v=4',
};
