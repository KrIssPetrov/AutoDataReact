import { createContext } from "react";
import { useNavigate } from 'react-router-dom';
import * as authService from '../services/authService'
import usePersistedState from "../hooks/usePersistedState";
import Swal from "sweetalert2";



const AuthContext = createContext();



export const AuthProvider = ({
    children,
}) => {
    const navigate = useNavigate();
    const [auth, setAuth] = usePersistedState('auth', {});



    const loginSubmitHandler = async (values) => {
        try {
            const result = await authService.login(values.email, values.password);

            setAuth(result);

            localStorage.setItem('accessToken', result.accessToken);

            navigate("/");

        } catch (error) {

            Swal.fire({

                icon: "error",
                title: `Invalid email or password !`,
                showConfirmButton: false,
                timer: 1500,

            });
        }



    };

    const registerSubmitHandler = async (values) => {

        // if((values.pass || values.confPass || values.name || values.email) ==''){
        //     Swal.fire({
        //         position: "top-end",
        //         icon: "error",
        //         title: `Попълнете всички полета !`,
        //         showConfirmButton: false,
        //         timer: 1500,
        //         customClass: {
        //           popup: 'bg-dark text-warning',
        //         }
        //       });

        //       return 400;
        // }

        // if(values.pass != values.confPass){
        //     Swal.fire({
        //         position: "top-end",
        //         icon: "error",
        //         title: `Паролите не съвпадат !`,
        //         showConfirmButton: false,
        //         timer: 1500,
        //         customClass: {
        //           popup: 'bg-dark text-warning',
        //         }
        //       });

        //       return 400;

        // }



        const result = await authService.register(values.email, values.password, values.username); // Register only with role 2

        setAuth(result);


        // localStorage.removeItem('basket');
        localStorage.setItem('accessToken', result.accessToken);

        navigate("/");
    };

    const logoutHandler = () => {

        localStorage.clear();

        setAuth({});



    };

    const values = {
        loginSubmitHandler,
        registerSubmitHandler,
        logoutHandler,
        username: auth.username || auth.email,
        email: auth.email,
        userId: auth._id,
        isAuthenticated: !!auth.accessToken,
        role: auth.role,
        auth: auth,
    };

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    );
};

AuthContext.displayName = 'AuthContext';

export default AuthContext;