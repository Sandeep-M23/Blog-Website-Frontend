import { useState, useCallback, useRef, useEffect } from "react";

export const useHttpClient = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const activeHttpRequest = useRef([]);

  const sendRequest = useCallback(
    async (url, method = "GET", body = null, headers = {}) => {
      setLoading(true);
      const httpAbortController = new AbortController();
      activeHttpRequest.current.push(httpAbortController);
      try {
        const response = await fetch(url, {
          method,
          body,
          headers,
          signal: httpAbortController.signal,
        });
        const responseData = response.json();

        activeHttpRequest.current = activeHttpRequest.current.filter(
          (reqCtrl) => reqCtrl !== httpAbortController
        );
        if (!response.ok) {
          throw new Error(responseData.message);
        }
        setLoading(false);
        return responseData;
      } catch (err) {
        console.log(err)
        setError(err.message);
        setLoading(false);
        throw err;
      }
    },
    []
  );

  const clearError = () => {
    setError(null);
  };

  useEffect(() => {
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      activeHttpRequest.current.forEach((abortCtrl) => abortCtrl.abort());
    };
  }, []);

  return { loading, error, sendRequest, clearError };
};
