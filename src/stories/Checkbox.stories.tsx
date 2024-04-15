import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Checkbox from '../components/Checkbox/Checkbox';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => {
  const [isChecked, setIsChecked] = React.useState(args.checked);
  const [isChecked2, setIsChecked2] = React.useState(args.checked);

  const handleClick = (): void => {
    setIsChecked(!isChecked);
  };

  const handleClick2 = (): void => {
    setIsChecked2(!isChecked2);
  };

  return (
    <div className="flex flex-col gap-y-4">
      <Checkbox {...args} checked={isChecked} onChange={handleClick} label={`${args.label} 1`} />
      <Checkbox {...args} checked={isChecked2} onChange={handleClick2} label={`${args.label} 2`} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  label: 'checkbox label',
  checked: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'checkbox label',
  disabled: true,
};

export const NotClickable = Template.bind({});
NotClickable.args = {
  label: 'click 안되는 checkbox',
  isDisabled: true,
  isComplete: true,
};

export const Indeterminate = Template.bind({});
Indeterminate.args = {
  label: 'indeterminate checkbox',
  indeterminate: true,
};
