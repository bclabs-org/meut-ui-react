import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Table from '../components/Table/Table';

export default {
  title: 'Components/Table',
  component: Table,
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: (
    <>
      <Table.Head>
        <Table.tr>
          <Table.th>1</Table.th>
          <Table.th>2</Table.th>
          <Table.th>3</Table.th>
        </Table.tr>
      </Table.Head>
      <Table.Body>
        <Table.tr>
          <Table.td>4</Table.td>
          <Table.td>5</Table.td>
          <Table.td>6</Table.td>
        </Table.tr>
        <Table.tr>
          <Table.td>7</Table.td>
          <Table.td>8</Table.td>
          <Table.td>9</Table.td>
        </Table.tr>
      </Table.Body>
    </>
  ),
};
