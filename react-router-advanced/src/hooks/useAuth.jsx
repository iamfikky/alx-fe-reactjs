import { useState } from "react";

export default function useAuth() {
  // Simulate authentication status
  const [isAuthenticated] = useState(true); // set false to test redirection
  return { isAuthenticated };
}
