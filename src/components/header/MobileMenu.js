import React from "react";
import PDF from "../../Docs/David_Ballowe_Resume.pdf";

export default function MobileMenu(props) {
  return (
    <div
      className="menu-container"
      style={{
        visibility: props.open ? "visible" : "hidden",
        opacity: props.open ? "1" : "0",
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
          Projects.
        </li>
        <li
          onClick={() => {
            props.handle("about");
          }}
        >
          About.
        </li>
        <li
          onClick={() => {
            props.handle("work");
          }}
        >
          Work.
        </li>
        <li
          onClick={() => {
            props.handle("contact");
          }}
        >
          Contact.
        </li>
        <li>
          <a href={PDF} target="_blank" rel="noreferrer">
            Resume.
          </a>
        </li>
      </ul>
    </div>
  );
}
