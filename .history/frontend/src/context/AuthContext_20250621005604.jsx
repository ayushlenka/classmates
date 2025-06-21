import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const login = async (googleToken) => {
    try {
      const res = await axios.post("http://localhost:8000/api/auth/google", {
        token: googleToken,
      });

      const { access_token, user_info } = res.data;

      localStorage.setItem("token", access_token);
      axios.defaults.headers.common["Authorization"] = `Bearer ${access_token}`;
      setUser(user_info);
      return true;
    } catch (error) {
      console.error("Login failed:", error);
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    delete axios.defaults.headers.common["Authorization"];
    setUser(null);
  };

  const verifyToken = async (token) => {
  try {
    const res = await axios.post("http://localhost:8000/api/auth/verify", { token });
    if (res.data.valid) {
      setUser(res.data.user);
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
      logout();
    }
  } catch (err) {
    console.error("Token verify failed:", err.message);
    logout(); // fallback
  } finally {
    setLoading(false);
  }
};


  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      verifyToken(token);
    } else {
      setLoading(false);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
