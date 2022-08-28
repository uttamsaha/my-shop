import React from "react";
import "./NotVerified.css";
import {
    useAuthState,
    useSendEmailVerification,
  } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

const NotVerified = () => {
    const [sendEmailVerification, sending, error1] =
    useSendEmailVerification(auth);
  return (
    <div className="verify-container">
      <div className="box">
        <div className="email-verify">
          <h3 className="text-danger">Your Email is not verified</h3>
          <h5 className="text-primary">Please Verify your email first</h5>
          <button
            className="btn btn-danger mt-1"
            onClick={async () => {
              await sendEmailVerification();
              alert("email sent. Please verify..");
            }}
          >
            Send Verification Email Again
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotVerified;
