import React from "react";
import './RequireAuth.css'
import {
  useAuthState,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../../firebase.init";
import NotVerified from "../../Shared/NotVerified/NotVerified";

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
     <NotVerified></NotVerified>
    );
  }
  return children;
};
export default RequireAuth;