import React from "react";
import GitHub from "@mdi/react";
import { mdiGithub } from "@mdi/js";
import Linkedin from "@mdi/react";
import { mdiLinkedin } from "@mdi/js";
import Resume from "@mdi/react";
import { mdiFileOutline } from "@mdi/js";
import Arrow from "@mdi/react";
import { mdiChevronDown } from "@mdi/js";
import pdf from "../../Docs/David_Ballowe_Resume.pdf";

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
      </div>
      <div className="intro-buttons">
        <button className="intro-buttons">
          <Arrow path={mdiChevronDown} size={3} />{" "}
        </button>
      </div>
    </div>
  );
}
