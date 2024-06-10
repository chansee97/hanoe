import { useEffect } from 'react';

export const useLifecycles = (mount: Function, unmount?: Function) => {
  useEffect(() => {
    if (mount) {
      mount();
    }
    return () => {
      if (unmount) {
        unmount();
      }
    };
  }, []);
};
