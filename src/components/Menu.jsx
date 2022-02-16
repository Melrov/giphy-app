import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import "./Menu.css";

const Back = styled.div`
  background-color: black;
  height: 7vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const List = styled.ul`
    display: flex
`

const MenuCon = styled.div`
  display: flex;
  width: 70%;
  justify-content: space-between;
`;

const ListItem = styled.li`
  padding-right: 20px;
`;

const User = styled.div`
  color: white
`

function Menu({ loggedIn, user}) {
  return (
    <Back>
      <MenuCon>
        <List>
          <ListItem>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "link active" : "link")}
            >
              Home
            </NavLink>
          </ListItem>
          <ListItem>
            {loggedIn && (
              <NavLink
                to="/favorites"
                className={({ isActive }) =>
                  isActive ? "link active" : "link"
                }
              >
                Favorites
              </NavLink>
            )}
          </ListItem>
        </List>
        { loggedIn && <User>hello {user}</User> }
      </MenuCon>
    </Back>
  );
}

export default Menu;
