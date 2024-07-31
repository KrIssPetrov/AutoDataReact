import React, { useEffect, useState } from 'react';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';

const EditDetailsModal = ({ car, visible, onHide, updateCar }) => {
    const [values, setValues] = useState({
        make: '',
        model: '',
        img: '',
        material: '',
        weight: '',
        year: '',
        price: '',
        description: '',
        
    });

    useEffect(() => {
        if (car) {
            setValues({
                make: car.make || '',
                model: car.model || '',
                img: car.img || '',
                material: car.material || '',
                weight: car.weight || '',
                year: car.year || '',
                price: car.price || '',
                description: car.description || '',
                _id: car._id
            });
        }
    }, [car]);

    const onChangeInfo = (e) => {
        const { name, value } = e.target;

        console.log(e.target.name, e.target.value);
        setValues(state => ({
            ...state,
            [name]: value
        }));
    };

    const handleSubmit = () => {
        updateCar(values);
        onHide();
    };

    return (
        <Dialog header={`Edit car ${car?.make}`} visible={visible} style={{ width: '50vw' }} onHide={onHide}>
            {car ? (
                <div className='flex flex-col'>
                    <label>Make</label>
                    <input name='make' value={values.make} onChange={onChangeInfo}></input>
                    
                    <label>Model</label>
                    <input name='model' value={values.model} onChange={onChangeInfo}></input>
                    
                    <label>Image</label>
                    <input name='img' value={values.img} onChange={onChangeInfo}></input>
                    
                    <label>Material</label>
                    <input name='material' value={values.material} onChange={onChangeInfo}></input>
                    
                    <label>Weight</label>
                    <input name='weight' value={values.weight} onChange={onChangeInfo}></input>
                    
                    <label>Year</label>
                    <input name='year' value={values.year} onChange={onChangeInfo}></input>
                    
                    <label>Price</label>
                    <input name='price' value={values.price} onChange={onChangeInfo}></input>
                    
                    <label>Description</label>
                    <input name='description' value={values.description} onChange={onChangeInfo}></input>
                </div>
            ) : (
                <p>No details available</p>
            )}
            <div className="flex justify-content-end mt-4">
                <Button label="Save" icon="pi pi-check" onClick={handleSubmit} />
                <Button label="Close" icon="pi pi-times" onClick={onHide} className="ml-2" />
            </div>
        </Dialog>
    );
};

export default EditDetailsModal;
