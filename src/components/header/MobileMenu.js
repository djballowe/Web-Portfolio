import React from "react";

export default function MobileMenu(props) {
  return (
    <div
      className="menu-container"
      style={{
        display: props.open ? "block" : "none",
      }}
      onClick={() => {
        props.click();
      }}
    >
      <ul className="mobile-menu">
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
        <li
          onClick={() => {
            props.handle("resume");
          }}
        >
          Resume
        </li>
      </ul>
    </div>
  );
}
