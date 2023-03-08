import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Tooltip from '../components/Tooltip/Tooltip';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = (args) => <Tooltip {...args} />;

export const Default = Template.bind({});
Default.args = {
  content: [
    {
      title: 'title1',
      description:
        'description1 description1 description1 description1 description1 description1 description1 description1',
    },
    {
      title: 'title2',
      description: 'description2 description2 description2',
    },
    {
      title: 'title3',
      description: 'description3 description3 hello coinvestor hihihi',
    },
    {
      title: 'title4',
      description:
        'description4 넷플릭스보면서 코딩중 예시 텍스트 안녕하세요 코인베스터 고고고고고고고고고 코인베스터 코인베스터 코인베스터 코인베스터 코인베스터',
    },
  ],
};
