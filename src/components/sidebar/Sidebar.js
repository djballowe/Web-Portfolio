import React from "react";
import GitHub from "@mdi/react";
import { mdiGithub } from "@mdi/js";
import Linkedin from "@mdi/react";
import { mdiLinkedin } from "@mdi/js";
import Resume from "@mdi/react";
import { mdiFileOutline } from "@mdi/js";

export default function SideBar() {
  return (
    <div className="side-bar-container">
      <div className="left">
        <GitHub path={mdiGithub} size={1.5} />
        <Linkedin path={mdiLinkedin} size={1.5} />
        <Resume path={mdiFileOutline} size={1.5} />
        <div className="line"></div>
      </div>
      <div className="right">
        <p>db@davidballowe.com</p>
        <div className="line"></div>
      </div>
    </div>
  );
}
