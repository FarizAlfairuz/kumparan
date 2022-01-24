import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="w-full">
      <div className="flex justify-start py-2 md:py-3 px-5 sm:px-6 md:px-10 shadow bg-blue-300 items-center">
        <NavLink activeClassName="text-white" to="/">
          <div className="font-bold text-xl">Kumparan Test</div>
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
