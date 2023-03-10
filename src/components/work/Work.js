import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import ArrowRight from "@mdi/react";
import { mdiMenuRight } from "@mdi/js";
import Link from "@mdi/react";
import { mdiLinkVariant } from "@mdi/js";
import { info } from "../../Docs/Info";

export default function Work({ page, mobile }) {
  const [selectedCompany, setSelectedCompany] = useState("0");
  const [lineLocation, setLineLocation] = useState(0);
  const [fireAnimation, setFireAnimation] = useState(false);
  const selected = info[selectedCompany];
  const triggerOptions = {
    triggerOnce: true,
    threshhold: 0.1,
  };

  const { ref: workRef, inView: workVisible } = useInView(triggerOptions);

  const { ref: workDescriptionRef, inView: workDescriptionVisible } =
    useInView(triggerOptions);

  const handleClick = (e) => {
    const { id } = e.target;
    if (id === selectedCompany) {
      return;
    }
    if (fireAnimation) {
      setFireAnimation(false);
    }

    setSelectedCompany(id);
    setLineLocation(id * 82);
  };

  const handleLinkClick = (url) => {
    window.open(url, "_blank");
  };

  const workButtons = info.map((title, index) => {
    return (
      <button key={index} id={index} onClick={handleClick}>
        {title.company}
      </button>
    );
  });

  useEffect(() => {
    const buttons = document.querySelector(".company-buttons").children;
    for (let i = 0; i < buttons.length; i++) {
      if (buttons[i].id === selectedCompany) {
        buttons[i].style.backgroundColor = "rgb(50, 50, 50)";
      } else {
        buttons[i].style.backgroundColor = "rgb(20, 20, 20)";
      }
    }
    setFireAnimation(true);
  }, [selectedCompany]);

  const currentCompanyComponent = () => {
    const bullets = selected.jobDescription.map((info, i) => {
      return (
        <div className="bullet-container" key={i}>
          <div className="bullet">
            <ArrowRight path={mdiMenuRight} size={1.5} />
          </div>
          <p>{info}</p>
        </div>
      );
    });

    return (
      <div className={`content ${fireAnimation ? "opacity-animation" : null}`}>
        <div className="content-title">
          <div>
            <p>{selected.role}</p>
            <div
              onClick={() => handleLinkClick(selected.url)}
              className="company-link"
            >
              @ {selected.company} <Link path={mdiLinkVariant} size={0.7} />
            </div>
          </div>
          <p>
            {selected.startDate.month} {selected.startDate.year} -{" "}
            {selected.endDate.month
              ? selected.endDate.month + " " + selected.endDate.year
              : selected.endDate}
          </p>
        </div>
        {bullets}
      </div>
    );
  };

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
      <div
        className={
          workDescriptionVisible
            ? "int-animations-fade pick-border-container"
            : "pick-border-container"
        }
        ref={workDescriptionRef}
      >
        <div className="pick-container">
          <div className="companies">
            <div
              className="line"
              style={{
                top: lineLocation,
              }}
            ></div>
            <div className="company-buttons">{workButtons}</div>
          </div>
          {currentCompanyComponent()}
        </div>
      </div>
    </div>
  );
}
