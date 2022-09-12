import React from "react";

export default function Header() {
  return (
    <div className="header">
      <div className="logo">
        <h1>DB.</h1>
      </div>
      <div>
        <ul className="nav-bar">
          <li>Projects</li>
          <li>About</li>
          <li>Contact</li>
          <li>Resume</li>
        </ul>
      </div>
    </div>
  );
}
