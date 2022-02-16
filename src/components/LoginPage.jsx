import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "./hooks/useFetch";

function LoginPage(props) {
  console.log('LoginPage')
  const { setUser } = props;
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  function isValid(text) {
    if (text.length < 4 || text.length > 20) {
      return false;
    }
    return true;
  }

  function submitButton(e) {
    if (isValid(userName) && isValid(password)) {
      setUser(userName);
      navigate("/");
    }
  }

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
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        name="password"
        placeholder="Password"
      />
      <button type="submit" onClick={submitButton}>
        Submit
      </button>
    </div>
  );
}

export default LoginPage;
