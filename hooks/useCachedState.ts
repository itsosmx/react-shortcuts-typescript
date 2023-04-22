import { useState, useRef, useEffect } from "react";

type CachedStateReturnType<T> = [T, T | null, React.Dispatch<React.SetStateAction<T>>];

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
