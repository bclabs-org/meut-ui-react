import React, { useEffect } from 'react';
import { Portal } from '@headlessui/react';
import classNames from 'classnames';
import Alert from '../Alert';
import { ToastState } from './types';
import { toastStore } from './ToastStore';

type ToastProps = {
  toastState: ToastState;
  index: number;
};

const Toast = ({ toastState, index }: ToastProps) => {
  const [isMounted, setIsMounted] = React.useState(false);
  const [isCloseAnimationPlay, setIsCloseAnimationPlay] = React.useState(false);
  const timerRef = React.useRef<number | ReturnType<typeof setTimeout>>();

  useEffect(() => {
    setIsMounted(true);

    return () => {
      setIsMounted(false);
    };
  }, []);

  useEffect(() => {
    if (isMounted) {
      timerRef.current = setTimeout(() => {
        setIsCloseAnimationPlay(true);
      }, 20000);
    }
  }, [isMounted]);

  const cb1 = 'ease-[cubic-bezier(0.18,0.89,0.32,1.28)]';
  const cb2 = 'ease-[cubic-bezier(0.44, -0.15, 0.57, 1.43)]';
  const cb3 = 'ease-[cubic-bezier(0.34,1.56,0.64,1)]';
  const cb4 = 'ease-[cubic-bezier(.58,-0.01,.35,1.55)]';

  const toastRef = React.useRef<HTMLDivElement>(null);

  const getTopPos = (_index: number) => {
    const elementHeight = toastRef.current?.getBoundingClientRect().height || 0;
    const previousElementHeight =
      toastRef.current?.previousElementSibling?.clientHeight || elementHeight;

    if (!isMounted) {
      return 14 * 4 + previousElementHeight * _index;
    }

    if (isMounted && !isCloseAnimationPlay) {
      const gapBetweenToast = index * 12;
      return 24 * 4 + previousElementHeight * _index + gapBetweenToast;
    }

    if (isMounted && isCloseAnimationPlay) {
      return 14 * 4 + previousElementHeight * _index;
    }

    return 0;
  };

  return (
    <div
      className={classNames(
        'fixed transition-all duration-300 z-50 left-1/2 -translate-x-1/2',
        cb1,
        !isMounted ? `opacity-0` : '',
        isMounted && !isCloseAnimationPlay ? `opacity-100` : '',
        isMounted && isCloseAnimationPlay ? `opacity-0` : ''
      )}
      style={{ top: `${getTopPos(index)}px` }}
      onTransitionEnd={() => {
        if (isCloseAnimationPlay) {
          setIsCloseAnimationPlay(false);
          toastStore.removeToast(toastState.message || '');
        }
      }}
      ref={toastRef}
    >
      <Alert
        className="mx-auto"
        text={toastState.message || ''}
        subText={toastState.subMessage}
        color={toastState.type as 'error'}
        setIsAlertOpen={() => setIsCloseAnimationPlay(true)}
        closeBtn
      />
    </div>
  );
};
export default Toast;
