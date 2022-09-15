import React from "react";

export default function Header(props) {
  return (
    <div className="header">
      <div className="logo">
        <h1>DB.</h1>
      </div>
      <div
        className="ham-menu"
        onClick={() => {
          props.click();
        }}
      >
        <div class="menu-icon">
          <input
            class="menu-icon__cheeckbox"
            type="checkbox"
            checked={props.open ? true : false}
          />
          <div>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      <div className="desk-menu">
        <ul className="nav-bar">
          <li
            onClick={() => {
              props.handle("projects");
            }}
          >
            Projects
          </li>
          <li
            onClick={() => {
              props.handle("about");
            }}
          >
            About
          </li>
          <li
            onClick={() => {
              props.handle("contact");
            }}
          >
            Contact
          </li>
          <li>Resume</li>
        </ul>
      </div>
    </div>
  );
}
