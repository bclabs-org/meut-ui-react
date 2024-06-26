import React, { useCallback, useEffect } from 'react';
import classNames from 'classnames';
import Alert from '../Alert';
import { ToastState } from './types';
import { toastStore } from './ToastStore';
import './toast.css';

type ToastProps = {
  toastState: ToastState;
  index: number;
  onHeightReady: (index: number, height: number) => void;
  top: number;
};

const Toast: React.FC<ToastProps> = ({ toastState, index, onHeightReady, top }: ToastProps) => {
  const [isMounted, setIsMounted] = React.useState(false);
  const [isCloseAnimationPlay, setIsCloseAnimationPlay] = React.useState(false);
  const timerRef = React.useRef<number | ReturnType<typeof setTimeout>>();
  const toastRef = React.useRef<HTMLDivElement>(null);

  const getTopPos = useCallback(() => {
    const offset = 14 * 4;

    if (!isMounted) {
      return top - offset;
    }

    if (isMounted && isCloseAnimationPlay) {
      return top - offset;
    }

    return top;
  }, [isMounted, isCloseAnimationPlay, top]);

  useEffect(() => {
    setIsMounted(true);

    return (): void => {
      setIsMounted(false);
    };
  }, []);

  useEffect(() => {
    if (isMounted) {
      timerRef.current = setTimeout(() => {
        setIsCloseAnimationPlay(true);
      }, toastState.duration);
    }
  }, [isMounted]);

  useEffect(() => {
    if (toastRef.current) {
      const { height } = toastRef.current.getBoundingClientRect();
      onHeightReady(index, height);
    }
  }, [index, onHeightReady]);

  return (
    <div
      className={classNames(
        'toast-transition',
        'fixed z-50 left-1/2 -translate-x-1/2',
        !isMounted ? `opacity-0` : '',
        isMounted && !isCloseAnimationPlay ? `opacity-100` : '',
        isMounted && isCloseAnimationPlay ? `opacity-0` : ''
      )}
      style={{ top: `${getTopPos()}px` }}
      onTransitionEnd={(): void => {
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
        setIsAlertOpen={(): void => setIsCloseAnimationPlay(true)}
        closeBtn={toastState.closeBtn}
      />
    </div>
  );
};
export default Toast;
