import "./MembershipStyles.css";
import React from "react";
import membershipForm from "./MembershipForm.jpg";

function Membership() {
  return (
    <div className="membership-container">
      <h1>Karigor Membership Form</h1>
      <div>
        <p>Download the form, fillup and email to Karigor</p>
      </div>
      <div className="membership-form">
        <img alt="img" src={membershipForm} />
      </div>
    </div>
  );
}

export default Membership;
