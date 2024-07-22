import { useContext } from "react";
import useForm from "../hooks/useForm";
import AuthContext from "../context/AuthContext";
import { Link } from "react-router-dom";




const LoginFormKyes = {
    Email: 'email',
    Password: 'password',
};

export default function Login() {
    const { loginSubmitHandler } = useContext(AuthContext);
    const { values, onChange, onSubmit } = useForm(loginSubmitHandler, {
        [LoginFormKyes.Email]: '',
        [LoginFormKyes.Password]: '',
    });

    return (



        <main>



            <div className="container">
                <section class="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                            <div className="card mb-3">
                                <div className="card-body">
                                    <div className="pt-4 pb-2">
                                        <h5 className="card-title text-center pb-0 fs-4">Login to Your Account</h5>
                                        <p className="text-center small">Enter your username & password to login</p>
                                    </div>

                                    <form onSubmit={onSubmit} className="row g-3 needs-validation" >

                                        <div className="col-12">
                                            <label for="yourUsername" className="form-label">Username</label>
                                            <div className="input-group has-validation">
                                                <span className="input-group-text" id="inputGroupPrepend">@</span>

                                                <input
                                                    type="email"
                                                    id="email"
                                                    name='email'
                                                    className="form-control"
                                                    placehoelder="Enter email"
                                                    onChange={onChange}
                                                    value={values[LoginFormKyes.Email]}
                                                />
                                                <div className="invalid-feedback">Please enter your username.</div>
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <label for="yourPassword" className="form-label">Password</label>
                                            <input
                                                type="password"
                                                id="login-password"
                                                className="form-control"
                                                name={LoginFormKyes.Password}
                                                placeholder="Enter password"
                                                onChange={onChange}
                                                value={values[LoginFormKyes.Password]}
                                            />
                                            <div className="invalid-feedback">Please enter your password!</div>
                                        </div>


                                        <div className="col-12">
                                            <button className="btn btn-primary w-100" type="submit">Login</button>
                                        </div>
                                        <div className="col-12">
                                            <p className="small mb-0">Don't have account? <a href="/register">Create an account</a></p>
                                        </div>
                                    </form>

                                </div>
                            </div>

                            <div className="credits">


                            </div>

                        </div>
                    </div>
                </section>
            </div>


        </main>
        


    );
}

{/* <div classNameName="col-md-12 ftco-animate d-flex justify-content-center align-items-center h-cont">

        <form onSubmit={onSubmit} classNameName="contact-form">
            <div classNameName="form-group ">
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name={LoginFormKyes.Email}
                    classNameName="form-control"
                    placeholder="Въведи email"
                    onChange={onChange}
                    value={values[LoginFormKyes.Email]}
                />
            </div>
    
            <div classNameName="form-group">
                <label htmlFor="login-password">Парола:</label>
                <input
                    type="password"
                    id="login-password"
                    classNameName="form-control"
                    name={LoginFormKyes.Password}
                    placeholder="Въведи парола"
                    onChange={onChange}
                    value={values[LoginFormKyes.Password]}
                />
            </div>
    
            <div classNameName="form-group text-center">
                <input type="submit" value="Вход" classNameName="btn btn-primary py-3 px-5" />
            </div>
        </form>
    
        <p classNameName="text-center">
            <Link to="/register">Регистрация</Link>
        </p>
    </div> */}


 