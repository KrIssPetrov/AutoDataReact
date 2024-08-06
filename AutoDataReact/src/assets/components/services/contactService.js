// src/services/carService.js
import * as request from '../../../lib/request';

const baseUrl = 'http://localhost:3030/data/contacts';

export const getContacts = async () => {
    const result = await request.get(`${baseUrl}`);
    return result;
};

export const updateContact = async (data) => {
    const result = await request.put(`${baseUrl}/${data._id}`,
    data);
    return result;
}

export const removeContact = async (id) => {
    const result = await request.remove(`${baseUrl}/${id}`);
    return result;
}

export const createContact = async (data) => {
    const result = await request.post(`${baseUrl}`,
    data);
    return result;
}