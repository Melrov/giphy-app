import React, { useContext } from "react";
import Masonry from "react-masonry-css";
import styled from "styled-components";
import { GifContext } from "../context/GifContext";
import GifDisplay from "./GifDisplay";

const GifImg = styled.img`
  width: 100%;
  border-radius: 7px;
`;
const PageCon = styled.div`
  margin: 10px;
  margin-left: 30px;
`;

function Favorites() {
  const { favs, toggleFav } = useContext(GifContext)

  let items = favs.map((gif) => {
    return (
      <GifDisplay
        key={gif.id}
        gif={gif}
        isFav={true}
        toggleFav={toggleFav}
      />
    );
  });
  return (
    <PageCon>
      <Masonry
        breakpointCols={{ default: 4, 800: 2 }}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {items}
      </Masonry>
    </PageCon>
  );
}

export default Favorites;
