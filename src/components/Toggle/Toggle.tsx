import { Switch } from '@headlessui/react';
import React, { useState } from 'react';

type ToggleProps = {
  enabled: boolean;
  setEnabled: React.Dispatch<React.SetStateAction<boolean>>;
  text: string;
  disabled?: boolean;
};

const Toggle: React.FC<ToggleProps> = ({
  enabled,
  setEnabled,
  text,
  disabled = false,
}: ToggleProps) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <Switch
      checked={enabled}
      onChange={disabled ? undefined : setEnabled}
      className={`${disabled ? 'opacity-40 cursor-default' : 'cursor-pointer'} ${
        enabled ? 'bg-primary' : 'bg-gray-200'
      } relative inline-flex h-6 w-11 flex-shrink-0 rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none`}
      onMouseOver={disabled ? undefined : () => setIsHover(true)}
      onMouseLeave={disabled ? undefined : () => setIsHover(false)}
    >
      <span className="sr-only">{text}</span>
      <span
        aria-hidden="true"
        className={`${
          enabled ? 'translate-x-5' : 'translate-x-0'
        } pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-100 ease-in-out z-10`}
      />
      {isHover && !enabled && (
        <div className="bg-emerald-100 opacity-60 rounded-full w-7 h-7 absolute -left-1 -top-1 transition duration-300 ease-in-out" />
      )}
      {isHover && enabled && (
        <div className="bg-emerald-100 opacity-60 rounded-full w-7 h-7 absolute -right-1 -top-1 transition duration-300 ease-in-out" />
      )}
    </Switch>
  );
};

export default Toggle;
