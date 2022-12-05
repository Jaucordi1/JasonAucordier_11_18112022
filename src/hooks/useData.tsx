import React from "react";

type IData<T> = {
  loading: boolean;
  data?: T;
  error?: Error;
};
export type CustomData<T, K extends string> = Omit<IData<T>, "data"> & { [key in K]?: T };

export function useData<T>(url: string): IData<T> {
  const [state, setState] = React.useState<IData<T>>({loading: true});

  React.useEffect(() => {
    setState({loading: true});
    fetch(url)
        .then((response) => {
          if (response.ok) {
            return response.json() as T;
          } else {
            const error = new Error(response.statusText);
            error.name = response.status.toString(10);
            throw error;
          }
        })
        .then((data) => setState(state => ({...state, data})))
        .catch((error) => setState(state => ({...state, error})))
        .then(() => setState(state => ({...state, loading: false})));
  }, [url]);

  return state;
}
