import { Outlet, Navigate } from "react-router";
import { use } from "react";
import { AuthContext } from "../context/AuthProvider";

function ProtectedLayout() {
  const { user, loading } = use(AuthContext);

  return (
    <>{!loading && <> {user ? <Outlet /> : <Navigate to="/login" />}</>}</>
  );
}

export default ProtectedLayout;
