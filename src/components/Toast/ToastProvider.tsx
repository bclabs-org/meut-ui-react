import React, { useSyncExternalStore } from 'react';

import { Portal } from '@headlessui/react';
import Toast from './Toast';

import { toastStore } from './ToastStore';

const ToastProvider = () => {
  const toasts = useSyncExternalStore(
    toastStore.subscribe,
    toastStore.getSnapshot,
    toastStore.getServerSnapshot
  );

  return (
    <Portal>
      {toasts.map((toast, index) => (
        <Toast key={toast.message} toastState={toast} index={index} />
      ))}
    </Portal>
  );
};

export default ToastProvider;
