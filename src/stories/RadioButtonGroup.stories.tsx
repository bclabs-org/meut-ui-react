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
  const handleChange = (value: string) => {
    setSelected(value);
  };

  return (
    <>
      <p className="font-medium text-gray-500">Current Select Id: {selected}</p>
      <RadioButtonGroup
        onChange={handleChange}
        defaultCheckedId={selected}
        legend="numbers"
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
