import { ToastColor, ToastState } from './types';

let nextId = 0;
let toasts: ToastState[] = [];
let listeners: Function[] = [];

const toastStore = {
  addToast(message: string, type: ToastColor, subMessage: string): void {
    const isMessageExists = toasts.some((t) => t.message === message);
    if (isMessageExists) {
      return;
    }
    toasts = [...toasts, { id: nextId, message, type, subMessage }];
    listeners.forEach((listener) => listener(toasts));
    nextId += 1;
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

const toast = (message: string, type: ToastColor, subMessage = '', delay = 2000): void => {
  toastStore.addToast(message, type, subMessage);
};

toast.error = (message: string, subMessage?: string): void => toast(message, 'error', subMessage);
toast.attention = (message: string, subMessage?: string): void =>
  toast(message, 'attention', subMessage);
toast.completion = (message: string, subMessage?: string): void =>
  toast(message, 'completion', subMessage);
toast.info = (message: string, subMessage?: string): void =>
  toast(message, 'information', subMessage);

export { toastStore, toast };
