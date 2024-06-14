import { useCallback, useEffect, useRef } from 'react';

export function useTimeout(callback: () => void, delay: number) {

  const callbackRef = useRef<Function>(callback);

  const timerRef = useRef<number>();
  
  callbackRef.current = callback;

  const clear = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
  }, [])

  useEffect(() => {
    timerRef.current = setTimeout(callbackRef.current, delay)

    return clear
  }, [delay])

  return clear
}