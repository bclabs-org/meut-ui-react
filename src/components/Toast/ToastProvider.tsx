import React, { useCallback, useSyncExternalStore } from 'react';

import { Portal } from '@headlessui/react';
import Toast from './Toast';

import { toastStore } from './ToastStore';

const ToastProvider: React.FC = () => {
  const [toastHeights, setToastHeights] = React.useState({});
  const toasts = useSyncExternalStore(
    toastStore.subscribe,
    toastStore.getSnapshot,
    toastStore.getServerSnapshot
  );

  const handleHeightReady = useCallback((index: number, height: number) => {
    setToastHeights((prevHeights) => ({ ...prevHeights, [index]: height }));
  }, []);

  const getTopPos = useCallback(
    (index: number) => {
      const cumulativeHeight = Object.keys(toastHeights)
        .slice(0, index)
        .reduce((acc, curr) => acc + toastHeights[curr], 0);
      const topOffSet = 24 * 4; // 화면 위쪽부터 아래로 96px
      const gaps = index * 12;

      return cumulativeHeight + gaps + topOffSet;
    },
    [toastHeights]
  );

  return toasts.length > 0 ? (
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
  ) : null;
};

export default ToastProvider;
