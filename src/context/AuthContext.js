import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  /* const login = (email, password) => {
    if (email === "admin@event.com" && password === "1234") {
      setUser({ email });
      return true;
    }
    return false;
  };
 */
  const login = (email, password) => {
    setUser({ email });
    return true;
  };
  

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
