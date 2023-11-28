import React, { createContext } from 'react';

import { ToastAction } from './types';

interface ToastContextProps {
  dispatch?: React.Dispatch<ToastAction>;
}

const ToastDispatchContext = createContext<ToastContextProps>({ dispatch: undefined });

export default ToastDispatchContext;
