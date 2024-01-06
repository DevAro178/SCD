import { Navigate } from "react-router-dom";
const IsLoggedOut = ({ isLoggedIn, children }) => {
  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  }
  return children;
};
export default IsLoggedOut;