import { ReactElement } from 'react';

type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

/*  For Routing */
type TRoutesType = {
  path: string;
  element: ReactElement<any, any>;
  key: string;
};

/* For Error Validation */
type Errors = {
  [key: string]: string;
};

/* For Shimmer */
type TShimmer = {
  type: string;
};

/* Default String*/
type TString = {
  value: string;
};

/* Material UI AutoComplete */
type TAutoComplete = {
  label: string;
  value: string | number;
  inputValue: string;
};

export type { ActionMap, TRoutesType, Errors, TShimmer, TString, TAutoComplete };
