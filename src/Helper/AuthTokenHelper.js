import axios from "axios";
import jwtDecode from "jwt-decode";
import UserPreferenceSingleton from "./UserPrefenceSingleton";

export const setupToken = () => {
  const token = UserPreferenceSingleton.getInstance().getUserToken();
  if (token) {
    const decoded = jwtDecode(token);
    const currentTime = Date.now() / 1000;
    console.log("decoded", decoded);
    if (decoded.exp > currentTime) {
      setAuthToken(token);
      return token;
    }
  }
  return false;
};

export const saveToken = (access_Token) => {
  setAuthToken(access_Token);
  UserPreferenceSingleton.getInstance().setUserToken(access_Token);
};

// Header Methods
export const setAuthToken = (access_Token) => {
  try {
    axios.defaults.headers.common["Authorization"] = `Bearer ` + access_Token;
  } catch (e) {
    console.log("Error while setup token", e);
  }
};
