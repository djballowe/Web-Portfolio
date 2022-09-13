import React from "react";
import GitHub from "@mdi/react";
import { mdiGithub } from "@mdi/js";
import Linkedin from "@mdi/react";
import { mdiLinkedin } from "@mdi/js";
import Resume from "@mdi/react";
import { mdiFileOutline } from "@mdi/js";

export default function Icons() {
  return (
    <div className="icons-sticky">
      <GitHub path={mdiGithub} size={1.5} />
      <Linkedin path={mdiLinkedin} size={1.5} />
      <Resume path={mdiFileOutline} size={1.5} />
      <div className="line"></div>
    </div>
  );
}
