import axios from "axios";
import { useState, createContext, useEffect } from "react";
import { useNavigate } from "react-router";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const login = (data) => {
    axios
      .post(`http://localhost:3001/api/auth/login`, data)
      .then((res) => {
        setUser(res.data.user);
        localStorage.setItem("token", res.data.token);
        navigate("/events");
      })
      .catch((e) => {
        console.log(e);
        setUser(null);
      });
  };

  const register = (data) => {
    axios
      .post(`http://localhost:3001/api/users`, data)
      .then((res) => {
        navigate("/login");
      })
      .catch((e) => {
        console.log(e);
        setUser(null);
      });
  };

  const logout = (data) => {
    setUser(null);
    localStorage.removeItem("token");
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      axios
        .get(`http://localhost:3001/api/auth/profile`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          setUser(res.data);
          // console.log(res.data);
        })
        .catch(console.error)
        .finally(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, []);

  return (
    <AuthContext value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext>
  );
}

export default AuthProvider;
