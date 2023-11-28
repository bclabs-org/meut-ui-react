import { ToastState } from './types';

const initialState: ToastState = {
  message: '',
  subMessage: '',
  color: 'error',
  isAlertOpen: false,
};

export default initialState;
