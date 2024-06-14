import React from "react";
import { Link } from "react-router-dom";

function Menubar() {
  return (
    <div>
      <nav className="w-full fixed top-0 bg-white">
        <div className="container mx-auto py-5 flex item-center justify-center">
          <ul className="hidden md:flex space-x-10 text-gray-600 font-sans text-xl uppercase">
           
            <li>
              <Link className="hover:text-gray-500" to="/mastermind">
                Master Mind
              </Link>
            </li>
            
            <li>
              <Link className="hover:text-gray-500" to="/decimalfinder">
                Decimal Finder
              </Link>
            </li>
           
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Menubar;
