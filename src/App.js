import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import SearchPage from "./components/SearchPage";
import { useState, useEffect, useCallback } from "react";
import Menu from "./components/Menu";
import Favorites from "./components/Favorites";

function App() {
  const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(null);
  const [favs, setFavs] = useState([])

  const toggleFav = useCallback((gif) => {
    let index = favs.indexOf(gif)
    if(index === -1){
      setFavs((curr) => [...curr, gif])
    }
    else{
      setFavs((curr) => [...curr.slice(0, index), ...curr.slice(index+1)] )
    }
    console.log(favs)
  }, [favs]);

  useEffect(() => {
    if(user === null){
        setLoggedIn(false)
    }
    else{
      setLoggedIn(true)
    }
}, [user])

  console.log(favs)
  return (
    <div className="App">
      <Router>
      <Menu loggedIn={loggedIn}/>
        <Routes>
          <Route
            exact
            path="/"
            element={ loggedIn ? <SearchPage favs={favs} toggleFav={toggleFav} /> : <LoginPage setUser={setUser}/>}
          />
          <Route path="/login" protected={true} element={<LoginPage setUser={setUser} />} />
          <Route path="/search/:search" element={<SearchPage  favs={favs} toggleFav={toggleFav} />} />
          <Route path="/favorites" element={<Favorites favs={favs} toggleFav={toggleFav} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
