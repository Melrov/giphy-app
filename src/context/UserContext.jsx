import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { GifContext } from "./GifContext";
export const UserContext = createContext(null);

export default function UserProvider(props) {
  const { clearFav } = useContext(GifContext);

  const [user, setUser] = useState(null);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [uError, setUError] = useState(null);
  const [pError, setPError] = useState(null);

  //let navigate = useNavigate();

  useEffect(
    (text) => {
      if (userName.length < 4 || userName.length > 20) {
        setUError("Must be between 4 and 20 characters");
      } else {
        setUError(null);
      }
      if (password.length < 4 || password.length > 20) {
        setPError("Must be between 4 and 20 characters");
      } else {
        setPError(null);
      }
    },
    [userName, password]
  );

  const login = useCallback(() => {
    if (!uError && !pError) {
      setUser(userName);
      setUserName("");
      setPassword("");
      //navigate("/");
    }
  }, [userName, password]);

  const logout = useCallback(() => {
    clearFav();
    setUser(null);
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        userName,
        setUserName,
        password,
        setPassword,
        login,
        logout,
        uError,
        pError,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}
