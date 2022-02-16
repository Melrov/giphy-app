//import Masonry from "masonry-layout";
import React, { useCallback, useMemo, useState } from "react";
import Masonry from "react-masonry-css";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import GifDisplay from "./GifDisplay";
import useFetch from "./hooks/useFetch";
import "./SearchPage.css";

const SearchBarCon = styled.div`
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 75vh;
  font-size: 33px;
`;

const TextBox = styled.input`
  font-size: 33px;
`;

const SmallSearchBarCon = styled.div`
  margin: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function SearchPage(props) {
  console.log("searchPage");
  const { favs, toggleFav } = props;
  const { search } = useParams();
  //console.log(search);
  const { data, error, loading } = useFetch(search);
  const [typedSearch, setTypedSearch] = useState("");
  let navigate = useNavigate();

  const favIds = useMemo(() => favs.map((fav) => fav.id), [favs]);

  const submitSearch = useCallback(
    (e) => {
      navigate("/search/" + typedSearch);
    },
    [typedSearch]
  );

  const isFav = useCallback(
    (id) => {
      if (favIds.indexOf(id) !== -1) return true;
      return false;
    },
    [favIds]
  );

  let items = useMemo(() => {
    if (data) {
      return data.map((gif) => {
        return (
          <GifDisplay
            key={gif.id}
            gif={gif}
            isFav={isFav(gif.id)}
            toggleFav={toggleFav}
          />
        );
      });
    }
  }, [data, favIds]);

  return (
    <div>
      {search === undefined && (
        <SearchBarCon>
          <label htmlFor="search">Search: </label>
          <TextBox
            type="text"
            name="search"
            value={typedSearch}
            placeholder="Search for a gif"
            onChange={(e) => setTypedSearch(e.target.value)}
          />
          <button onClick={submitSearch}>Submit</button>
        </SearchBarCon>
      )}

      {search && !loading && data && (
        <>
          <SmallSearchBarCon>
            <label htmlFor="search">Search: </label>
            <TextBox
              type="text"
              name="search"
              value={typedSearch}
              placeholder="Search for a gif"
              onChange={(e) => setTypedSearch(e.target.value)}
            />
            <button onClick={submitSearch}>Submit</button>
          </SmallSearchBarCon>
          <Masonry
            breakpointCols={{ default: 4, 800: 2 }}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {items}
          </Masonry>
        </>
      )}
    </div>
  );
}

export default SearchPage;
