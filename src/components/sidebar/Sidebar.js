import React from "react";
import GitHub from "@mdi/react";
import { mdiGithub } from "@mdi/js";
import Linkedin from "@mdi/react";
import { mdiLinkedin } from "@mdi/js";
import Resume from "@mdi/react";
import { mdiFileOutline } from "@mdi/js";
import pdf from "../../Docs/David_Ballowe_Resume.pdf";

export default function SideBar() {
  return (
    <div className="side-bar-container">
      <div className="left">
        <a href="https://github.com/djballowe" target="_blank" rel="noreferrer">
          <GitHub path={mdiGithub} size={1.5} />
        </a>
        <a
          href="https://www.linkedin.com/in/david-ballowe-90a164178/"
          target="_blank"
          rel="noreferrer"
        >
          <Linkedin path={mdiLinkedin} size={1.5} />
        </a>
        <a href={pdf} target="_blank" rel="noreferrer">
          <Resume path={mdiFileOutline} size={1.5} />
        </a>
        <div className="line"></div>
      </div>
      <div className="right">
        <p
          onClick={() => {
            window.location.href = "mailto:db@davidballowe.com";
          }}
        >
          db@davidballowe.com
        </p>
        <div className="line"></div>
      </div>
    </div>
  );
}
