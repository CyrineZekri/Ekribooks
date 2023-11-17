import React from "react";
import { useNavigate } from 'react-router-dom';

import logo from "../../images/copy.png";

import "./ContentStyle.css";
import Button from "react-bootstrap/esm/Button";


function HeaderRenter() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove the token from localStorage
    localStorage.removeItem("token");

    navigate("/");
  };
  return (
    <div className="flex justify-between items-center border-b p-2">
      <div className="flex justify-center items-center gap-2">
        <img src={logo} className="w-28" alt="" />
        <h1 className="text-xl capitalize">ekri book</h1>
      </div>

      <Button onClick={handleLogout} className="bouton rounded-xl">Log Out</Button>

    </div>
  );
}

export default HeaderRenter;
