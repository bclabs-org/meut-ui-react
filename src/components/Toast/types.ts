export type ToastColor = 'error' | 'attention' | 'completion' | 'information';

export type ToastState = {
  message: string;
  subMessage?: string;
  type: ToastColor;
  duration?: number;
  closeBtn?: boolean;
};
