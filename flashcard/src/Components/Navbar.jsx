import React from "react";
import logo from "./logo.png";

const Navbar = () => {
  return (
    <div>
      <nav className="px-10 py-2 bg-white shadow-md">
        <div className="w-48">
          <img src={logo} alt="logo" className="inline-block" />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
