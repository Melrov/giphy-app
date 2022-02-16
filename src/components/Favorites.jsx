import React from "react";
import Masonry from "react-masonry-css";
import styled from "styled-components";
import GifDisplay from "./GifDisplay";


const GifImg = styled.img`
  width: 100%;
  border-radius: 7px;
`;


function Favorites(props) {
    const { favs, toggleFav } = props

    let items = favs.map(gif => {
        return <GifDisplay key={gif.id} gif={gif} GifImg={GifImg} favs={favs} toggleFav={toggleFav}/>;
    })
  return (
    <Masonry
      breakpointCols={{ default: 4, 800: 2 }}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {items}
    </Masonry>
  );
}

export default Favorites;
