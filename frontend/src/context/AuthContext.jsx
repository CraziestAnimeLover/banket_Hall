import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  // ✅ State
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(() => localStorage.getItem('token'));

  // ✅ Axios instance
  const api = axios.create({
    baseURL: 'http://localhost:5000/api',
  });

  // ✅ Attach token automatically
  useEffect(() => {
    if (token) {
      api.defaults.headers['x-auth-token'] = token;
    } else {
      delete api.defaults.headers['x-auth-token'];
    }
  }, [token]);

  // ✅ Load user (optional but recommended)
  useEffect(() => {
    const fetchUser = async () => {
      try {
        if (token) {
          const res = await api.get('/auth/me'); // your backend endpoint
          setUser(res.data);
        }
      } catch (error) {
        console.error('User fetch failed', error);
        logout();
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [token]);

  // ✅ Login
  const login = async (email, password) => {
    const res = await api.post('/auth/login', { email, password });

    const { token: newToken, role } = res.data;

    localStorage.setItem('token', newToken);
    setToken(newToken);
    setUser({ role });

    api.defaults.headers['x-auth-token'] = newToken;
  };

  // ✅ Register
  const register = async (email, password, role = 'user') => {
    const res = await api.post('/auth/register', { email, password, role });

    const { token: newToken } = res.data;

    localStorage.setItem('token', newToken);
    setToken(newToken);
    setUser({ role });

    api.defaults.headers['x-auth-token'] = newToken;
  };

  // ✅ Logout
  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        loading,
        login,
        register,
        logout,
        api,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};