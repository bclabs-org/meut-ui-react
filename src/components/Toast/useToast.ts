import { useContext } from 'react';

import ToastDispatchContext from './ToastDispatchContext';
import { ToastState } from './types';

const useToast = () => {
  const { dispatch } = useContext(ToastDispatchContext);

  const toast = (
    message: string,
    color = 'information' as ToastState['color'],
    subMessage = ''
  ) => {
    if (dispatch) {
      dispatch({
        type: 'SET_TOAST',
        message,
        subMessage,
        color,
      });
      return;
    }
    throw new Error('useToast must be used within a ToastProvider');
  };

  toast.error = (message: string, subMessage?: string) => toast(message, 'error', subMessage);
  toast.attention = (message: string, subMessage?: string) =>
    toast(message, 'attention', subMessage);
  toast.completion = (message: string, subMessage?: string) =>
    toast(message, 'completion', subMessage);
  toast.info = (message: string, subMessage?: string) => toast(message, 'information', subMessage);

  return toast;
};

export default useToast;
