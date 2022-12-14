import { useEffect, useRef } from 'react';

/**
 * Get previous value
 */
const usePrevious = <T>(value: T): T => {
  const ref = useRef<T>();

  useEffect(() => {
    ref.current = value;
  });

  return ref.current as T;
};

export default usePrevious;
