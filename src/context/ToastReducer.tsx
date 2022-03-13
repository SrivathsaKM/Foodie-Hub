import { ActionMap } from '../types';

export type ToastType = {
  message: string;
  toastType: string;
};

export enum TOAST_ACTIONS {
  Show = 'SHOW_TOAST',
  Clear = 'CLEAR_TOAST',
  Hide = 'HIDe_TOAST',
}

type ToastPayload = {
  [TOAST_ACTIONS.Show]: ToastType;
  [TOAST_ACTIONS.Clear]: undefined;
  [TOAST_ACTIONS.Hide]: undefined;
};

export type ToastActions = ActionMap<ToastPayload>[keyof ActionMap<ToastPayload>];

export function toastListsReducer(state: Array<ToastType>, action: ToastActions | any) {
  switch (action.type) {
    case TOAST_ACTIONS.Show:
      if (action.payload.toastType === 'error') {
        if (state.filter((toast: { toastType: string }) => toast.toastType === 'error').length < 1) {
          return [...state, { ...action.payload }];
        } else {
          return state;
        }
      } else {
        return [...state, { ...action.payload }];
      }

    case TOAST_ACTIONS.Clear:
      return [];

    case TOAST_ACTIONS.Hide:
      if (state) {
        return [];
      } else {
        return state;
      }

    default:
      return state;
  }
}
