import { ToastAction, ToastState } from './types';

const ToastReducer = (state: ToastState, action: ToastAction) => {
  switch (action.type) {
    case 'SET_TOAST':
      return {
        isAlertOpen: true,
        message: action.message,
        subMessage: action.subMessage,
        color: action.color,
      };
    case 'SET_TOAST_CLOSE':
      return {
        ...state,
        isAlertOpen: false,
      };
    default:
      return state;
  }
};

export default ToastReducer;
