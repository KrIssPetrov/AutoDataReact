import React, { useEffect, useState } from 'react';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';

const AddCarModal = ({ visible, onHide, createCar }) => {
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

    const [errors, setErrors] = useState('');
    const [errorsHeader, setErrorsHeader] = useState('');

    const onChangeInfo = (e) => {
        const { name, value } = e.target;
        setValues(state => ({
            ...state,
            [name]: value
        }));
    };

    const handleSubmit = () => {

        const newErrors = {};
        for (const [key, value] of Object.entries(values)) {
            if (!value) {
                newErrors[key] = `${key} is required`;
            }
        }
        if (Object.keys(newErrors).length > 0) {
            setErrorsHeader('Errors, please fill form again');
            return;
        }



        setErrorsHeader('');
        if (errors) {
            setErrorsHeader(errors);
            return
        };
        createCar(values);
        onHide();
        setErrorsHeader('');
        setValues({
            make: '',
            model: '',
            img: '',
            material: '',
            weight: '',
            year: '',
            price: '',
            description: '',
        })

    }

    const CheckErrors = (e) => {


        if (e.target.name === 'make') {
            if (e.target.value.length < 3) {
                e.target.classList.add('is-invalid');
                setErrors('Make must be at least 3 characters long');
            } else {
                e.target.classList.remove('is-invalid');
                setErrors('');
            }
        }

        if (e.target.name === 'model') {
            if (e.target.value.length < 3) {
                e.target.classList.add('is-invalid');
                setErrors('Model must be at least 3 characters long');
            } else {
                e.target.classList.remove('is-invalid');
                setErrors('');
            }
        }

        if (e.target.name === 'img') {
            if (e.target.value.length < 3) {
                e.target.classList.add('is-invalid');
                setErrors('Image must be at least 3 characters long');
            } else {
                e.target.classList.remove('is-invalid');
                setErrors('');
            }
        }

        if (e.target.name === 'material') {
            if (e.target.value.length < 3) {
                e.target.classList.add('is-invalid');
                setErrors('Material must be at least 3 characters long');
            } else {
                e.target.classList.remove('is-invalid');
                setErrors('');
            }
        }

        if (e.target.name === 'weight') {
            if (e.target.value.length < 3) {
                e.target.classList.add('is-invalid');
                setErrors('Weight must be at least 3 characters long');
            } else {
                e.target.classList.remove('is-invalid');
                setErrors('');
            }
        }

        if (e.target.name === 'year') {
            if (e.target.value.length < 3) {
                e.target.classList.add('is-invalid');
                setErrors('Year must be at least 3 characters long');

            } else {
                e.target.classList.remove('is-invalid');
                setErrors('');
            }
        }

        if (e.target.name === 'price') {
            if (e.target.value.length < 3) {
                e.target.classList.add('is-invalid');
                setErrors('Price must be at least 3 characters long');
            } else {
                e.target.classList.remove('is-invalid');
                setErrors('');
            }
        }

        if (e.target.name === 'description') {
            if (e.target.value.length < 3) {
                e.target.classList.add('is-invalid');
                setErrors('Description must be at least 3 characters long');
            } else {
                e.target.classList.remove('is-invalid');
                setErrors('');
            }
        }
    }
    return (
        <Dialog header={'Create new car'} visible={visible} style={{ width: '50vw' }} onHide={onHide}>

            {errorsHeader && (<div>{errorsHeader}</div>)}
            <div class="card">
                <div class="card-body">
                    <div class="row mb-3">
                        <label for="inputEmail3" class="col-sm-2 col-form-label">Make</label>
                        <div class="col-sm-10">
                            <input class="form-control" name='make' value={values.make} onChange={onChangeInfo} onBlur={CheckErrors}></input>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="inputEmail3" class="col-sm-2 col-form-label">Model</label>
                        <div class="col-sm-10">
                            <input name='model' className='form-control' value={values.model} onChange={onChangeInfo} onBlur={CheckErrors}></input>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="inputPassword3" class="col-sm-2 col-form-label">Image</label>
                        <div class="col-sm-10">
                            <input name='img' value={values.img} onChange={onChangeInfo} class="form-control" onBlur={CheckErrors}></input>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="inputPassword3" class="col-sm-2 col-form-label">Material</label>
                        <div class="col-sm-10">
                            <input name='material' value={values.material} onChange={onChangeInfo} class="form-control" onBlur={CheckErrors}></input>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="inputPassword3" class="col-sm-2 col-form-label">Weight</label>
                        <div class="col-sm-10">
                            <input name='weight' value={values.weight} onChange={onChangeInfo} className='form-control' onBlur={CheckErrors}></input>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="inputPassword3" class="col-sm-2 col-form-label">Year</label>
                        <div class="col-sm-10">
                            <input name='year' value={values.year} onChange={onChangeInfo} className='form-control' onBlur={CheckErrors}></input>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="inputPassword3" class="col-sm-2 col-form-label">Price</label>
                        <div class="col-sm-10">
                            <input name='price' value={values.price} onChange={onChangeInfo} className='form-control' onBlur={CheckErrors}></input>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="inputPassword3" class="col-sm-2 col-form-label">Description</label>
                        <div class="col-sm-10">
                            <input name='description' value={values.description} onChange={onChangeInfo} className='form-control' onBlur={CheckErrors}></input>
                        </div>
                    </div>
                </div>
            </div>



            {values.img && <img src={values.img} alt={values.make} className="img-fluid" />}

            <div className="flex justify-content-end mt-4">
                <Button label="Save" icon="pi pi-check" onClick={handleSubmit} />
                <Button label="Close" severity="danger" icon="pi pi-times" onClick={onHide} className="ml-2px " />
            </div>
        </Dialog>
    );
};

export default AddCarModal;
