import { Navigate } from "react-router-dom";
const Protected = ({ isLoggedIn, isAdmin, children }) => {
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }
  if (isAdmin && isLoggedIn) {
    return <Navigate to="/admin" replace />;
  }
  return children;
};
export default Protected;