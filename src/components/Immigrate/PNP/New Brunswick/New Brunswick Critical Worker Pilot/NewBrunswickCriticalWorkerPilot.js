import React from "react";
import { Link } from "react-router-dom";
export default function NewBrunswickCriticalWorkerPilot() {
  return (
    <div
      style={{
        background: "#E0E0E0",
      }}
    >
      <div className="AboutUsHeader">
        <p className="link">
          <a href="/">Home</a>
          {" > "}Immigrate
          {" > "}
          <Link to="/immigrate/provincial-nominee-program">
            Provincial Nominee Program
          </Link>
          {" > "}
          <Link to="/immigrate/provincial-nominee-program/new-brunswick">
            New Brunswick
          </Link>
          {" > "}New Brunswick Critical Worker Pilot
        </p>
        <div className="header-content">
          <h1 className="heading-about">New Brunswick Critical Worker Pilot</h1>
        </div>
      </div>
    </div>
  );
}
