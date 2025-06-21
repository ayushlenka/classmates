import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:8000';
axios.defaults.baseURL = BACKEND_URL;
axios.defaults.withCredentials = true; // include session cookies

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Fetch current user on mount
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await axios.get('/auth/me');
        setUser(data);
      } catch (error) {
        console.error('Error fetching user:', error);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  // Trigger backend OAuth login
  const login = () => {
    window.location.href = `${BACKEND_URL}/auth/login`;
  };

  // Logout via backend
  const logout = async () => {
    try {
      await axios.get('/auth/logout');
    } catch (error) {
      console.error('Logout error:', error);
    }
    setUser(null);
    navigate('/');
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};