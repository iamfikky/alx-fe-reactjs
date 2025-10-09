import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const isAuthenticated = false; // Change to true to simulate login

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return children;
}
