// CarDetailsModal.jsx
import React from 'react';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';

const CarDetailsModal = ({ car, visible, onHide }) => {




    return (
        <Dialog header={car?.make} visible={visible} style={{ width: '30vw' }} onHide={onHide}>
            {car ? (
                <div>
                    <img src={car.img} alt={car.make} style={{ width: '80%', height: '40%', marginLeft:'60px' }} />
                    <div className='text-center'>

                    <p>Make: <b>{car.make}</b> </p>
                    <p>Model: <b>{car.model}</b></p>
                    <p>Description: <b>{car.description}</b></p>
                    <p>Weight:  <b>{car.weight}</b> kg</p>
                    <p>Price: <b>{car.price}</b> $/per day</p>
                    <p>Year: <b>{car.year}</b></p>
                    <p>Material:<b>{car.material}</b> </p>
                    {/* <p>{car._ownerId}</p> */}
                    {/* Add more car details here */}
                    </div>
                </div>
            ) : (
                <p>No details available</p>
            )}
            <Button label="Close" severity="danger" icon="pi pi-times" onClick={onHide} />
        </Dialog>
    );
};

export default CarDetailsModal;
