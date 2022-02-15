import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import SearchPage from "./components/SearchPage";
import { useState, useEffect } from "react";
import Menu from "./components/Menu";

function App() {
  const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(null);

  useEffect(() => {
    if(user === null){
        setLoggedIn(false)
    }
    else{
      setLoggedIn(true)
    }
}, [user])

  return (
    <div className="App">
      <Router>
      <Menu loggedIn={loggedIn}/>
        <Routes>
          <Route
            exact
            path="/"
            element={ loggedIn ? <SearchPage /> : <LoginPage setUser={setUser}/>}
          />
          <Route path="/search/:search" element={<SearchPage />} />
          <Route path="/login" element={<LoginPage setUser={setUser} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
