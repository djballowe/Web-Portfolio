import React from "react";

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
          <button
            onClick={() => {
              window.location.href = "mailto:db@davidballowe.com";
            }}
          >
            Contact
          </button>
        </div>
      </div>
    </div>
  );
}
