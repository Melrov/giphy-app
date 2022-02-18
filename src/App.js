import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import SearchPage from "./components/SearchPage";
import { useState, useEffect, useCallback, useContext } from "react";
import Menu from "./components/Menu";
import Favorites from "./components/Favorites";
import ProtectedRoutes from "./components/ProtectedRoutes";
import { GifContext } from "./components/context/GifContext";

function App() {
  return (
    <div className="App">
      <Router>
        <Menu  />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <ProtectedRoutes isPrivate={true}>
                <SearchPage />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/login"
            protected={true}
            element={
              <ProtectedRoutes isPrivate={false} >
                <LoginPage  />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/search/:urlSearch"
            element={
              <ProtectedRoutes isPrivate={true} >
                <SearchPage  />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/favorites"
            element={
              <ProtectedRoutes isPrivate={true} >
                <Favorites  />
              </ProtectedRoutes>
            }
          />
          <Route path="*" element={<Navigate to='/' />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
