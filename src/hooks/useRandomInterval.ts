import {useEffect, useRef, useCallback} from 'react';

const random = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

const useRandomInterval = (callback: () => void, minDelay: number, maxDelay: number) => {
  const timeoutId = useRef<number | null>(null);
  const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const isEnabled = typeof minDelay === 'number' && typeof maxDelay === 'number';

    if (isEnabled) {
      const handleTick = () => {
        const nextTickAt = random(minDelay, maxDelay);

        timeoutId.current = window.setTimeout(() => {
          savedCallback.current();
          handleTick();
        }, nextTickAt);
      };

      handleTick();
    }

    return () => window.clearTimeout(timeoutId.current as number);
  }, [minDelay, maxDelay]);

  const cancel = useCallback(function () {
    window.clearTimeout(timeoutId.current as number);
  }, []);

  return cancel;
};

export {useRandomInterval};
