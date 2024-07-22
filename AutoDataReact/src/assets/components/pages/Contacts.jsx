import { useState, useEffect, useContext } from 'react';





const Contacts = () => {

    

    const [productItems, setProductItems] = useState([]);



    // useEffect(() => {
    //     fetch('http://localhost:3030/data/products')
    //         .then(response => response.json())
    //         .then(response => setProductItems(Object.values(response)))
    //         .catch(error => console.error(error));
    // }, [])

 

    return (
        <>
            <div className="container h-cont">
                <div className="row justify-content-center mb-5 pb-3 mt-5 pt-5">
                    <div className="col-md-7 heading-section text-center ftco-animate">
                        <h2 className="mb-4">Contacts</h2>
                        <p className="flip"><span className="deg1"></span><span className="deg2"></span><span className="deg3"></span></p>
                        <p className="mt-5">Contact form .</p>
                    </div>
                </div>



                {/* CATEGORIES ******************************** */}
                {/* <div className="col-md-12 nav-link-wrap mb-5">
                    <div className="nav ftco-animate nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        <a className="nav-link active" id="v-pills-1-tab" data-toggle="pill" href="#v-pills-1" role="tab" aria-controls="v-pills-1" aria-selected="true">Пица</a>

                        <a className="nav-link" id="v-pills-2-tab" data-toggle="pill" href="#v-pills-2" role="tab" aria-controls="v-pills-2" aria-selected="false">Напики</a>

                        <a className="nav-link" id="v-pills-3-tab" data-toggle="pill" href="#v-pills-3" role="tab" aria-controls="v-pills-3" aria-selected="false">Burgers</a>

                        <a className="nav-link" id="v-pills-4-tab" data-toggle="pill" href="#v-pills-4" role="tab" aria-controls="v-pills-4" aria-selected="false">Алкохол</a>
                    </div>
                </div> */}
                {/* ******************************** */}


                {/* <div className="row">
                    {productItems.map((productItem, index) => (
                        <div key={productItem._id} className={`col-md-6 ${index % 2 === 0 ? 'order-md-1' : 'order-md-2'}`}>
                            <MenuItem {...productItem} />
                          
                        </div>
                    ))}
                </div> */}
            </div >

        </>

    )

}

export default Contacts;