import { useState, useCallback, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [fetchedData, setFetchedData] = useState({
    data: [],
    isLoading: true,
    error: null,
  });
  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get(url);
      const data = response.data;
      if (data) {
        setFetchedData({
          data: data.result ?? data,
          isLoading: false,
          error: null,
        });
      }
    } catch (e) {
      setFetchedData({
        data: [],
        isLoading: false,
        error: e,
      });
    }
  }, [url]);
  useEffect(() => {
    fetchData();
  }, [url]);
  const { data, isLoading, error } = fetchedData;
  return { data, isLoading, error };
};

export default useFetch;
