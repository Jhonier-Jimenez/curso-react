import { useEffect, useState } from "react";

export function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => {
        setLoading(true);
        if (!response.ok) {
          throw new Error("Request response not OK");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      })
      .catch((error) => {
        setError(error);
      });
  }, [url]);

  return { data, loading, error };
}
