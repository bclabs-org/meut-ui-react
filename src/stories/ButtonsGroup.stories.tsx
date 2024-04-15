import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import ButtonsGroup from '../components/ButtonsGroup/ButtonsGroup';

export default {
  title: 'Components/ButtonsGroup',
  component: ButtonsGroup,
} as ComponentMeta<typeof ButtonsGroup>;

const Template: ComponentStory<typeof ButtonsGroup> = (args, context) => {
  const [selected, setSelected] = React.useState('One');

  return (
    <ButtonsGroup onChange={(value) => setSelected(value)} selected={selected} width={args.width}>
      <ButtonsGroup.Item value={'One'} label={'Last 7 days'} />
      <ButtonsGroup.Item value={'Two'} label={'Last 30 days'} />
      <ButtonsGroup.Item value={'Three'} label={'Last 90 days'} />
      <ButtonsGroup.Item value={'Four'} label={'All'} />
    </ButtonsGroup>
  );
};

export const Default = Template.bind({});
Default.args = {
  selected: 'One',
  onChange: () => console.log('123'),
  width: undefined,
};

export const CustomWidth = Template.bind({});
CustomWidth.args = {
  selected: 'One',
  onChange: () => console.log('123'),
  width: 600,
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  selected: 'One',
  onChange: () => console.log('123'),
  width: 'full',
};
