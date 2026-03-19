import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
 const { user, loading } = useContext(AuthContext);

 if (loading) {
  return <span class="loading loading-spinner text-white text-center text-[80px]"></span>
 }

 if (!user) {
  return <Navigate to="/login" />;
 }

 return children;
};

export default PrivateRoute;