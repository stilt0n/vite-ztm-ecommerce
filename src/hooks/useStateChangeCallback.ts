import { useEffect, useRef } from 'react';

export const useStateChangeCallback = <T>(
  watchState: T,
  callback: () => void
) => {
  const firstRender = useRef(true);
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    callback();
  }, [watchState, callback]);
};
