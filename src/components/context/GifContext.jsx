import { createContext, useCallback, useMemo, useState } from "react";
import useFetch from "../hooks/useFetch";
export const GifContext = createContext(null);

export default function GifProvider(props) {
  const [favs, setFavs] = useState([]);
  const [search, setSearch] = useState(null);
  const [typedSearch, setTypedSearch] = useState("");
  const { data, error, loading } = useFetch(search);

  const favIds = useMemo(() => favs.map((fav) => fav.id), [favs]);

  const isFav = useCallback(
    (id) => {
      if (favIds.indexOf(id) !== -1) return true;
      return false;
    },
    [favIds]
  );

  const toggleFav = useCallback(
    (gif) => {
      let index = favs.indexOf(gif);
      if (index === -1) {
        setFavs((curr) => [...curr, gif]);
      } else {
        setFavs((curr) => [...curr.slice(0, index), ...curr.slice(index + 1)]);
      }
      console.log(favs);
    },
    [favs]
  );

    const clearFav = useCallback(() => {setFavs([])}, [])

  return (
    <GifContext.Provider
      value={{
        favs,
        toggleFav,
        search,
        setSearch,
        typedSearch,
        setTypedSearch,
        data,
        error,
        loading,
        isFav,
        clearFav
      }}
    >
      {props.children}
    </GifContext.Provider>
  );
}