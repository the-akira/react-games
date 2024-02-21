import React from "react";
import "./header.css"

const Header = () => {
  return (
    <div>
      <h1 className="main-title">React Games App</h1>
      <div className="icons">
        <a href="https://github.com/the-akira" rel="noopener noreferrer" target="_blank">
          <i className="fab fa-github fa-2x social" aria-hidden="true"></i>
        </a>
        <a href="https://cc33z.pythonanywhere.com" rel="noopener noreferrer" target="_blank">
          <i className="fas fa-globe fa-2x social" aria-hidden="true"></i>
        </a>
      </div>
    </div>
  );
}

export default Header;