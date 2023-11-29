export type ToastColor = 'error' | 'attention' | 'completion' | 'information';

export type ToastState = {
  id: number;
  message: string;
  subMessage?: string;
  type: ToastColor;
};
