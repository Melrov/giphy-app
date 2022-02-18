import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { GifContext } from "./context/GifContext";
import { UserContext } from "./context/UserContext";
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
  color: white;
  padding-right: 10px
`
const UserCon = styled.div`
  display: flex;
`

function Menu() {
  const { user, logout } = useContext(UserContext)
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
            {user && (
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
        { user && <UserCon>
          <User>hello {user}</User>
          <button onClick={logout}>Logout</button>
        </UserCon> }
      </MenuCon>
    </Back>
  );
}

export default Menu;
