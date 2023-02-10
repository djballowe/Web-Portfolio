import React from "react";
import { useInView } from "react-intersection-observer";
import GitHub from "@mdi/react";
import { mdiGithub } from "@mdi/js";
import Link from "@mdi/react";
import { mdiOpenInNew } from "@mdi/js";

export default function Projects(props) {
  const links = {
    zawn: "https://zawnshop.com/",
    mozilla: "https://hubs.mozilla.com/",
    arch: "https://www.davidballowe.com/",
  };

  const triggerOptions = {
    triggerOnce: true,
    threshhold: 0.1,
  };

  const { ref: projectRef, inView: projectVisible } = useInView(triggerOptions);

  const { ref: projectOne, inView: projectOneVisible } = useInView(triggerOptions);

  const { ref: projectTwo, inView: projectTwoVisible } = useInView(triggerOptions);

  const { ref: projectThree, inView: projectThreeVisible } = useInView(triggerOptions);

  const handleClick = (e) => {
    window.open(links[e.target.id], "_blank");
  };

  return (
    <div className="projects-container" ref={props.page}>
      <div className="projects-title">
        <p
          className={projectVisible ? "inter-animations" : ""}
          ref={projectRef}
          style={{
            visibility: projectVisible ? "visible" : "hidden",
          }}
        >
          Projects.
        </p>
      </div>
      <div
        className={
          projectOneVisible
            ? "int-animations-fade projects-list-container"
            : "projects-list-container"
        }
        ref={projectOne}
      >
        <div>
          <div className="projects-list-title">
            <p>ZAWN</p>
            <p>Full-Stack E-Commerce Site</p>
          </div>
          <div className="description-container" id="zawn">
            <div className="description">
              <p>
                Full-Stack E-Commerce Site with full functionality. Including
                adding items to cart, creating user accounts, adding shipping
                addresses to account, secure checkout with Stripe, and saved
                order history details per user. Created with React,
                Node.js/Express, Firebase/Firestore, Stripe API, Cloud
                Functions, CI/CD configured with Google Cloud, and deployed with
                Firebase Hosting.
              </p>
              <div className="project-buttons">
                <div className="links-container">
                  <a
                    href="https://zawnshop.com/"
                    target="_blank"
                    rel="noreferrer"
                    id="zawn-live"
                  >
                    <Link path={mdiOpenInNew} size={1.3} />
                  </a>
                </div>
                <div className="links-container-code">
                  <a
                    href="https://github.com/djballowe/ZAWN"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <GitHub path={mdiGithub} size={1.5} />
                  </a>
                </div>
              </div>
            </div>
            <img
              src={require("../../images/zawnscreen.png")}
              alt=""
              onClick={handleClick}
              id="zawn"
            />
          </div>
        </div>
      </div>
      <div
        className={
          projectTwoVisible
            ? "int-animations-fade projects-list-container"
            : "projects-list-container"
        }
        ref={projectTwo}
      >
        <div className="projects-list">
          <div className="projects-list-title-even">
            <p>Mozilla Hubs</p>
            <p>Open-Source Contributions</p>
          </div>
          <div className="description-container">
            <img
              src={require("../../images/hubs.png")}
              alt=""
              onClick={handleClick}
              id="mozilla"
            />
            <div className="description">
              <p>
                Worked with the Community Manager at Mozilla along with a small
                team to create a new visual mode for the hubs meeting space.
                Engineered the logic with React hooks to define a record mode
                state which toggles a minimal UI designed for "camera operators"
                in a hub world to record meetings and events that take place.
              </p>
              <div className="project-buttons">
                <div className="links-container">
                  <a
                    href="https://hubs.mozilla.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Link path={mdiOpenInNew} size={1.3} />
                  </a>
                </div>
                <div className="links-container-code">
                  <a
                    href="https://github.com/mozilla/hubs/pull/5718"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <GitHub path={mdiGithub} size={1.5} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          projectThreeVisible
            ? "int-animations-fade projects-list-container"
            : "projects-list-container"
        }
        ref={projectThree}
      >
        <div className="projects-list">
          <div className="projects-list-title">
            <p>Architecture Portfolio</p>
            <p>Portfolio Site</p>
          </div>
          <div className="description-container" id="arch">
            <div className="description">
              <p>
                Engineered a basic portfolio site for the purpose of displaying
                freelance and personal projects I have done for architects and
                interior designers. Made fully responsive with mobile first
                practices using media queries. Created with React to display
                each section as a separate component to easily update
                information. Configured CI/CD pipeline with Vercel for auto
                deployment. Implemented email.js to gather data from contact
                form and forward emails.
              </p>
              <div className="project-buttons">
                <div className="links-container">
                  <a
                    href="https://www.davidballowe.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Link path={mdiOpenInNew} size={1.3} />
                  </a>
                </div>
                <div className="links-container-code">
                  <a
                    href="https://github.com/djballowe/Arch-Portfolio"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <GitHub path={mdiGithub} size={1.5} />
                  </a>
                </div>
              </div>
            </div>
            <img
              src={require("../../images/davidballowe.png")}
              alt=""
              onClick={handleClick}
              id="arch"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
