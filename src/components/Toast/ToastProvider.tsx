import React, { useCallback, useMemo, useSyncExternalStore } from 'react';

import { Portal } from '@headlessui/react';
import Toast from './Toast';

import { toastStore } from './ToastStore';

const ToastProvider = () => {
  const [toastHeights, setToastHeights] = React.useState({});
  const toasts = useSyncExternalStore(
    toastStore.subscribe,
    toastStore.getSnapshot,
    toastStore.getServerSnapshot
  );

  const handleHeightReady = (index: number, height: number) => {
    setToastHeights((prevHeights) => ({ ...prevHeights, [index]: height }));
  };

  const getTopPos = (index: number) => {
    const cumulativeHeight = Object.keys(toastHeights)
      .slice(0, index)
      .reduce((acc, curr) => acc + toastHeights[curr], 0);
    const topOffSet = 24 * 4;
    const gaps = index * 12;

    return cumulativeHeight + gaps + topOffSet;
  };

  return (
    toasts.length > 0 && (
      <Portal as={'div'}>
        {toasts.map((toast, index) => (
          <Toast
            key={toast.message}
            toastState={toast}
            index={index}
            onHeightReady={handleHeightReady}
            top={getTopPos(index)}
          />
        ))}
      </Portal>
    )
  );
};

export default ToastProvider;
