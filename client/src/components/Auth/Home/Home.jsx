import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState()
  useEffect(() => {
    setIsLoggedIn(localStorage.getItem('isLoggedIn'))

  }, [])
  let navigate = useNavigate()

  const LogOut = () => {
    localStorage.setItem('isLoggedIn', 'false')
    navigate('/login')
  }
  if (!(isLoggedIn === 'true')) {
    navigate('/login')

  }
  return <div>
    HOMEPAGE
    <button onClick={LogOut}>LogOut</button>
  </div>;
};

export default Home;
