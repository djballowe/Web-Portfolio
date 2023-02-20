import React from "react";
import { useInView } from "react-intersection-observer";
import GitHub from "@mdi/react";
import { mdiGithub } from "@mdi/js";
import Link from "@mdi/react";
import { mdiOpenInNew } from "@mdi/js";
import { projects } from "../../Docs/Info";
import { Tooltip } from "reactstrap";
import Video from "@mdi/react";
import { mdiVideoOutline } from "@mdi/js";

export default function Projects(props) {
  const links = {};
  projects.map((project) => {
    links[project.id] = project.liveUrl;
  });

  const handleClick = (e) => {
    window.open(links[e.target.id], "_blank");
  };

  const triggerOptions = {
    triggerOnce: true,
    threshhold: 0.1,
  };

  const { ref: projectRef, inView: projectVisible } = useInView(triggerOptions);

  const { ref: projectOne, inView: projectOneVisible } =
    useInView(triggerOptions);

  const { ref: projectTwo, inView: projectTwoVisible } =
    useInView(triggerOptions);

  const { ref: projectThree, inView: projectThreeVisible } =
    useInView(triggerOptions);

  const projectsList = projects.map((project, i) => {
    return (
      <div
        key={i}
        className="projects-list-container"
        // className={
        //   projectOneVisible
        //     ? "int-animations-fade projects-list-container"
        //     : "projects-list-container"
        // }
        // ref={projectOne}
      >
        <div>
          <div className="projects-list-title">
            <p>{project.name}</p>
            <p>{project.type}</p>
          </div>
          <div
            className="description-container"
            id={`${project.id}`}
            // style={{
            //   flexDirection: i % 2 === 0 ? "" : "row-reverse",
            // }}
          >
            <div className="description">
              <p>{project.description}</p>
              <div className="project-buttons">
                <div className="links-container">
                  <a
                    href={`${project.liveUrl}`}
                    target="_blank"
                    rel="noreferrer"
                    id={`${project.id}-live`}
                  >
                    <Link path={mdiOpenInNew} size={1.3} />
                  </a>
                </div>
                <div className="links-container-code">
                  {project.gitHubUrl ? (
                    <a
                      style={{
                        color: !project.gitHubUrl ? "rgb(121, 121, 121)" : "",
                      }}
                      href={`${project.gitHubUrl}`}
                      target="_blank"
                      rel="noreferrer"
                      id={`${project.id}-github`}
                    >
                      <GitHub path={mdiGithub} size={1.5} />
                    </a>
                  ) : null}
                  {project.demo ? (
                    <a
                      href={`${project.demo}`}
                      target="_blank"
                      rel="noreferrer"
                      id={`${project.id}-demo`}
                    >
                      <Video path={mdiVideoOutline} size={1.5} />
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
            <img
              src={require(`../../images/${project.img}`)}
              alt=""
              onClick={handleClick}
              id={`${project.id}`}
            />
          </div>
        </div>
      </div>
    );
  });

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
      {projectsList}
    </div>
  );
}
