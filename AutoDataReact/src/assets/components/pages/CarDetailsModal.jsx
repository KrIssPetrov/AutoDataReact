// CarDetailsModal.jsx
import React from 'react';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';

const CarDetailsModal = ({ car, visible, onHide }) => {




    return (
        <Dialog header={car?.make} visible={visible} style={{ width: '50vw' }} onHide={onHide}>
            {car ? (
                <div>
                    <img src={car.img} alt={car.make} style={{ width: '100%', height: 'auto' }} />
                    <p>{car.description}</p>
                    {/* Add more car details here */}
                </div>
            ) : (
                <p>No details available</p>
            )}
            <Button label="Close" icon="pi pi-times" onClick={onHide} />
        </Dialog>
    );
};

export default CarDetailsModal;
