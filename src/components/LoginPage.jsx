import React, { useCallback, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GifContext } from "./context/GifContext";
import { UserContext } from "./context/UserContext";
import useFetch from "./hooks/useFetch";

function LoginPage(props) {
  const {
    userName,
    setUserName,
    password,
    setPassword,
    login,
    uError,
    pError,
  } = useContext(UserContext);

  return (
    <div>
      <label htmlFor="username">Username</label>
      <input
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        type="text"
        name="username"
        placeholder="Username"
      />
      <label htmlFor="password">Password</label>
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        name="password"
        placeholder="Password"
      />
      <button type="submit" onClick={login}>
        Login
      </button>
    </div>
  );
}

export default LoginPage;
