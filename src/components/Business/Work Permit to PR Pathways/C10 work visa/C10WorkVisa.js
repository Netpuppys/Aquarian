import React from "react";
import { Link } from "react-router-dom";
export default function C10WorkVisa() {
  return (
    <div
      style={{
        background: "#E0E0E0",
      }}
    >
      <div className="AboutUsHeader">
        <p className="link">
          <a href="/">Home</a>
          {" > "}Business
          {" > "}
          <Link to="/business/work-permit-to-pr-pathways">
            Work Permit to PR Pathways
          </Link>
          {" > "}C10 work visa
        </p>
        <div className="header-content">
          <h1 className="heading-about">C10 work visa</h1>
        </div>
      </div>
    </div>
  );
}
