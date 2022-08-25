import React from "react";
import './RequireAuth.css'
import {
  useAuthState,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../../firebase.init";

const RequireAuth = ({ children }) => {
  const location = useLocation();
  const [user, loading, error] = useAuthState(auth);
  const [sendEmailVerification, sending, error1] =
    useSendEmailVerification(auth);
  if (loading) {
    return <p>Loading...</p>
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
  if (!user.emailVerified) {
    return (
      <div className="email">
        <div className="email-verify">
        <h3 className="text-danger">Your Email is not verified</h3>
        <h5 className="text-primary">Please Verify your email first</h5>
        <button
          className="btn btn-danger mt-1"
          onClick={async () => {
            await sendEmailVerification();
            alert("email sent. Please verify..")
          }}
        >
          Send Verification Email Again
        </button>
        </div>
      </div>
    );
  }
  return children;
};
export default RequireAuth;