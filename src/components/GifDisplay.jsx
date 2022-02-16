import React, { useMemo } from "react";
import styled from "styled-components";
import "./Gif.css";

let FavBtn = styled.span`
  position: absolute;
  top: 3px;
  right: 3px;
  visibility: hidden;
  font-size: 33px;
  ${"" /* background: gray; */}
  ${"" /* border-radius: 15px; */}
  box-shadow: 0px 0px 19px 5px black;
  color: white;
`;

let GifCon = styled.div`
  position: relative;
  &:hover ${FavBtn} {
    visibility: visible;
  }
`;
const GifImg = styled.img`
  width: 100%;
  border-radius: 7px;
`;

function GifDisplay({ gif, isFav, toggleFav }) {
  //console.log('GifDisplay')

  return (
    <GifCon>
      <GifImg src={gif.url} />
      {/* <span style={{position: 'absolute', bottom: '0px', left: '0px', backgroundColor: 'gray'}} >{gif.title}</span> */}
      <FavBtn
        className={"fa fa-star star " + (isFav ? "checked" : "")}
        onClick={(e) => {
          toggleFav(gif);
        }}
      ></FavBtn>
    </GifCon>
  );
}

export default GifDisplay;

//loop through data to get
// id: gif.id
//title: gif.title
//url: gif.images.original.url
