// src/components/Home.jsx
import React, { useState, useEffect, useContext } from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import CarDetailsModal from '../pages/CarDetailsModal';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import * as carService from '../services/carService';
import AuthContext from '../context/AuthContext';

const Home = () => {
    const { auth } = useContext(AuthContext)
    const [latestCars, setLatestCars] = useState([]);
    const [selectedCar, setSelectedCar] = useState(null);
    const [isModalVisible, setIsModalVisible] = useState(false);

    useEffect(() => {
        const fetchCars = async () => {
            try {
                const cars = await carService.getLatest();
                setLatestCars(cars);
            } catch (error) {
                console.error('Failed to fetch cars:', error);
            }
        };

        fetchCars();
    }, []);
   
    const showCarDetails = (car) => {
        setSelectedCar(car);
        setIsModalVisible(true);
    };

    const hideCarDetails = () => {
        setSelectedCar(null);
        setIsModalVisible(false);
    };

 
    return (
        <main className='container mt-5'>
            <div className="text-center mb-5">
                <h2>Welcome to Rent A Car Catalog</h2>
                <p>Choose from our latest collection of cars and enjoy your ride!</p>
            </div>
            <div className="text-center mb-5">
                <img src="./home.jpg" alt="rent a car" className="img-fluid" />
            </div>
            <div id="home-page">
                <h4 className="mb-4">Latest Cars</h4>
                <div className="row">
                    {latestCars.map(car => (
                        <div key={car.id} className="col-12 col-md-6 col-lg-4 mb-4">
                           
                            <Card className="h-100">
                                <img src={car.img} alt={car.make} className="card-img-top" style={{ height: '200px', objectFit: 'cover' }} />
                                <div className="card-body">
                                    <h5 className="card-title">{car.make}</h5>
                                    <p className="card-text">{car.description}</p>
                                    {auth.accessToken && (
                                        <Button label="View Details" icon="pi pi-search" className="p-button-secondary" onClick={() => showCarDetails(car)} />

                                    )}
                                </div>
                            </Card>
                        </div>
                    ))}
                </div>
                {!latestCars.length && <p className="text-center">No cars yet</p>}
            </div>

            <CarDetailsModal car={selectedCar} visible={isModalVisible} onHide={hideCarDetails} />

        </main>

    );
};

export default Home;
