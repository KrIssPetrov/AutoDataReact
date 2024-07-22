import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom";
import AuthContext from "../context/AuthContext";


export default function AuthGuard(props) {
    const { auth } = useContext(AuthContext);

    if (!auth.accessToken) {
        return <Navigate to="/login" />;
    }

    return <Outlet />;
}