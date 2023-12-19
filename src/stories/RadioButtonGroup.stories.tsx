import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import RadioButton from '../components/RadioButton/RadioButton';
import RadioButtonGroup from '../components/RadioButtonGroup/RadioButtonGroup';

export default {
  title: 'Components/RadioButtonGroup',
  component: RadioButtonGroup,
} as ComponentMeta<typeof RadioButtonGroup>;

const Template: ComponentStory<typeof RadioButtonGroup> = (args) => {
  const [selected, setSelected] = React.useState('1');
  const [selected2, setSelected2] = React.useState('1');
  const handleChange = (value: string): void => {
    setSelected(value);
  };

  const handleChange2 = (value: string): void => {
    setSelected2(value);
  };

  return (
    <>
      <p>RadioButtonGroup</p>
      <p className="mt-1 text-xs font-medium text-gray-500">Current Select Id: {selected}</p>
      <RadioButtonGroup
        {...args}
        onChange={handleChange}
        defaultCheckedId={selected}
        legend="numbers"
        className="mt-4"
      >
        <RadioButton id={'1'} label={'one'} />
        <RadioButton id={'2'} label={'two'} />
        <RadioButton id={'3'} label={'three'} />
      </RadioButtonGroup>
      <p className="mt-8">RadioButtonGroup 2</p>
      <p className="mt-1 text-xs font-medium text-gray-500">Current Select Id: {selected2}</p>
      <RadioButtonGroup
        {...args}
        onChange={handleChange2}
        defaultCheckedId={selected2}
        legend="numberstwo"
        className="mt-4"
      >
        <RadioButton id={'1'} label={'one'} />
        <RadioButton id={'2'} label={'two'} />
        <RadioButton id={'3'} label={'three'} />
      </RadioButtonGroup>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  legend: 'Notifications',
  defaultCheckedId: '1',
};
