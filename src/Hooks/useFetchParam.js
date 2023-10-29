import { useEffect, useState } from "react";

const useFetchParam = (url, param) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (param) {
      fetch(`${url}${param.trim().toLowerCase()}`)
        .then((response) => response.json())
        .then((data) => {
          setData(data);
        })
        .catch((error) => {
          console.error("Error fetching Pokémon data:", error);
          setData(null);
        });
    }
  }, [url, param]);

  return data;
};

export default useFetchParam;
