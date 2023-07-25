import React from "react";

import Login from "./Pages/Login";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Singup from "./Pages/Singup";
import Dashboard from "./Pages/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./Pages/Home";



const App = () => {
  const [isLogin,setIslogIn] =useState(false)
  
  // console.log()
  

  return (
    <div>
      {
        isLogin?<Navbar setIslogIn={setIslogIn} isLogin={isLogin} />: <div></div>
        
      }
      <Routes>
  
        <Route path="/"   element={<Login setIslogIn={setIslogIn} />}/> 
        <Route path="/singup" element={<Singup setIslogIn={setIslogIn} />}  /> 
        <Route
          path="/dashboard"
          element={

            <PrivateRoute isLogIn={isLogin} >

              <Dashboard />
            </PrivateRoute>
          }
          />
          
        <Route
          path="/home"
          element={

            <PrivateRoute isLogIn={isLogin} >

              <Home />
            </PrivateRoute>
          }
          />

             
      </Routes>

    </div>

  )
  
};

export default App;
