import React, { useEffect, useState } from 'react';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';

const AddCarModal = ({  visible, onHide, createCar }) => {
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

    

    const onChangeInfo = (e) => {
        const { name, value } = e.target;
        setValues(state => ({
            ...state,
            [name]: value
        }));
    };

    const handleSubmit = () => {
        createCar(values);
        onHide();
    };

    return (
        <Dialog header={'Create new car'} visible={visible} style={{ width: '50vw' }} onHide={onHide}>
           
                <div className='flex pt-2'>
                    <label>Make</label>
                    <input name='make' value={values.make} onChange={onChangeInfo}></input>
                    <br/>
                    <label>Model</label>
                    <input name='model' value={values.model} onChange={onChangeInfo}></input>
                    <br/>
                    <label>Image</label>
                    <input name='img' value={values.img} onChange={onChangeInfo}></input>
                    <br/>
                    <label>Material</label>
                    <input name='material' value={values.material} onChange={onChangeInfo}></input>
                    <br/>
                    <label>Weight</label>
                    <input name='weight' value={values.weight} onChange={onChangeInfo}></input>
                    <br/>
                    <label>Year</label>
                    <input name='year' value={values.year} onChange={onChangeInfo}></input>
                    <br/>
                    <label>Price</label>
                    <input name='price' value={values.price} onChange={onChangeInfo}></input>
                    <br/>
                    <label>Description</label>
                    <input name='description' value={values.description} onChange={onChangeInfo}></input>
                    <br/>
                </div>
            
            <div className="flex justify-content-end mt-4">
                <Button label="Save" icon="pi pi-check" onClick={handleSubmit} />
                <Button label="Close" icon="pi pi-times" onClick={onHide} className="ml-2" />
            </div>
        </Dialog>
    );
};

export default AddCarModal;
