import { Navigate } from "react-router-dom";
const IsAdmin = ({ isAdmin, children }) => {
  if (!isAdmin) {
    return <Navigate to="/" replace />;
  }
  return children;
};
export default IsAdmin;