import React from "react";
import { Link } from "react-router-dom";
export default function SaskatchewanInternationalGraduateEntrepreneurCategory() {
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
          <Link to="/immigrate/provincial-nominee-program/saskatchewan">
            Saskatchewan
          </Link>
          {" > "}
          <Link to="/immigrate/provincial-nominee-program/saskatchewan/saskatchewan-entrepreneur-and-farm">
            Saskatchewan Entrepreneur and Farm
          </Link>
          {" > "}Saskatchewan International Graduate Entrepreneur Category
        </p>
        <div className="header-content">
          <h1 className="heading-about">
            Saskatchewan International Graduate Entrepreneur Category
          </h1>
        </div>
      </div>
    </div>
  );
}
