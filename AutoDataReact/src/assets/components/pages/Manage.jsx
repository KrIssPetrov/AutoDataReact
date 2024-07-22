import { useState, useEffect, useContext } from 'react';
import * as carService from '../services/carService';
import CarDetailsModal from './CarDetailsModal';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthContext from '../context/AuthContext';
import { Link } from 'react-router-dom';
import EditDetailsModal from './EditDetailsModal';

const Manage = () => {
    const { auth } = useContext(AuthContext);
    const [cars, setCars] = useState([]);
    const [selectedCar, setSelectedCar] = useState(null);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isModalEditVisible, setIsModalEditVisible] = useState(false);
    const [sortOption, setSortOption] = useState('');

    


    useEffect(() => {
        
        const fetchCars = async () => {
            try {
                const cars = await carService.getCars();
                setCars(cars);
            } catch (error) {
                console.error('Failed to fetch cars:', error);
            }
        };

        fetchCars();
    }, []);

    const showCarDetails = (car) => {
        console.log('show');
        setSelectedCar(car);
        setIsModalVisible(true);
    };


    const editCar = (car) => {
        setSelectedCar(car);
        setIsModalEditVisible(true);
    };


    const updateCar = async (updatedCar) => {

      
        try {
            const updatedCarData = await carService.updateCar(updatedCar);

          
            setCars((prevCars) =>
                prevCars.map((car) => (car._id === updatedCarData._id ? updatedCarData : car))
            );
            setIsModalEditVisible(false);
        } catch (error) {
            console.error('Failed to update car:', error);
        }
    };
    const hideCarDetails = () => {
        setSelectedCar(null);
        setIsModalVisible(false);
    };

    const hideEditCarDetails = () => {
        setSelectedCar(null);
        setIsModalEditVisible(false);
    };


    const sortCars = (option) => {
        let sortedCars = [...cars];
        if (option === 'make-asc') {
            sortedCars.sort((a, b) => a.make.localeCompare(b.make));
        } else if (option === 'price-low-high') {
            sortedCars.sort((a, b) => a.price - b.price);
        } else if (option === 'price-high-low') {
            sortedCars.sort((a, b) => b.price - a.price);
        }
        setCars(sortedCars);
        setSortOption(option);
    };

    return (
        <>
            <main className='container mt-5'>
                <div className="text-center mb-5">
                    <h2>Welcome to Rent A Car</h2>
                    <p>Choose from our latest collection of cars and enjoy your ride!123156</p>
                </div>

                <div id="home-page" className="mb-5">
                    <h4 className="mb-4">View all avaible cars</h4>
                    <div className="d-flex justify-content-end mb-4">
                        <select
                            className="form-select w-auto"
                            value={sortOption}
                            onChange={(e) => sortCars(e.target.value)}
                        >
                            <option value="">Sort By</option>
                            <option value="make-asc">Make A-Z</option>
                            <option value="price-low-high">Price Low to High</option>
                            <option value="price-high-low">Price High to Low</option>
                        </select>
                    </div>
                    <div className="row">
                        {cars.map(car => (
                            <div key={car.id} className="col-12 col-md-6 col-lg-4 mb-4">
                                <Card className="h-100">
                                    <img src={car.img} alt={car.make} className="card-img-top" style={{ height: '200px', objectFit: 'cover' }} />
                                    <div className="card-body">
                                        <h5 className="card-title">{car.make}</h5>
                                        <p className="card-text">{car.description}</p>
                                        <p className="card-text"><strong>Price:</strong> ${car.price}/per day</p>

                                        <Button label="View Details" icon="pi pi-search" className="p-button-info" onClick={() => showCarDetails(car)} />
                                   
                                        {auth._id == car._ownerId && (
                                            <>
                                                <Button label="Edit car details" icon="pi pi-search" className="p-button-secondary" onClick={() => editCar(car)} />
                                                <Button label="Remove car" icon="pi pi-search" className="p-button-danger" onClick={() => removeCar(car)} />
                                            </>
                                        )}
                                    </div>
                                </Card>
                            </div>
                        ))}
                    </div>
                    {!cars.length && <p className="text-center">No cars yet</p>}
                </div>
                <CarDetailsModal car={selectedCar} visible={isModalVisible} onHide={hideCarDetails} />
                <EditDetailsModal car={selectedCar} visible={isModalEditVisible} onHide={hideEditCarDetails} updateCar={updateCar} />
            
            </main>
        </>
    )
}

export default Manage;
