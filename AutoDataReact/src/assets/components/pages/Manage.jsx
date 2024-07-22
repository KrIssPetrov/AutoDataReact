import { useState, useEffect, useContext } from 'react';
import * as carService from '../services/carService';
import CarDetailsModal from './CarDetailsModal';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthContext from '../context/AuthContext';
import { Link } from 'react-router-dom';
import EditDetailsModal from './EditDetailsModal';
import Swal from 'sweetalert2';
import { CircleSpinnerOverlay } from 'react-spinner-overlay'
import AddCarModal from './AddCarModal';

const Manage = () => {
    const { auth } = useContext(AuthContext);
    const [cars, setCars] = useState([]);
    const [selectedCar, setSelectedCar] = useState(null);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isModalEditVisible, setIsModalEditVisible] = useState(false);
    const [isModalCreateVisible, setIsModalCreateVisible] = useState(false);

    const [sortOption, setSortOption] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        const fetchCars = async () => {
            try {
                const cars = await carService.getCars();
                setCars(cars);
                setLoading(false)
            } catch (error) {
                console.error('Failed to fetch cars:', error);
                setLoading(false)
            }
        };

        fetchCars();
    }, []);

    const showCarDetails = (car) => {
        console.log('show');
        setSelectedCar(car);
        setIsModalVisible(true);
    };

    const hideCarDetails = () => {
        setSelectedCar(null);
        setIsModalVisible(false);
    };

    const hideEditCarDetails = () => {
        setSelectedCar(null);
        setIsModalEditVisible(false);
    };

    const showCreateCar = () => {

        setIsModalCreateVisible(true);
    };

    const hideCreateCar = () => {

        setIsModalCreateVisible(false);
    };

    const editCar = (car) => {
        setSelectedCar(car);
        setIsModalEditVisible(true);
    };

    const updateCar = async (updatedCar) => {

        setLoading(true)
        try {
            const updatedCarData = await carService.updateCar(updatedCar);


            setCars((prevCars) =>
                prevCars.map((car) => (car._id === updatedCarData._id ? updatedCarData : car))
            );
            setIsModalEditVisible(false);
            setLoading(false)
        } catch (error) {
            console.error('Failed to update car:', error);
            setLoading(false)
        }
    };

    const removeCar = async (car) => {

        Swal.fire({
            title: `Do you want to remove  ${car.make}?`,
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Remove",
            denyButtonText: `Don't remove`
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                setLoading(true)
                try {
                    carService.removeCar(car._id)

                    setCars((prevCars) => prevCars.filter(c => c._id !== car._id));

                    setLoading(false)
                } catch (error) {
                    console.error('Failed to remove car:', error);
                    setLoading(false)
                }

                Swal.fire("Removed!", "", "success");
            } else if (result.isDenied) {
                Swal.fire("Car is not removed", "", "info");
            }
        });


    }


    const createCar = async (data) => {

        setLoading(true)
        try {
            const createCarData = await carService.createCar(data);

            setCars((prevCars) => [
                ...prevCars,
                createCarData
            ])

            

            setIsModalCreateVisible(false);
            setLoading(false)
        } catch (error) {
            console.error('Failed to add new car:', error);
            setLoading(false)
        }
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
            <main className='cosntainer mt-5'>
                <CircleSpinnerOverlay
                    loading={loading}
                    overlayColor="rgba(0,153,255,0.2)"
                />
                <div className="text-center mb-5">
                    <h2>Welcome to Rent A Car</h2>
                    <p>Choose from our latest collection of cars and enjoy your ride!</p>
                </div>
                <input type='button' value={'Add new car'} onClick={showCreateCar} ></input>
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
                <AddCarModal visible={isModalCreateVisible} onHide={hideCreateCar} createCar={createCar} />

            </main>
        </>
    )
}

export default Manage;
