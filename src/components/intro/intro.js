import React, { useState } from "react";
import Arrow from "@mdi/react";
import { mdiChevronDown } from "@mdi/js";

export default function Intro() {
  const [fadedIn, setFadedIn] = useState(false);
  setTimeout(() => {
    setFadedIn(true);
  }, 3000);

  return (
    <div className="intro-container">
      <div className="name-title">
        <div className="name">
          <p>David Ballowe.</p>
        </div>
        <div className="title">
          <p>Full-Stack Engineer.</p>
        </div>
        <div className="intro-paragraph">
          <p>
            I build and design exceptional full stack products with an emphasis
            on user experience.
          </p>
        </div>
        <div className="details-container">
          <div className="details">
            <p>Highly skilled at crafting solid scalable React.</p>
          </div>
          <div className="details">
            <p>Experienced in the media and video streaming space.</p>
          </div>
          <div className="details">
            <p>Familiar with startup environments.</p>
          </div>
        </div>
      </div>
      {/* <div className="icons">
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
      </div> */}
      <div className="intro-buttons">
        <button
          className={`intro-buttons ${
            fadedIn ? "bounce-animation" : "arrow-fade-in"
          }`}
        >
          <Arrow path={mdiChevronDown} size={3} />{" "}
        </button>
      </div>
    </div>
  );
}
