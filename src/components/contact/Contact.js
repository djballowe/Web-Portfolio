import React from "react";
import { useInView } from "react-intersection-observer";
import GitHub from "@mdi/react";
import { mdiGithub } from "@mdi/js";
import Linkedin from "@mdi/react";
import { mdiLinkedin } from "@mdi/js";
import Resume from "@mdi/react";
import { mdiFileOutline } from "@mdi/js";
import PDF from "../../Docs/David_Ballowe_Resume.pdf";

export default function Contact(props) {
  const { ref: contactRef, inView: contactVisible } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: contactDescriptionRef, inView: contactDescriptionVisible } =
    useInView({
      triggerOnce: true,
      threshold: 0.1,
    });

  return (
    <div className="contact-container" ref={props.page}>
      <div className="contact-title">
        <p
          className={contactVisible ? "inter-animations" : ""}
          ref={contactRef}
          style={{
            visibility: contactVisible ? "visible" : "hidden",
          }}
        >
          Contact.
        </p>
      </div>
      <div
        className={
          contactDescriptionVisible
            ? "int-animations-fade contact-description-container"
            : "contact-description-container"
        }
        ref={contactDescriptionRef}
      >
        <div className="contact-description">
          <p>
            I am always looking for new opportunities, so my inbox is open.
            Whether you have a question or a project to work on. Send me an
            Email and I'll get back to you as soon as possible.
          </p>
          <div className="contact-icons">
            <a
              href="https://github.com/djballowe"
              target="_blank"
              rel="noreferrer"
            >
              <GitHub path={mdiGithub} size={1.5} />
            </a>
            <a
              href="https://www.linkedin.com/in/david-ballowe-90a164178/"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin path={mdiLinkedin} size={1.5} />
            </a>
            <a href={PDF} target="_blank" rel="noreferrer">
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
