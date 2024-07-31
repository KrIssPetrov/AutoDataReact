
import React, { useContext, useState } from 'react';

import AuthContext from '../context/AuthContext';
import useForm from '../hooks/useForm';

const Register = () => {



    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState(false);

    const { registerSubmitHandler } = useContext(AuthContext);
    const { values, onChange, onSubmit } = useForm(registerSubmitHandler, {
        username: '',
        email: '',
        pass: '',
        confPass: '',
    });


    return (


        <main>
            <div className="container">

                <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">

                                <div className="card mb-3">

                                    <div className="card-body">

                                        <div className="pt-4 pb-2">
                                            <h5 className="card-title text-center pb-0 fs-4">Create an Account</h5>
                                            <p className="text-center small">Enter your personal details to create account</p>
                                        </div>

                                        <form id="create" onSubmit={onSubmit} className="container h-cont">
                                            <div className="col-12">
                                                <label htmlFor="yourName" className="form-label">Your Name</label>
                                                <input
                                                    type="text"
                                                    name="username"
                                                    className="form-control"
                                                    placeholder="Name"
                                                    value={values.username}
                                                    onChange={onChange}
                                                />
                                                <div className="invalid-feedback">Please, enter your name!</div>
                                            </div>



                                            <div className="col-12">
                                                <label htmlFor="yourUsername" className="form-label">Email</label>
                                                <div className="input-group has-validation">
                                                    <span className="input-group-text" id="inputGroupPrepend">@</span>
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        className="form-control"
                                                        placeholder="Email"
                                                        value={values.email}
                                                        onChange={onChange}
                                                    />
                                                    <div className="invalid-feedback">Please choose a email.</div>
                                                </div>
                                            </div>



                                            <div className="col-12">
                                                <label htmlFor="yourPassword" className="form-label">Password</label>
                                                <input
                                                    type="password"
                                                    name="password"
                                                    className="form-control"
                                                    placeholder="Enter a password"
                                                    value={values.password}
                                                    onChange={onChange}
                                                />
                                                <div className="invalid-feedback">Please enter your password!</div>
                                            </div>





                                            <div className="col-12">
                                                <label htmlFor="yourPassword" className="form-label">Re enter  Password</label>
                                                <input
                                                    type="password"
                                                    name="confPass"
                                                    className="form-control"
                                                    placeholder="Confirm password"
                                                    value={values.confPassword}
                                                    onChange={onChange}
                                                />
                                                <div className="invalid-feedback">Please enter your password!</div>
                                            </div>




                                            <div className="col-12">
                                                <div className="form-check">
                                                    <input className="form-check-input" name="terms" type="checkbox" value="" id="acceptTerms" required />
                                                    <label className="form-check-label" htmlFor="acceptTerms">I agree and accept the <a href="#">terms and conditions</a></label>
                                                    <div className="invalid-feedback">You must agree before submitting.</div>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <button className="btn btn-primary w-100" type="submit">Create Account</button>
                                            </div>
                                            <div className="col-12">
                                                <p className="small mb-0">Already have an account? <a href="/login">Log in</a></p>
                                            </div>
                                        </form>

                                    </div>
                                </div>

                                <div className="credits">

                                </div>

                            </div>
                        </div>
                    </div>

                </section>

            </div>
        </main>









    )
};



export default Register

{/* <section id="create-page">
            <form id="create" onSubmit={onSubmit} className="container h-cont">
                <h1>Регистрирай се</h1>


                <div className="form-group">
                    <input
                        type="text"
                        name="user"
                        className="form-control"
                        placeholder="Потребителско име"
                        value={values.user}
                        onChange={onChange}
                    />
                    <div className="form-group">
                        <input
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder="Email"
                            value={values.email}
                            onChange={onChange}
                        />
                    </div>

                    <div className="form-group">
                        <input
                            type="password"
                            name="password"
                            className="form-control"
                            placeholder="Парола"
                            value={values.password}
                            onChange={onChange}
                        />
                    </div>

                    <div className="form-group">
                        <input
                            type="password"
                            name="confPass"
                            className="form-control"
                            placeholder="Повторете парола"
                            value={values.confPassword}
                            onChange={onChange}
                        />
                        {error && (<span className='text-danger'>Паролите не съвпадат ! </span>)}
                    </div>
                </div>
                <div className="form-group">
                    <input type="submit" value="Регистрация" className="btn btn-primary py-3 px-5" />
                </div>
            </form>
        </section> */}