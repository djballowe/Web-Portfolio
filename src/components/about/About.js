import React from "react";
import GitHub from "@mdi/react";
import { mdiGithub } from "@mdi/js";
import Linkedin from "@mdi/react";
import { mdiLinkedin } from "@mdi/js";
import Resume from "@mdi/react";
import { mdiFileOutline } from "@mdi/js";

export default function About() {
  return (
    <div className="about-container">
      <div className="about-title">
        <p>About.</p>
      </div>
      <div className="about-description-container">
        <div className="about-description">
          <p>
            Hi there! I'm David, a Full Stack Developer with a passion for
            merging elegant design and technology. I love creating web
            applications that people can enjoy and use. My goal is to create
            products that clients are proud of, and to architect clean and
            scalable code. I also enjoy Photography, making 3d art in Blender,
            and enjoying the outdoors. Here are a few technologies I have been
            working with lately.
          </p>
          <div className="about-icons">
            <GitHub path={mdiGithub} size={1.5} />
            <Linkedin path={mdiLinkedin} size={1.5} />
            <Resume path={mdiFileOutline} size={1.5} />
          </div>
        </div>
        <div className="image-container">
          <div className="image-row">
            <div className="image-border">
              <img src={require("../../images/Tech/html.png")} alt="" />
              <p>HTML</p>
            </div>
            <div className="image-border">
              <img src={require("../../images/Tech/css.png")} alt="" />
              <p>CSS</p>
            </div>
            <div className="image-border">
              <img src={require("../../images/Tech/sass.png")} alt="" />
              <p>SASS</p>
            </div>
            <div className="image-border">
              <img src={require("../../images/Tech/express.png")} alt="" />
              <p>EXPRESS</p>
            </div>
          </div>
          <div>
            <div className="image-border">
              <img src={require("../../images/Tech/git.png")} alt="" />
              <p>GIT</p>
            </div>
            <div className="image-border">
              <img src={require("../../images/Tech/js.png")} alt="" />
              <p>JAVASCRIPT</p>
            </div>
            <div className="image-border">
              <img src={require("../../images/Tech/mongo.png")} alt="" />
              <p>MONGODB</p>
            </div>
            <div className="image-border">
              <img src={require("../../images/Tech/nextjs.png")} alt="" />
              <p>NEXT.JS</p>
            </div>
          </div>
          <div>
            <div className="image-border">
              <img src={require("../../images/Tech/node.png")} alt="" />
              <p>NODE</p>
            </div>
            <div className="image-border">
              <img src={require("../../images/Tech/py.png")} alt="" />
              <p>PYTHON</p>
            </div>
            <div className="image-border">
              <img src={require("../../images/Tech/react.png")} alt="" />
              <p>REACT</p>
            </div>
            <div className="image-border">
              <img src={require("../../images/Tech/firebase.png")} alt="" />
              <p>FIREBASE</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
