import React, { useState } from "react";

export default function Projects(props) {
  const [isZawnLive, setIsZawnLive] = useState(false);
  const [isZawnCode, setIsZawnCode] = useState(false);
  const [isHubsLive, setIsHubsLive] = useState(false);
  const [isHubsCode, setIsHubsCode] = useState(false);
  const [isArchLive, setIsArchLive] = useState(false);
  const [isArchCode, setIsArchCode] = useState(false);

  const handleHovering = (e) => {
    const id = e.target.id;
  };

  return (
    <div className="projects-container" ref={props.page}>
      <div>
        <p className="projects-title">Projects.</p>
      </div>
      <div className="projects-list-container">
        <div className="projects-list">
          <div className="projects-list-title">
            <p>ZAWN</p>
            <p>Full-Stack E-Commerce Site</p>
          </div>
          <div className="description-container">
            <div className="description">
              <p>
                Full-Stack E-Commerce Site with full functionality. Including
                adding items to cart, creating user accounts, adding shipping
                addresses, secure checkout, and order history details. Created
                with React, Node.js/Express, Firebase/Firestore, Stripe API,
                Cloud Functions, deployed with Google Cloud and Firebase
                Hosting.
              </p>
              <div className="project-buttons">
                <div className="links-container">
                  <a
                    onMouseEnter={() => {
                      setIsZawnLive(true);
                    }}
                    onMouseOut={() => {
                      setIsZawnLive(false);
                    }}
                    href="https://zawnshop.com/"
                    target="_blank"
                    rel="noreferrer"
                    id="zawn-live"
                  >
                    Live Site
                  </a>
                  <div
                    className="underline"
                    style={{
                      minHeight: isZawnLive ? "37px" : "2px",
                    }}
                  ></div>
                </div>
                <div className="links-container-code">
                  <a
                    onMouseEnter={() => {
                      setIsZawnCode(true);
                    }}
                    onMouseOut={() => {
                      setIsZawnCode(false);
                    }}
                    href="https://github.com/djballowe/ZAWN"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Code
                  </a>
                  <div
                    className="underline"
                    style={{
                      minHeight: isZawnCode ? "37px" : "2px",
                    }}
                  ></div>
                </div>
              </div>
            </div>
            <img src={require("../../images/zawnscreen.png")} alt="" />
          </div>
        </div>
      </div>
      <div className="projects-list-container">
        <div className="projects-list">
          <div className="projects-list-title-even">
            <p>Mozilla Hubs Record Mode</p>
            <p>Open-Source Contributions</p>
          </div>
          <div className="description-container">
            <img src={require("../../images/hubs.png")} alt="" />
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
                    onMouseEnter={() => {
                      setIsHubsLive(true);
                    }}
                    onMouseOut={() => {
                      setIsHubsLive(false);
                    }}
                    href="https://hubs.mozilla.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Site
                  </a>
                  <div
                    className="underline"
                    style={{
                      minHeight: isHubsLive ? "37px" : "2px",
                    }}
                  ></div>{" "}
                </div>
                <div className="links-container-code">
                  <a
                    onMouseEnter={() => {
                      setIsHubsCode(true);
                    }}
                    onMouseOut={() => {
                      setIsHubsCode(false);
                    }}
                    href="https://github.com/djballowe/hubs"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Code
                  </a>
                  <div
                    className="underline"
                    style={{
                      minHeight: isHubsCode ? "37px" : "2px",
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="projects-list-container">
        <div className="projects-list">
          <div className="projects-list-title">
            <p>Architecture Portfolio</p>
            <p>Portfolio Site</p>
          </div>
          <div className="description-container">
            <div className="description">
              <p>
                Engineered a basic portfolio site for the purpose of displaying
                freelance and personal projects I have done for architects and
                interior designers. Made fully responsive with mobile first
                practices using media queries. Created with React to display
                each section as a separate component to easily update
                information. Configured CI/CD pipeline with Vercel for auto
                deployment.
              </p>
              <div className="project-buttons">
                <div className="links-container">
                  <a
                    onMouseEnter={() => {
                      setIsArchLive(true);
                    }}
                    onMouseOut={() => {
                      setIsArchLive(false);
                    }}
                    href="https://hubs.mozilla.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Site
                  </a>
                  <div
                    className="underline"
                    style={{
                      minHeight: isArchLive ? "37px" : "2px",
                    }}
                  ></div>{" "}
                </div>
                <div className="links-container-code">
                  <a
                    onMouseEnter={() => {
                      setIsArchCode(true);
                    }}
                    onMouseOut={() => {
                      setIsArchCode(false);
                    }}
                    href="https://github.com/djballowe/hubs"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Code
                  </a>
                  <div
                    className="underline"
                    style={{
                      minHeight: isArchCode ? "37px" : "2px",
                    }}
                  ></div>
                </div>
              </div>
            </div>
            <img src={require("../../images/davidballowe.png")} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
