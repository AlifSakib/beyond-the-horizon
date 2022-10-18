import { getAuth } from "firebase/auth";
import React, { createContext } from "react";
import app from "../Firebase/Firebase.Config";

const auth = getAuth(app);
export const AuthContext = createContext();
const UserContext = ({ children }) => {
  return <AuthContext.Provider>{children}</AuthContext.Provider>;
};

export default UserContext;
