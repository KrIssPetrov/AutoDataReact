import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import * as pizzaService from './../Services/pizzaService'
// import { useBasket } from "../context/BasketContext";
import AuthContext from "../context/AuthContext";



const Latest = () => {

    // const { addToBasket } = useBasket();
    // const { isAuthenticated, role } = useContext(AuthContext)
    // const [latestAdd, setLatestAdd] = useState([]);

    // useEffect(() => {
    //     pizzaService.getLatest()
    //         .then(result => setLatestAdd(result));
    // }, [])


    // const handleAddToBasket = (product) => {
    //     addToBasket(product);
    // };

    return (

        <section className="ftco-section">
            <div className="container">
                <div className="row justify-content-center mb-5 pb-3">
                    <div className="col-md-7 heading-section ftco-animate text-center">
                        <h2 className="mb-4">Последно добавени</h2>
                        <p>Запознайте се с най-новите ни предложения !</p>
                    </div>
                </div>
            </div>
            <div className="container-wrap">
                <div className="row no-gutters d-flex">

                    {/* {latestAdd.map((pizza, index) => (

                        <div key={index} className="col-lg-4 d-flex ftco-animate">
                            <div className="services-wrap d-flex">
                                <img className="img  w-80 h-80" src={pizza.imageUrl} />

                                <div className="text p-4">
                                    <h3>{pizza.title}</h3>
                                    <p>{pizza.ingredients} </p>
                                    <p className="price"><span>{pizza.priceSmall}</span>
                                        {isAuthenticated && role == 2 && (

                                            <a className="ml-2 btn btn-white btn-outline-white" onClick={() => handleAddToBasket({ name: pizza.title, price: pizza.priceSmall, id: pizza._id })}>
                                                Добави
                                            </a>
                                        )}

                                    </p>
                                </div>
                            </div>
                        </div>
                    )
                    )} */}


                </div>
            </div>


        </section>
    )
}
export default Latest