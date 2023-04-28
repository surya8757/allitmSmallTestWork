import React from "react";

import "./Header.css";

const Header = (props) => {
  return (
    <>
    
    <nav className="head">
      <ul className="head-item-1">
        <li className="list">
          <a href="/">Home</a>
        </li>
        <li className="list">
          <a href="/data">Data</a>
        </li>
        <li className="list">
          <a>Contact</a>
        </li>
        <li className="list">
          <a>About</a>
        </li>
        <ul className="head-sub-item-2">
        <li className="list"><a href="/signUp">signUp</a></li>
        <li className="list"><a href="/signIn">signIn</a></li>
      </ul>
      </ul>
    </nav>
    </>
  );
};

export default Header;
