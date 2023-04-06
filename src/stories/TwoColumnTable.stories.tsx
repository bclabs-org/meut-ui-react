import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import TwoColumnTable from '../components/TwoColumnTable/TwoColumnTable';

export default {
  title: 'Components/TwoColumnTable',
  component: TwoColumnTable,
} as ComponentMeta<typeof TwoColumnTable>;

const Template: ComponentStory<typeof TwoColumnTable> = (args) => <TwoColumnTable {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: (
    <TwoColumnTable.Body>
      <TwoColumnTable.tr>
        <TwoColumnTable.tdLeft>4</TwoColumnTable.tdLeft>
        <TwoColumnTable.tdRight>5</TwoColumnTable.tdRight>
      </TwoColumnTable.tr>
      <TwoColumnTable.tr>
        <TwoColumnTable.tdLeft className="px-4">7</TwoColumnTable.tdLeft>
        <TwoColumnTable.tdRight className="px-4">8</TwoColumnTable.tdRight>
      </TwoColumnTable.tr>
    </TwoColumnTable.Body>
  ),
};
