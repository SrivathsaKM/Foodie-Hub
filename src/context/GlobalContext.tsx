import { createContext, useReducer, Dispatch, FC } from 'react';
import { saveStore } from '../store/GlobalStore';
import { toastListsReducer, ToastActions, ToastType } from './ToastReducer';

interface TCommonState {
  loading: boolean;
  showNoState: boolean;
}

// export interface TProjectState extends TCommonState {
//   projectData: TProjectResponse[];
//   pagination?: TPagination;
// }

type InitialStateType = {
  toastLists: ToastType[];
};

const initialState = {
  toastLists: [],
  // clientLists: {
  //   clientData: [],
  //   loading: true,
  //   showNoState: false,
  // },
};

export const GlobalContext = createContext<{
  state: InitialStateType;
  dispatch: Dispatch<any>;
}>({ state: initialState, dispatch: () => null });

const mainReducer = ({ toastLists }: InitialStateType, action: ToastActions) => ({
  toastLists: toastListsReducer(toastLists, action),
});

const GlobalContextProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);
  const { Provider } = GlobalContext;
  saveStore({ state, dispatch });
  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};
export default GlobalContextProvider;
