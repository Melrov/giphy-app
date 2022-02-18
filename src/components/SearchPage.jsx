//import Masonry from "masonry-layout";
import React, { useCallback, useContext, useEffect, useMemo, useState } from "react";
import Masonry from "react-masonry-css";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { GifContext } from "./context/GifContext";
import GifDisplay from "./GifDisplay";
import useFetch from "./hooks/useFetch";
import "./SearchPage.css";

const SearchBarCon = styled.div`
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 75vh;
  font-size: 33px !important;
}

`;

const PageCon = styled.div`
  margin-right: 10px;
  margin-left: 30px;
`;

const TextBox = styled.input`
  font-size: 33px;
  &:-webkit-autofill::first-line {
  font-size: 24px;
  backgroundColor: black;
}
  
`;

const SmallSearchBarCon = styled.div`
  margin: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function SearchPage(props) {
  console.log("searchPage");
  const {
    toggleFav,
    search,
    setSearch,
    typedSearch,
    setTypedSearch,
    data,
    loading,
    isFav,
  } = useContext(GifContext);

  const { urlSearch } = useParams();


  useEffect(() => {
    if (urlSearch) {
      setSearch(urlSearch);
    } else {
      setSearch("");
    }
  }, [urlSearch])


  //const [typedSearch, setTypedSearch] = useState("");
  let navigate = useNavigate();

  const submitSearch = useCallback(
    (e) => {
      //setSearch(typedSearch);
      navigate("/search/" + typedSearch);
      setTypedSearch("");
    },
    [typedSearch]
  );

  return (
    <PageCon>
      {!urlSearch && (
        <SearchBarCon>
          <label htmlFor="search">Search: </label>
          <TextBox
            type="text"
            name="search"
            value={typedSearch}
            placeholder="Search for a gif"
            onChange={(e) => setTypedSearch(e.target.value)}
          />
          <button htmlFor="search" onClick={submitSearch}>
            Submit
          </button>
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
            <button htmlFor="search" onClick={submitSearch}>
              Submit
            </button>
          </SmallSearchBarCon>
          <Masonry
            breakpointCols={{ default: 4, 800: 2 }}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {data &&
              data.map((gif) => {
                return (
                  <GifDisplay
                    key={gif.id}
                    gif={gif}
                    isFav={isFav(gif.id)}
                    toggleFav={toggleFav}
                  />
                );
              })}
          </Masonry>
        </>
      )}
    </PageCon>
  );
}

export default SearchPage;
