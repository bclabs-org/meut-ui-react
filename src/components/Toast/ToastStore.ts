import { ToastColor, ToastState } from './types';

let toasts: ToastState[] = [];
let listeners: Function[] = [];

const toastStore = {
  addToast(message: string, type: ToastColor, subMessage: string, duration: number): void {
    const isMessageExists = toasts.some((t) => t.message === message);
    if (isMessageExists) {
      return;
    }
    toasts = [...toasts, { message, type, subMessage, duration }];
    listeners.forEach((listener) => listener(toasts));
  },
  subscribe(listener: Function): () => void {
    listeners = [...listeners, listener];
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  },
  getSnapshot(): ToastState[] {
    return toasts;
  },
  getServerSnapshot(): ToastState[] {
    return toasts;
  },
  removeToast(message: string): void {
    toasts = toasts.filter((t) => t.message !== message);
    listeners.forEach((listener) => listener(toasts));
  },
};

const toast = (message: string, type: ToastColor, subMessage = '', duration = 2000): void => {
  toastStore.addToast(message, type, subMessage, duration);
};

toast.error = (message: string, subMessage?: string, duration?: number): void =>
  toast(message, 'error', subMessage, duration);
toast.attention = (message: string, subMessage?: string, duration?: number): void =>
  toast(message, 'attention', subMessage, duration);
toast.completion = (message: string, subMessage?: string, duration?: number): void =>
  toast(message, 'completion', subMessage, duration);
toast.info = (message: string, subMessage?: string, duration?: number): void =>
  toast(message, 'information', subMessage, duration);

export { toastStore, toast };
