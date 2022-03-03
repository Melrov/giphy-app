// In some sort of custom hook file such as 'useFetch' or 'useAPI'
import { useState, useEffect } from "react";

const baseUrl =
  "https://api.giphy.com/v1/gifs/search?api_key=J2IeKEZLChmvZ1ezyJS1GFfKLm5gmJBy&limit=25";

export default function useFetch(search) {
  console.log("useFetch");
  // This hook uses state management AND hooks
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [offset, setOffset] = useState(0);

  useEffect(async () => {
    setData(null);
    setError(null);
    setLoading(true);

    try {
      if (search.length < 2) {
        throw "not enough characters";
      }
      //console.log(baseUrl + search);
      console.log('api call')
      const response = await fetch(`${baseUrl}&offset=${offset}&q=${search}`);
      //console.log(response)
      const json = await response.json();
      //console.log(json)
      const gifs = json.data.map((gif) => ({
        id: gif.id,
        title: gif.title,
        url: gif.images.original.url,
        height: gif.images.original.height,
        width: gif.images.original.width,
      }));

      setData(gifs);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  }, [search]);

  // Exposes the data, any error, and whether or not it was loading
  return { data, error, loading };
}
