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
                    <div class="row mb-3">
                         <label>Make</label>
                    <input name='make' className='form-control' value={values.make} onChange={onChangeInfo}></input>
                    </div>
                    <div class="row mb-3">
                    <label>Model</label>
                    <input name='model'  className='form-control' value={values.model} onChange={onChangeInfo}></input>
                    </div>
                    <div class="row mb-3">
                    <label>Image</label>
                    <input name='img'   className='form-control' value={values.img} onChange={onChangeInfo}></input>
                    </div>
                    <div class="row mb-3">
                    <label>Material</label>
                    <input name='material' className='form-control' value={values.material} onChange={onChangeInfo}></input>
                    </div>
                    <div class="row mb-3">
                    <label>Weight</label>
                    <input name='weight'  className='form-control' value={values.weight} onChange={onChangeInfo}></input>
                    </div>
                    <div class="row mb-3">
                    <label>Year</label>
                    <input name='year'  className='form-control' value={values.year} onChange={onChangeInfo}></input>
                    </div>
                    <div class="row mb-3">
                    <label>Price</label>
                    <input name='price'  className='form-control' value={values.price} onChange={onChangeInfo}></input>
                    </div>
                    <div class="row mb-3">
                    <label>Description</label>
                    <input name='description'  className='form-control' value={values.description} onChange={onChangeInfo}></input>
                    </div>
                </div>
            ) : (
                <p>No details available</p>
            )}
            <div className="flex justify-content-end mt-4">
                <Button label="Save"  icon="pi pi-check" onClick={handleSubmit} />
                <Button label="Close" severity="danger" icon="pi pi-times" onClick={onHide} className="ml-2" />
            </div>
        </Dialog>
    );
};

export default EditDetailsModal;
