export type ToastColor = 'error' | 'attention' | 'completion' | 'information';

export type ToastAction =
    | {
    type: 'SET_TOAST';
    message: string;
    subMessage: string;
    color: ToastColor;
}
    | { type: 'SET_TOAST_CLOSE' };

export type ToastState = {
    message: string;
    subMessage: string;
    color: ToastColor;
    isAlertOpen: boolean;
};