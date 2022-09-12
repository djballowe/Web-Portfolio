import React from "react";
import GitHub from "@mdi/react";
import { mdiGithub } from "@mdi/js";
import Linkedin from "@mdi/react";
import { mdiLinkedin } from "@mdi/js";
import Resume from "@mdi/react";
import { mdiFileOutline } from "@mdi/js";
import Arrow from "@mdi/react";
import { mdiChevronDown } from "@mdi/js";

export default function Intro() {
  return (
    <div className="intro-container">
      <div className="name">
        <p>David Ballowe.</p>
      </div>
      <div className="title">
        <p>Full-Stack Engineer.</p>
      </div>
      <div className="intro-paragraph">
        <p>Building and designing exceptional web experiences.</p>

      </div>
      <div className="icons">
        <GitHub path={mdiGithub} size={1.5} />
        <Linkedin path={mdiLinkedin} size={1.5} />
        <Resume path={mdiFileOutline} size={1.5} />
      </div>
      <div className="intro-buttons">
        <button>
          <Arrow path={mdiChevronDown} size={3} />{" "}
        </button>
      </div>
    </div>
  );
}
