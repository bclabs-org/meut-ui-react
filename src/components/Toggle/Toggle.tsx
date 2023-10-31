import React from 'react';

import { Switch } from '@headlessui/react';

import classNames from 'classnames';

type ToggleProps = {
  enabled: boolean;
  setEnabled: React.Dispatch<React.SetStateAction<boolean>>;
  text?: string;
};

const Toggle: React.FC<ToggleProps> = ({ enabled, setEnabled, text }: ToggleProps) => (
  <Switch
    checked={enabled}
    onChange={setEnabled}
    className={classNames(
      enabled ? 'bg-primary' : 'bg-gray-200',
      'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none'
    )}
  >
    <span className="sr-only">{text}</span>
    <span
      aria-hidden="true"
      className={classNames(
        enabled ? 'translate-x-5' : 'translate-x-0',
        'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
      )}
    />
  </Switch>
);

export default Toggle;
