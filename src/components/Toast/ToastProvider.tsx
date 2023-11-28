import React, { useReducer } from 'react';

import Toast from './Toast';
import ToastDispatchContext from './ToastDispatchContext';

import ToastReducer from './ToastReducer';
import initialState from './values';

type ToastProviderProps = {
  children?: React.ReactNode;
};

const ToastProvider = ({ children }: ToastProviderProps) => {
  const [state, dispatch] = useReducer(ToastReducer, initialState);

  return (
    <ToastDispatchContext.Provider value={{ dispatch }}>
      {state.isAlertOpen && <Toast toastState={state} toastDispatch={dispatch} />}
      {children}
    </ToastDispatchContext.Provider>
  );
};

export default ToastProvider;
