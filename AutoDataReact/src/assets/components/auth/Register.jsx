
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
            <div class="container">

                <section class="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">

                                <div class="card mb-3">

                                    <div class="card-body">

                                        <div class="pt-4 pb-2">
                                            <h5 class="card-title text-center pb-0 fs-4">Create an Account</h5>
                                            <p class="text-center small">Enter your personal details to create account</p>
                                        </div>

                                        <form id="create" onSubmit={onSubmit} className="container h-cont">
                                            <div class="col-12">
                                                <label for="yourName" class="form-label">Your Name</label>
                                                <input
                                                    type="text"
                                                    name="username"
                                                    className="form-control"
                                                    placeholder="Name"
                                                    value={values.username}
                                                    onChange={onChange}
                                                />
                                                <div class="invalid-feedback">Please, enter your name!</div>
                                            </div>



                                            <div class="col-12">
                                                <label for="yourUsername" class="form-label">Email</label>
                                                <div class="input-group has-validation">
                                                    <span class="input-group-text" id="inputGroupPrepend">@</span>
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        className="form-control"
                                                        placeholder="Email"
                                                        value={values.email}
                                                        onChange={onChange}
                                                    />
                                                    <div class="invalid-feedback">Please choose a email.</div>
                                                </div>
                                            </div>



                                            <div class="col-12">
                                                <label for="yourPassword" class="form-label">Password</label>
                                                <input
                                                    type="password"
                                                    name="password"
                                                    className="form-control"
                                                    placeholder="Enter a password"
                                                    value={values.password}
                                                    onChange={onChange}
                                                />
                                                <div class="invalid-feedback">Please enter your password!</div>
                                            </div>





                                            <div class="col-12">
                                                <label for="yourPassword" class="form-label">Re enter  Password</label>
                                                <input
                                                    type="password"
                                                    name="confPass"
                                                    className="form-control"
                                                    placeholder="Confirm password"
                                                    value={values.confPassword}
                                                    onChange={onChange}
                                                />
                                                <div class="invalid-feedback">Please enter your password!</div>
                                            </div>




                                            <div class="col-12">
                                                <div class="form-check">
                                                    <input class="form-check-input" name="terms" type="checkbox" value="" id="acceptTerms" required />
                                                    <label class="form-check-label" for="acceptTerms">I agree and accept the <a href="#">terms and conditions</a></label>
                                                    <div class="invalid-feedback">You must agree before submitting.</div>
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <button class="btn btn-primary w-100" type="submit">Create Account</button>
                                            </div>
                                            <div class="col-12">
                                                <p class="small mb-0">Already have an account? <a href="/login">Log in</a></p>
                                            </div>
                                        </form>

                                    </div>
                                </div>

                                <div class="credits">

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