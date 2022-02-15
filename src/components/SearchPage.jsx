import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import useFetch from "./hooks/useFetch";

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

function SearchPage() {
  const { search } = useParams();
  console.log(search)
  const { data, error, loading } = useFetch("cheeseburger");
  const [ typedSearch, setTypedSearch ] = useState("");
  let navigate = useNavigate();

  console.log(search);
  console.log(data, error, loading);

  function submitSearch(e) {
    navigate("/search/" + typedSearch);
  }

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
          onChange={e => setTypedSearch(e.target.value)}
        />
          <button onClick={submitSearch}>Submit</button>
        </SearchBarCon>
      )}
    </div>
  );
}

export default SearchPage;
