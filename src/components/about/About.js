import React from "react";
import { useInView } from "react-intersection-observer";
import GitHub from "@mdi/react";
import { mdiGithub } from "@mdi/js";
import Linkedin from "@mdi/react";
import { mdiLinkedin } from "@mdi/js";
import Resume from "@mdi/react";
import { mdiFileOutline } from "@mdi/js";
import PDF from "../../Docs/David_Ballowe_Resume.pdf";

export default function About(props) {
  const { ref: aboutRef, inView: aboutVisible } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: aboutDescriptionRef, inView: aboutDescriptionVisible } =
    useInView({
      triggerOnce: true,
      threshold: 0.1,
    });

  return (
    <div className="about-container">
      <div className="about-title" ref={props.page}>
        <p
          className={aboutVisible ? "inter-animations" : ""}
          ref={aboutRef}
          style={{
            visibility: aboutVisible ? "visible" : "hidden",
          }}
        >
          About.
        </p>
      </div>
      <div className="about-description-container">
        <div
          className={
            aboutDescriptionVisible
              ? "int-animations-fade about-description"
              : "about-description"
          }
          ref={aboutDescriptionRef}
        >
          <p>
            Hi there! I'm David, a highly motivated and experienced full stack
            engineer with a passion for technology and a talent for creating
            innovative solutions. I have a diverse background that includes
            working in start-up environments and delivering cutting-edge
            projects in both front-end and back-end technologies. With a strong
            background in React and Node.js as well as many more, I bring a
            wealth of knowledge to any project. Want to know more about my
            story? Here's an{" "}
            <a
              href="https://hackernoon.com/from-media-production-lead-to-full-stack-engineer-in-six-months"
              target="_blank"
              rel="noreferrer"
            >
              article
            </a>{" "}
            written by a friend and fellow engineer about my journey.
          </p>
          <div className="about-icons">
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
            <a href={PDF} target="_blank" rel="noopener noreferrer">
              <Resume path={mdiFileOutline} size={1.5} />
            </a>
          </div>
        </div>
        <div className="grid-container">
          <div className="image-container">
            <div
              className={
                aboutDescriptionVisible
                  ? "image-border icons-animation"
                  : "image-border"
              }
              id="HTML"
            >
              <img
                src="https://user-images.githubusercontent.com/25181517/183890598-19a0ac2d-e88a-4005-a8df-1ee36782fde1.png"
                alt=""
              />
              <p>TYPESCRIPT</p>
            </div>
            <div
              className={
                aboutDescriptionVisible
                  ? "image-border icons-animation"
                  : "image-border"
              }
              id="CSS"
            >
              <img
                src="https://user-images.githubusercontent.com/25181517/117207330-263ba280-adf4-11eb-9b97-0ac5b40bc3be.png"
                alt=""
              />
              <p>DOCKER</p>
            </div>
            <div
              className={
                aboutDescriptionVisible
                  ? "image-border icons-animation"
                  : "image-border"
              }
              id="SASS"
            >
              <img src={require("../../images/Tech/sass.png")} alt="" />
              <p>SASS</p>
            </div>
            <div
              className={
                aboutDescriptionVisible
                  ? "image-border icons-animation"
                  : "image-border"
              }
              id="express"
            >
              <img
                src="https://user-images.githubusercontent.com/25181517/187896150-cc1dcb12-d490-445c-8e4d-1275cd2388d6.png"
                alt=""
              />
              <p>REDUX</p>
            </div>

            <div
              className={
                aboutDescriptionVisible
                  ? "image-border icons-animation"
                  : "image-border"
              }
              id="git"
            >
              <img src={require("../../images/Tech/git.png")} alt="" />
              <p>GIT</p>
            </div>
            <div
              className={
                aboutDescriptionVisible
                  ? "image-border icons-animation"
                  : "image-border"
              }
              id="javascript"
            >
              <img src={require("../../images/Tech/js.png")} alt="" />
              <p>JAVASCRIPT</p>
            </div>
            <div
              className={
                aboutDescriptionVisible
                  ? "image-border icons-animation"
                  : "image-border"
              }
              id="mongodb"
            >
              <img src={require("../../images/Tech/mongo.png")} alt="" />
              <p>MONGODB</p>
            </div>
            <div
              className={
                aboutDescriptionVisible
                  ? "image-border icons-animation"
                  : "image-border"
              }
              id="next"
            >
              <img src={require("../../images/Tech/nextjs.png")} alt="" />
              <p>NEXT.JS</p>
            </div>

            <div
              className={
                aboutDescriptionVisible
                  ? "image-border icons-animation"
                  : "image-border"
              }
              id="node"
            >
              <img src={require("../../images/Tech/node.png")} alt="" />
              <p>NODE</p>
            </div>
            <div
              className={
                aboutDescriptionVisible
                  ? "image-border icons-animation"
                  : "image-border"
              }
              id="python"
            >
              <img
                src="https://user-images.githubusercontent.com/25181517/183896132-54262f2e-6d98-41e3-8888-e40ab5a17326.png"
                alt=""
              />
              <p>AWS</p>
            </div>
            <div
              className={
                aboutDescriptionVisible
                  ? "image-border icons-animation"
                  : "image-border"
              }
              id="react"
            >
              <img src={require("../../images/Tech/react.png")} alt="" />
              <p>REACT</p>
            </div>
            <div
              className={
                aboutDescriptionVisible
                  ? "image-border icons-animation"
                  : "image-border"
              }
              id="firebase"
            >
              <img src={require("../../images/Tech/firebase.png")} alt="" />
              <p>FIREBASE</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
