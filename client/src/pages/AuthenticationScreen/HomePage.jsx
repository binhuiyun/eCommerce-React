import Header from "../layout/Header";
import Footer from "../layout/Footer";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";

export default function HomePage() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      setUser(loggedInUser);
      console.log("hello from home: ", localStorage.getItem("user"));
    }
  }, []);

  const handleLogout = () => {
    setUser(null);
    localStorage.clear();
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <div className="w-screen h-screen flex flex-col">
      <Header />
      {user && (
        <div className="flex flex-grow">
          <button className="m-auto" type="button" onClick={handleLogout}>
            Click me to log out
          </button>
        </div>
      )}
      {!user && (
        <div className="flex flex-grow">
          <button className="m-auto" type="button" onClick={handleLogin}>
            Click me to log in
          </button>
        </div>
      )}
      <Footer />
    </div>
  );
}
