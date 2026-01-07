import { createContext, useContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Persist auth state across refresh
    const storedAuth = JSON.parse(localStorage.getItem("auth"));
    if (storedAuth) setUser(storedAuth);
  }, []);

  const login = (email, userId) => {
    const userData = { email, userId };
    setUser(userData);
    localStorage.setItem("auth", JSON.stringify(userData));
  };

  const signup = (email, userId) => {
    const userData = { email, userId };
    setUser(userData);
    localStorage.setItem("auth", JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("auth");
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
