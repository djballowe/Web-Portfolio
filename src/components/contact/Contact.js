import React from "react";
import GitHub from "@mdi/react";
import { mdiGithub } from "@mdi/js";
import Linkedin from "@mdi/react";
import { mdiLinkedin } from "@mdi/js";
import Resume from "@mdi/react";
import { mdiFileOutline } from "@mdi/js";
import Email from "@mdi/react";
import { mdiEmailOutline } from "@mdi/js";

export default function Contact(props) {
  return (
    <div className="contact-container" ref={props.page}>
      <div className="contact-title">
        <p>Contact.</p>
      </div>
      <div className="contact-description-container">
        <div className="contact-description">
          <p>
            I am always looking for new opportunities, so my inbox is open.
            Whether you have a question or a project to work on. Send me an
            Email and I'll get back to you as soon as possible.
          </p>
          <div className="contact-icons">
            <a href="https://github.com/djballowe">
              <GitHub path={mdiGithub} size={1.5} />
            </a>
            <a href="https://www.linkedin.com/in/david-ballowe-90a164178/">
              <Linkedin path={mdiLinkedin} size={1.5} />
            </a>
            <a href="">
              <Resume path={mdiFileOutline} size={1.5} />
            </a>
          </div>
          <button
            onClick={() => {
              window.location.href = "mailto:db@davidballowe.com";
            }}
          >
            Contact
          </button>
        </div>
      </div>
      <div className="footer">
        <p>Designed & Built by David Ballowe</p>
      </div>
    </div>
  );
}
