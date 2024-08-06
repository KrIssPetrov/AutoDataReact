import React from 'react';

const About = () => {
    return (
        <>
            <main >
  <br></br>
  <br></br>
  <br></br>


                <div className="pagetitle">
                    <h1>About Us</h1>
                </div>
                <br></br>

                <section className="section about">
                    <div className="row gy-4">
                        <div className="col-xl-6">
                            <div className="card">
                                <div className="card-body">
                                    <h3>Welcome to Auto Data Car Rentals</h3>
                                    <p>
                                        At Auto Data Car Rentals, we provide a wide range of vehicles to suit your needs. Whether you're looking for a compact car for city driving or an SUV for a family trip, we have you covered. Our mission is to offer the best car rental service with a seamless experience from booking to return.
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-xl-6">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="card">
                                        <img src="https://t4.ftcdn.net/jpg/07/29/05/71/360_F_729057133_fdrzP371znu0OPuCZE02qzswnfNQ62fI.jpg" className="card-img-top" alt="Car rental" />
                                        <div className="card-body">
                                            <h5 className="card-title">Wide Selection of Vehicles</h5>
                                            <p className="card-text">Choose from a variety of cars, SUVs, and vans to fit your travel needs.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="card">
                                        <img src="https://rentsyst.com/assets/1de54523/img/png/top-carsharing-img.png" className="card-img-top" alt="Customer service" />
                                        <div className="card-body">
                                            <h5 className="card-title">Excellent Customer Service</h5>
                                            <p className="card-text">Our team is dedicated to ensuring you have the best rental experience.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default About;
