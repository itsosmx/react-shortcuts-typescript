import { useState, useRef, useEffect } from "react";

type CachedStateReturnType<T> = [T, T | null, React.Dispatch<React.SetStateAction<T>>];

/**
 * A hook that saves the previous state.
 * @param init Initial value of the state
 * @returns [state, cache, setState]
 */

export default function useCachedState<T>(init: T): CachedStateReturnType<T> {
  try {
    const [state, setState] = useState<T>(init);
    const cache = useRef<T>(init);

    useEffect(() => {
      cache.current = state;
    }, [state]);

    return [state, cache.current, setState];
  } catch (error: any) {
    throw new Error(error);
  }
}
