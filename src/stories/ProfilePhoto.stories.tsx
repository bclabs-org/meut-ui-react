import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ProfilePhoto from '../components/ProfilePhoto/index';

export default {
  title: 'Components/ProfilePhoto',
  component: ProfilePhoto,
  argTypes: {
    size: {
      options: ['large', 'medium', 'small'],
      control: { type: 'select' },
    },
    imageFile: { control: { type: 'text' } },
  },
} as ComponentMeta<typeof ProfilePhoto>;

const Template: ComponentStory<typeof ProfilePhoto> = (args) => <ProfilePhoto {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 'large',
  imageFile: 'https://www.w3schools.com/w3images/team2.jpg',
};
