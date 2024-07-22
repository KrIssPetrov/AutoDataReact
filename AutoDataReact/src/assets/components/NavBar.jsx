import { NavLink } from "react-router-dom";
import AuthContext from "./context/AuthContext";
import { useContext } from "react";

export const NavBar = () => {
    const {
        isAuthenticated,
        username,
        role,
    } = useContext(AuthContext);


    return (
        <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
            <div className="container">
                <NavLink className="navbar-brand" to="/">
                    <span className="flaticon-pizza-1 mr-1"></span>Auto<br /><small>Data</small>
                </NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="oi oi-menu"></span> Меню
                </button>
                <div className="collapse navbar-collapse" id="ftco-nav">
                    <ul className="navbar-nav ml-auto">



                        <li className="nav-item">
                            <NavLink to="/" className="nav-link" activeclassname="active">
                                Начало
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/vehicles" className="nav-link" activeclassname="active">
                                Автомобили
                            </NavLink>
                        </li>


                        <li className="nav-item">
                            <NavLink to="/contacts" className="nav-link" activeclassname="active">
                                Контакти
                            </NavLink>
                        </li>

                        {isAuthenticated && (
                            <>
                                {role == 1 && (

                                    <li className="nav-item">
                                        <NavLink to="/get-all-products" className="nav-link" activeclassname="active">
                                            Добави автомобил
                                        </NavLink>
                                    </li>
                                )}

                                {role == 2 && (
                                    <>

                                        <li className="nav-item">
                                            <NavLink to="/basket" className="nav-link" activeclassname="active">
                                                Меню1
                                            </NavLink>
                                        </li>
                                    </>
                                )}
                                {/* <li className="nav-item">
                                            <NavLink to="/orders" className="nav-link" activeclassname="active">
                                                Поръчки
                                            </NavLink>
                                        </li> */}


                                <li className="nav-item">
                                    <NavLink to="/logout" className="nav-link" activeclassname="active">
                                        Изход
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/" className="nav-link" activeclassname="active">
                                        {username}  {role == '1' ? '(Админ)' : '(Потребител)'}
                                    </NavLink>
                                </li>
                            </>
                        )}

                        {!isAuthenticated && (
                            <li className="nav-item">
                                <NavLink to="/login" className="nav-link" activeclassname="active">
                                    Вход
                                </NavLink>
                            </li>
                        )}

                    </ul>
                </div>
            </div>
        </nav>
    );
};
