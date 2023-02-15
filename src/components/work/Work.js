import React from "react";
import { useInView } from "react-intersection-observer";
import ArrowRight from "@mdi/react";
import { mdiMenuRight } from "@mdi/js";

export default function Work({ page }) {

  const triggerOptions = {
    triggerOnce: true,
    threshhold: 0.1,
  };

  const { ref: workRef, inView: workVisible } = useInView(triggerOptions);

  const { ref: workDescriptionRef, inView: workDescriptionVisible } = useInView(
    {
      triggerOnce: true,
      threshold: 0.1,
    }
  );
  return (
    <div className="work-container">
      <div className="work-title" ref={page}>
        <p
          className={workVisible ? "inter-animations" : ""}
          ref={workRef}
          style={{
            visibility: workVisible ? "visible" : "hidden",
          }}
        >
          Work.
        </p>
      </div>
      <div className="work-list-title">
        <p>Full-Stack Engineer</p>
        <p>Live Current Media Inc.</p>
        <p>2022-Present</p>
      </div>
      <div className="work-description">
        <div className="bullet-container">
          <div className="bullet">
            <ArrowRight path={mdiMenuRight} size={1.5} />
          </div>
          <p>
            Collaborate alongside engineering team to re-architect new and
            existing features utilizing full stack technologies focused on
            handling real time video streaming in cross-platform electron
            application.
          </p>
        </div>
        <div className="bullet-container">
          <div className="bullet">
            <ArrowRight path={mdiMenuRight} size={1.5} />
          </div>
          <p>
            Modernized applications streamer to viewer synchronization enabling
            seamless real time video sharing across sessions.
          </p>
        </div>
        <div className="bullet-container">
          <div className="bullet">
            <ArrowRight path={mdiMenuRight} size={1.5} />
          </div>
          <p>
            Improved processes of sites main "Discover" page when relaying
            information from active stream sessions with WebSockets.
          </p>
        </div>
        <div className="bullet-container">
          <div className="bullet">
            <ArrowRight path={mdiMenuRight} size={1.5} />
          </div>
          <p>
            Diagnosed performance issues of applications AWS Lambda architecture
            and provided suggestions for Docker and Kubernetes deployment.
          </p>
        </div>
        <div className="bullet-container">
          <div className="bullet">
            <ArrowRight path={mdiMenuRight} size={1.5} />
          </div>
          <p>
            Worked closely with the UI UX team to create front end React
            components directly from Figma mockups and offer design suggestions.
          </p>
        </div>
        <div className="bullet-container">
          <div className="bullet">
            <ArrowRight path={mdiMenuRight} size={1.5} />
          </div>
          <p>Optimized applications party search feature with Elasticsearch.</p>
        </div>
      </div>
      <div className="work-list-title">
        <p>Media Production Lead</p>
        <p>Miller Photo</p>
        <p>2019-2022</p>
      </div>
      <div className="work-description">
        <div className="bullet-container">
          <div className="bullet">
            <ArrowRight path={mdiMenuRight} size={1.5} />
          </div>
          <p>
            Led the production of marketing content for 300+ clients across the
            real estate industry including designing listing websites, still
            imagery, video, and drone services.
          </p>
        </div>
        <div className="bullet-container">
          <div className="bullet">
            <ArrowRight path={mdiMenuRight} size={1.5} />
          </div>
          <p>
            Collaborated with the media team to capitalize on market shifts
            leading to companies highest grossing year in 2021.
          </p>
        </div>
        <div className="bullet-container">
          <div className="bullet">
            <ArrowRight path={mdiMenuRight} size={1.5} />
          </div>
          <p>
            Featured in several publications including luxury home magazine.
          </p>
        </div>
      </div>
      <div className="work-list-title">
        <p>Speaker and Organizer</p>
        <p>FreeCodeCamp Sacramento</p>
        <p>2022-Present</p>
      </div>
      <div className="work-description">
        <div className="bullet-container">
          <div className="bullet">
            <ArrowRight path={mdiMenuRight} size={1.5} />
          </div>
          <p>
            Organize in person and virtual meetings for passionate developers
            across the greater Sacramento area with over 1,000 members.
          </p>
        </div>
        <div className="bullet-container">
          <div className="bullet">
            <ArrowRight path={mdiMenuRight} size={1.5} />
          </div>
          <p>
            Lead speaker at bi-weekly meetings where we discuss projects, news,
            and various tech related topics from a variety of skill ranges.
          </p>
        </div>
      </div>
    </div>
  );
}
