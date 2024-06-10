import React, { useLayoutEffect, useState, useRef, cloneElement } from 'react';
import { useMutateObserver } from '../../hooks';
interface MutationObserverProps {
  options?: MutationObserverInit;
  onMutate?: (mutations: MutationRecord[], observer: MutationObserver) => void;
  children: React.ReactElement;
}

export interface Ref {}

export const MutateObserver: React.FC<MutationObserverProps> = (props) => {
  const {
    options,
    onMutate = () => { },
    children,
  } = props; 

  const elementRef = useRef<HTMLElement>(null);

  const [target, setTarget] = useState<HTMLElement>();

  useMutateObserver(target!, onMutate, options);

  useLayoutEffect(() => {
    setTarget(elementRef.current!);
  }, []);

  if (!children) {
    return null;
  }

  return cloneElement(children, { ref: elementRef });
}
