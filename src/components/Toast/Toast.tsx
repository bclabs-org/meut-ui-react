import React, { useEffect } from 'react';
import { Portal } from '@headlessui/react';
import classNames from 'classnames';
import Alert from '../Alert';
import { ToastAction, ToastState } from './types';

type ToastProps = {
  toastState: ToastState;
  toastDispatch: React.Dispatch<ToastAction>;
};

const Toast = ({ toastState, toastDispatch }: ToastProps) => {
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
      }, 2000);
    }
  }, [isMounted]);

  const cb1 = 'ease-[cubic-bezier(0.18,0.89,0.32,1.28)]';
  const cb2 = 'ease-[cubic-bezier(0.44, -0.15, 0.57, 1.43)]';
  const cb3 = 'ease-[cubic-bezier(0.34,1.56,0.64,1)]';

  return (
    <Portal>
      <div
        className={classNames(
          'transition-all duration-300 fixed z-50 left-1/2 -translate-x-1/2',
          cb2,
          !isMounted ? 'opacity-0 top-14' : '',
          isMounted && !isCloseAnimationPlay ? 'opacity-100 top-24' : '',
          isMounted && isCloseAnimationPlay ? 'opacity-0 top-16' : ''
        )}
        onTransitionEnd={() => {
          if (isCloseAnimationPlay) {
            setIsCloseAnimationPlay(false);
            toastDispatch({ type: 'SET_TOAST_CLOSE' });
          }
        }}
      >
        <Alert
          className="mx-auto"
          text={toastState.message || ''}
          subText={toastState.subMessage}
          color={toastState.color as 'error'}
          setIsAlertOpen={() => setIsCloseAnimationPlay(true)}
          closeBtn
        />
      </div>
    </Portal>
  );
};
export default Toast;
