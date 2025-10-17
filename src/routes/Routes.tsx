import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Landing from "@/pages/Landing";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
//import Dashboard from "../pages/Dashboard"; // optional future page
// keep route imports minimal; add auth imports when protected routes are used

// Protected Route example (unused) - uncomment and adapt when adding protected pages
/*
function ProtectedRoute({ children }: { children: ReactNode }): ReactElement | null {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }
  return (children as ReactElement) ?? null;
}
*/

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Example of protected route */}
        {/* <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        /> */}
        
        {/* Catch-all redirect */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
